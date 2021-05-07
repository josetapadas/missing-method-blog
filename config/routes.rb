Rails.application.routes.draw do
  devise_for :authors
  
  root to: "readers/home#index"
  get '/blog', to: 'readers/home#blog'
  
  scope module: 'authors' do
    resources :posts do
      resources :elements
    end
  end
end
