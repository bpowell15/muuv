# == Schema Information
#
# Table name: workouts
#
#  id               :integer          not null, primary key
#  title            :string           not null
#  description      :string
#  duration_hours   :integer          default(1), not null
#  distance         :float
#  user_id          :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  speed            :float
#  route_id         :integer
#  duration_minutes :integer          default(0), not null
#  duration_seconds :integer          default(0), not null
#  sport            :string           default("Ride"), not null
#  date             :datetime         not null
#  time             :datetime         not null
#  elevation        :float
#  distance_unit    :string           default("miles"), not null
#  elevation_unit   :string           default("feet"), not null
#

class Workout < ApplicationRecord
  validates :title, :description, :distance, :duration_minutes, :duration_seconds, :duration_minutes, :speed, :sport, :date, :time, presence: true
  belongs_to :user
end
