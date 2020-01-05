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
    url = "https://www.indeed.pt/?r=us"
    unparsed_page = HTTParty.get(url)
    parsed_page = Nokogiri::HTML(unparsed_page)
  end
end
