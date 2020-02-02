class IdeasController < ApplicationController

  def index
    @idea = Idea.new
  end

  def show
    @ideas = Idea.find_by_id(params[:id])
    return render_not_found if @comment.blank?
  end

  def create
    @ideas = Idea.create(idea_params)
    redirect_to ideas_path
  end

  private

  def idea_params
    params.require(:idea).permit(:thought, :message)
  end

end
