jjson.workout do
  json.extract! @workout, :id, :title, :description, :duration, :speed, :route_id, :created_at
end
