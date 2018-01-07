# == Schema Information
#
# Table name: workouts
#
#  id               :integer          not null, primary key
#  title            :string           not null
#  description      :string           not null
#  duration_hours   :integer          not null
#  distance         :float            not null
#  user_id          :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  speed            :float
#  route_id         :integer
#  duration_minutes :integer          not null
#  duration_seconds :integer          not null
#  sport            :string           not null
#

class Workout < ApplicationRecord
  validates :title, :description, :distance, :duration_hours, :duration_minutes, :duration_seconds, :speed, :sport, presence: true
  belongs_to :user
end
