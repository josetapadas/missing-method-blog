class Post < ApplicationRecord
  extend FriendlyId
  
  friendly_id :title, use: [:slugged, :history, :finders]

  belongs_to :author
  has_many :elements

  has_one_attached :header_image

  scope :published, -> do
    where(published: true)
  end
  
  scope :most_recently_published, -> do
    order(published_at: :desc)
  end

  def should_generate_new_friendly_id?
    title_changed?
  end
end
