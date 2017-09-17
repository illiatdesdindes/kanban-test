class StagesController < ApplicationController
  before_action :set_stage, only: [:show, :update, :destroy]

  def index
    @stages = Stage.includes(:applicants).all
  end

  def show
  end

  def create
    @stage = Stage.new(stage_params)

    if @stage.save
      render :show, status: :created, location: @stage
    else
      render json: @stage.errors, status: :unprocessable_entity
    end
  end

  def update
    if @stage.update(stage_params)
      render :show, status: :ok, location: @stage
    else
      render json: @stage.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @stage.destroy
    head :no_content
  end

  private
  def set_stage
    @stage = Stage.find(params[:id])
  end

  def stage_params
    params.fetch(:stage, {})
  end
end
