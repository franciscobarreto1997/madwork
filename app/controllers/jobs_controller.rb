class JobsController < ApplicationController
  def index
  end

  def search
    @jobs = Job.all
  end
end
