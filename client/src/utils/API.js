import axios from "axios"
// eslint-disable-next-line
export default {
    // ZOMATO API CALL
    getRestaurants(lat, lon){
            return axios.get(`https://developers.zomato.com/api/v2.1/search?query=Chelsea&lat=${lat}&lon=${lon}&count=20`,{
                headers: {"user-key": process.env.REACT_APP_ZOMATO_API_KEY}
              });

            },
   // SeatGeek API Call  
    getEvents(){
      return axios.get(`https://api.seatgeek.com/2/events?per_page=20&geoip=true&range=15mi&client_id=${process.env.REACT_APP_SEATGEEK_API_KEY}`)
    },

    getFoods: function() {
      return axios.get("/api/foods");
    },
    getFood: function(id) {
      return axios.get("/api/foods/" + id)
    },
    saveFoods: function(foodData) {
      return axios.post("/api/foods", foodData)
    },
    editFoods: function(id, foodData) {
      return axios.put("/api/foods/" + id, foodData)
    },
    deleteFoods(id) {
      return axios.delete("/api/foods/" + id)
    },

    getEventsDB: function() {
      return axios.get("/api/events");
    },
    getEvent: function(id) {
      return axios.get("/api/events/" + id)
    },
    editEvents: function(id, eventsData) {
      return axios.put("/api/events/" + id, eventsData)
    },
    saveEvents: function(eventsData) {
      return axios.post("/api/events", eventsData)
    },
    deleteEvents(id) {
      return axios.delete("/api/events/" + id)
      }
    }
