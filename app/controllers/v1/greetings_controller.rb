class V1::GreetingsController < ApplicationController
    def index
        random = Random.new
        limit = Greeting.all.length
        @greeting = Greeting.find(random.rand(1..limit)).description || "There aren't greetings"
        render json: @greeting
    end
end    
