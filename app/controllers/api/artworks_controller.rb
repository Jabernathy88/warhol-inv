class Api::ArtworksController < ApplicationController
  def index
    @artworks = Artwork.all
    render json: @artworks
  end

  def create
    @artwork = Artwork.create()
    render json: @artwork
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
    @artwork = Artwork.find(params[:id]).delete
    render status: :ok
  end

  private
  def artwork_params
    params.require(:artwork).permit(:name, :artist, :img_url)
  end 
  
end
