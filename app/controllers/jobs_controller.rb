class JobsController < ApplicationController

  skip_before_action :verify_authenticity_token
  include HTTParty

  def index
  end

  def search
    role = params[:role]
    experience = params[:experience]
    location = params[:location]
    scraper
    render json: {
      role: params[:role],
      experience: params[:experience],
      location: params[:location]
    }
  end

  private

  def job
    @job ||= Job.find(params[:id])
  end

  def scraper
  location = "lisboa".capitalize()
  de_or_do = location == "Porto" ? "do" : "de"
  experience = "senior"
  technology = "javascript"
  if technology.include?(" ")
    technology.gsub! ' ', '%20'
  end
  url = "https://www.indeed.pt/jobs?q=#{experience}+#{technology}&l=#{location}%2C%20+Distrito%20#{de_or_do}%20#{location}"
  puts url
  unparsed_page = HTTParty.get(url)
  parsed_page = Nokogiri::HTML(unparsed_page)
  jobs = []
  parsed_page.css('div.jobsearch-SerpJobCard').each_with_index do |card, index|
    job = {
      title: card.css('div.title', 'a.title').text.gsub("\n",''),
      location: location,
      url: url + "&vjk=" + card.attribute('data-jk')
    }
    jobs << job
  end
  jobs.map do |job|
    url = job[:url]
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
    job[:company] = doc.css('div.jobsearch-CompanyInfoWithoutHeaderImage').text
    job[:description] = doc.css('div#jobDescriptionText').text.gsub("\n", '')
  end
  jobs
  end
end
