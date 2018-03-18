class Api::GalleriesController < ApplicationController
  def index
    @galleries = Gallery.all
    render json: @galleries
  end

  def create
    @gallery = Gallery.create
    render json: @gallery
  end
  
  def create_under_user
    @user = User.find(params[:id])
    @gallery = Gallery.create(user: @user, name: 'New gallery name')
    render json: @user
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
    @gallery = Gallery.find(params[:id])
    @user = User.find(@gallery.user_id)
    @gallery.destroy
    render json: @user, status: :ok
  end

  private
  def gallery_params
    params.require(:gallery).permit(:name, :img_url, :user_id)
  end 
  
end
