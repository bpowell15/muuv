# == Schema Information
#
# Table name: workouts
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string           not null
#  duration    :integer          not null
#  distance    :float            not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  speed       :float
#  route_id    :integer
#

class Workout < ApplicationRecord
  validates :title, :description, :distance, :duration, :speed, presence: true
  belongs_to :user
  belongs_to :route
end
