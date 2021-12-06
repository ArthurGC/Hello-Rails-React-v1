class V1::GreetingsController < ApplicationController
    def index
        random = Random.new
        @greeting = Greeting.find(random.rand(1..5)).description || "There aren't greetings"
        render json: @greeting
    end
end    
