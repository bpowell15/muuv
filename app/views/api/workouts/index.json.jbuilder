@workouts.each do |workout|
  json.set! workout.id do
    json.extract! workout, :id, :title, :description, :elevation, :elevation_unit, :distance, :distance_unit, :duration_hours, :duration_minutes, :duration_seconds, :sport, :date, :time, :speed, :route_id, :created_at, :route
  end


end
