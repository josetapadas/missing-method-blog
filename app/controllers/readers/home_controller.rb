module Readers
  class HomeController < ReadersController
    def index
    end

    def blog
      @posts = Post.published.most_recently_published
    end
  end
end