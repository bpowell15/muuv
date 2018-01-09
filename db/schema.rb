# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180109014726) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "routes", force: :cascade do |t|
    t.string "title", null: false
    t.text "polyline", null: false
    t.float "distance", null: false
    t.integer "elevation", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_routes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "fname"
    t.string "lname"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.integer "age"
    t.float "height"
    t.integer "weight"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "workouts", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.integer "duration_hours", default: 1, null: false
    t.float "distance"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "speed"
    t.integer "route_id"
    t.integer "duration_minutes", default: 0, null: false
    t.integer "duration_seconds", default: 0, null: false
    t.string "sport", default: "Ride", null: false
    t.datetime "date", null: false
    t.datetime "time", null: false
    t.float "elevation"
    t.string "distance_unit", default: "miles", null: false
    t.string "elevation_unit", default: "feet", null: false
    t.index ["route_id"], name: "index_workouts_on_route_id"
    t.index ["user_id"], name: "index_workouts_on_user_id"
  end

end
