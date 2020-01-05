class JobsController < ApplicationController

  protect_from_forgery with: :null_session

  def index
  end

  def search
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
end
