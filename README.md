# MUUV 
Single page web-app for tracking workout statistics and routes 

Muuv acts as a journal for recording personal workouts
- Create/Edit/Delete workouts manually 
- Create workout routes via the Google Maps Api


[CHECK IT OUT HERE](https://www.muuv.herokuapp.com)

### The Google Maps API allows users to draw and save routes they have or plan to travel during various workouts, it also provides users with information pertaining to the route such as distance and elevation change
  - A series of clicks is used in order to create the route
  - The clicks are then saved as latitude and longitude coordinate pairs which are then encoded for use by the Google Maps Api
  - A request sent to the Google Maps Api returns the route redrawn on the map, which can then be displayed as a static image
![Route Creator](https://i.imgur.com/XQhRIhw.png "Route Creation")

![Workout Entry](https://i.imgur.com/p1F9nK5.png "Workout Entry")
