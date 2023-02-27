Rails.application.routes.draw do
  get 'profile/index'
  root "homepage#index"

end
