class V1::GreetingsController < ApplicationController
    def index
        # random = Random.new
        # @greeting = Greeting.find(random.rand(1..5)
        render json: { :greeting => [
            :description => 'Hi, this is a greeting'
        ] }.to_json
    end
end    
