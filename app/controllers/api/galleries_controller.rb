class Api::GalleriesController < ApplicationController
  def index
    @galleries = Gallery.all
    render json: @galleries
  end

  def create
    @user = User.find(gallery_params)
    @gallery = Gallery.create(user: @user)
    render json: @gallery
  end 

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

  def user_params
    params.require(:user).permit(:name, :img_url, :id)
  end 
  
end
