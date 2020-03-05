class JobsController < ApplicationController

  skip_before_action :verify_authenticity_token
  include HTTParty

  def index
  end

  def search
    if params.key?('role')
      role = params[:role]
      experience = params[:experience]
      location = params[:location]
      jobs = scrape_all(role, experience, location)
      render json: jobs
    else
      url = params[:url]
      job = scrape_one(url)
      render json: job
    end
  end

  private

  def job
    @job ||= Job.find(params[:id])
  end

  def scrape_all(role, experience, location)
    location = location.capitalize()
    de_or_do = location == "Porto" ? "do" : "de"
    experience = "javascript"
    if experience.include?(" ")
      experience.gsub! ' ', '%20'
    end
    url = "https://www.indeed.pt/jobs?q=#{experience}+#{role}&l=#{location}%2C%20+Distrito%20#{de_or_do}%20#{location}"
    unparsed_page = HTTParty.get(url)
    parsed_page = Nokogiri::HTML(unparsed_page)
    jobs = []
    parsed_page.css('div.jobsearch-SerpJobCard').each_with_index do |card, index|
      job = {
        title: card.css('div.title', 'a.title').text.gsub("\n",''),
        location: location,
        url: url + "&vjk=" + card.attribute('data-jk'),
        company: card.css('div.sjcl', 'div.span.company').text.gsub("\n",'').gsub(location, '').match(/[a-zA-Z]+/)[0],
        summary: card.css('div.summary').text.gsub("\n", '')
      }
      jobs << job
    end
    jobs
  end

  def scrape_one(url)
    job = {}


    browser = Watir::Browser.new :chrome, headless: true
    browser.goto url
    doc = Nokogiri::HTML(browser.html)
    date = doc.css('div.jobsearch-JobMetadataFooter').text.scan(/\d+/)
    date_string = date.empty? ? "" : date[0] + " days ago"
    final_date_string =  ""
    if date_string.match(/^1\s/)
      final_date_string = date_string.tr('s', '')
    elsif date_string.include?("30")
      final_date_string = date_string.insert(2, '+')
    else
      final_date_string = date_string
    end
    job[:posted_date] = final_date_string
    job[:description] = doc.css('div#jobDescriptionText').text.gsub("\n", '')
    job
  end
end
