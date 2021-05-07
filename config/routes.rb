Rails.application.routes.draw do
  devise_for :authors
  
  root to: "readers/home#blog"
  
  get '/', to: 'readers/home#blog', as: :blog
  get '/:id', to: 'readers/posts#show', as: :blog_post
  
  scope module: 'authors' do
    resources :posts do
      resources :elements
    end
  end
end
