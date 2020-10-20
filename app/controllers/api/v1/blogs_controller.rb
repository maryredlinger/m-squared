module Api
    module V1
        class BlogsController < ApplicationController
            def index
                all_blogs = Blog.all
                render json: all_blogs
            end
        
            def create
                blog = Blog.create(blog_params)
                render json: blog 
            end
        
            def show
                blog = Blog.find(params[:id])
                render json: blog
              end
            
              def update
                blog = Blog.find(params[:id])
                blog.update(post_params)
                render json: blog
              end
            
              def destroy
                Blog.destroy(params[:id])
                head :ok
              end
            
              private
            
        
            def blog_params
                params.permit(:location, :camp_spot, :date, :notes, :reminders)
            end
        end
    end
end        