class ApplicationController < ActionController::Base

  def application
    @descendants = controllerNames.gsub(" ","").gsub("[","").gsub("]","").split(",")
  end

  helper_method :controllerNames

  def controllerNames
    Rails.application.eager_load!
    @controllerName ||= ApplicationController.descendants.to_s.gsub("Controller","").gsub(/([a-zA-Z])([A-Z])/,'\1'+"_"+'\2').gsub("/","_").downcase
  end

end
