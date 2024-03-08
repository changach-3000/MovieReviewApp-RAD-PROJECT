class MoviesController < ApplicationController
        skip_before_action :authorize, only: [:index]
           ###get all foods
           def index
            movies = Movie.all
            render json:movies, except: [:created_at,:updated_at]
          end
        
      
     # Get movie by id
  def show
    movie = Movie.includes(:reviews).find_by(id: params[:id])

    if movie.nil?
      render json: { error: "Movie not found" }, status: :not_found
    else
      render json: movie, include: { reviews: { except: [:created_at, :updated_at] } }, status: :ok
    end
  end
    
          
           ###add movie
           def create
            if !@current_user || !@current_user.is_admin?
              render json: { error: "You are not authorized to create a new movie" }, status: :unauthorized
            else
              movie = Movie.new(movie_params)
          
              if movie.save
                render json: { success: "Movie created successfully" }
              else
                render json: { error: movie.errors.full_messages.join(", ") }, status: :unprocessable_entity
              end
            end
          end
          
           ###delete movies
           def destroy
            movie = Movie.find_by(id: params[:id])
          
            if movie.nil?
              render json: { error: "Movie not found" }, status: :not_found
            elsif !@current_user
              render json: { error: "You are not authorized to delete this food" }, status: :unauthorized
            else
              # movie.reviews.destroy_all
              movie.destroy
              render json: { success: "Movie deleted successfully" }
            end
          end
          
           private
         
           def movie_params
            params.permit( :backgroundImg, :cardImg, :description,  :subTitle, :title, :titleImg, :type )
          end
        end
         
    