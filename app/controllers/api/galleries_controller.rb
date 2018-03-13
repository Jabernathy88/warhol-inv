class Api::GalleriesController < ApplicationController
  def index
    @galleries = Gallery.all
    render json: @galleries
  end

  def create
    @gallery = Gallery.create
    render json: @gallery
  end 

# create nested 

  def show
    @gallery = Gallery.find(params[:id])
    render json: @gallery
  end

  def update
    @gallery = Gallery.find(params[:id])
    @gallery.update!(gallery_params)
    render json: @gallery
  end

  def destroy
    @gallery = Gallery.find(params[:id]).delete
    render status: :ok
  end

  private
  def gallery_params
    params.require(:gallery).permit(:name, :img_url, :user_id)
  end 
  
end
