import axios from "axios"
// eslint-disable-next-line
export default {
    // ZOMATO API CALL
    getRestaurants(lat, lon){
            return axios.get(`https://developers.zomato.com/api/v2.1/search?query=Chelsea&lat=${lat}&lon=${lon}&count=10`,{
                headers: {"user-key": process.env.REACT_APP_ZOMATO_API_KEY}
              });

            },
                // SeatGeek API Call  
    getEvents(){
      return axios.get(`https://api.seatgeek.com/2/events?&client_id=${process.env.REACT_APP_SEATGEEK_API_KEY}`)
    }
      }

