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
#  date             :datetime         not null
#  time             :datetime         not null
#

require 'test_helper'

class WorkoutTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
