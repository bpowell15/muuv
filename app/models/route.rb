class Route < ApplicationRecord
  validates :title, :polyline, :distance, :elevation, presence: true
  validates :title, uniqueness: true

  belongs_to :user
  has_many :workouts
end
