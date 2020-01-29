Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#home'
  resources :calculators, only: [:index]
  resources :rps, only: [:index]
  resources :pianos, only: [:index]
  resources :thermometers, only: [:index]
  resources :checkers, only: [:index]
  resources :flip_coins, only: [:index]
  resources :two_ups, only: [:index]
  resources :wheels, only: [:index]
  resources :character_counters, only: [:index]
  resources :dc_metros, only: [:index]
end
