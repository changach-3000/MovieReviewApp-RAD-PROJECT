class MoviesController < ApplicationController
        skip_before_action :authorize, only: [:index]
           ###get all foods
           def index
            movies = Movie.all
            render json:movies, except: [:created_at,:updated_at]
          end
        
      
      ### Get food by id
      def show
           movies= Movie.find_by(id: params[:id])
           
           if movies.nil?
             render json: { error: "Movie not found" }, status: :not_found
           else
             render json: movies
           end
      end
         
         
           ###add food 
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
         
    