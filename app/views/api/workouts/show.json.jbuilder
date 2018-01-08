json.workout do
  json.extract! @workout, :id, :title, :description, :distance, :distance_unit, :duration_hours, :duration_minutes, :duration_seconds, :sport, :speed, :route_id, :date, :time, :elevation, :elevation_unit
end
