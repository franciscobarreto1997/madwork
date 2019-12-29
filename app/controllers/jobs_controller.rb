class JobsController < ApplicationController
  def index
  end

  def search
    @jobs = Job.all
  end

  private

  def job
    @job ||= Job.find(params[:id])
  end
end
