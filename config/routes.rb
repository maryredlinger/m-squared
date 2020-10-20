Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :blogs
    end
  end
  
  #rails routes in terminal for list

  get '*path', to: 'pages#index', via: :all

  get '/blogs/:id' => 'blogs#show'

  get '/new_blog' => 'blogs#create'

end
