class Api::ArtworksController < ApplicationController
  def index
    @artworks = Artwork.all
    render json: @artworks
  end

  def create
    @artwork = Artwork.create()
    render json: @artwork
  end 

  def create_under_gallery
    @gallery = Gallery.find(params[:id])
    @user = User.find(@gallery.user_id)
    @artwork = Artwork.create(gallery: @gallery, name: 'New artwork name')
    render json: @user
  end

  def show
    @artwork = Artwork.find(params[:id])
    render json: @artwork
  end

  def update
    @artwork = Artwork.find(params[:id])
    @artwork.update!(artwork_params)
    render json: @artwork
  end

  def destroy
    @artwork = Artwork.find(params[:id])
    @gallery = Gallery.find(@artwork.gallery_id)
    @user = User.find(@gallery.user_id)
    @artwork.destroy
    render json: @user, status: :ok
  end

  private
  def artwork_params
    params.require(:artwork).permit(:name, :artist, :img_url)
  end 
  
end
