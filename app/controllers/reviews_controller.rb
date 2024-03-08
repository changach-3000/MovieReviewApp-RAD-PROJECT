class ReviewsController < ApplicationController
  skip_before_action :authorize, only: [:index]

  # Create a review for a specific movie
  def create
    # Find the movie by its ID
    movie = Movie.find_by(id: params[:movie_id])

    if movie.nil?
      render json: { error: "Movie not found" }, status: :not_found
    else
      # Create a review associated with the movie
      review = movie.reviews.new(review_params)

      # Set the current user as the author of the review
      review.user = @current_user

      if review.save
        render json: { success: "Review created successfully" }, status: :created
      else
        render json: { error: review.errors.full_messages.join(", ") }, status: :unprocessable_entity
      end
    end
  end

  # Delete a review
  def destroy
    review = Review.find_by(id: params[:id])

    if review.nil?
      render json: { error: "Review not found" }, status: :not_found
    elsif review.user != @current_user
      render json: { error: "You are not authorized to delete this review" }, status: :unauthorized
    else
      if review.destroy
        render json: { success: "Review deleted successfully" }
      else
        render json: { error: review.errors.full_messages.join(", ") }, status: :unprocessable_entity
      end
    end
  end
  private

  def review_params
    params.permit(:comment)
  end
end
