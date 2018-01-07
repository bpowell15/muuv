json.workout do
  json.extract! @workout, :id, :title, :description, :duration_hours, :duration_minutes, :duration_seconds, :sport, :speed, :route_id, :created_at
end
