Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#home'
  namespace :scratch do
    resources :hexapawns, only: [:index]
  end
  resources :ideas, only: [:index, :create]
  resources :calculators, only: [:index]
  resources :rps, only: [:index]
  resources :pianos, only: [:index]
  resources :thermometers, only: [:index]
  resources :checkers, only: [:index]
  resources :chesses, only: [:index]
  resources :flip_coins, only: [:index]
  resources :two_ups, only: [:index]
  resources :wheels, only: [:index]
  resources :character_counters, only: [:index]
  resources :dc_metros, only: [:index]
  resources :minesweepers, only: [:index]
  resources :hexapawns, only: [:index]
  resources :clocks, only: [:index]
  resources :timers, only: [:index]
  resources :paints, only: [:index]
  resources :korean_syllable_games, only: [:index]
  resources :react_practices, only: [:index]
  resources :cyphers, only: [:index]
  resources :tic_tac_toes, only: [:index]
end
