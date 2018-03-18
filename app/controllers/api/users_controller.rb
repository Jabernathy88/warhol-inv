class Api::UsersController < ApplicationController
  def index
    @sorted_users = 
      User.all.sort_by do |user|  
        user.updated_at
      end 
    @users = @sorted_users.reverse
    render json: @users
  end

  def create
    @user = User.create(name: "New user's name")
    render json: @user
  end 

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    @user.update!(user_params)
    render json: @user
  end

  def destroy
    @user = User.find(params[:id]).destroy
    render status: :ok
  end

  private
  def user_params
    params.require(:user).permit(:name, :img_url, :id)
  end 
  
end