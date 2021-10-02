console.log ('we are connected')

// PSEUDO JS
// 1 get the fetch working
// 2 get the fetch in the terminal
// 3 extract the "is_potentially_hazardous_asteroid": true/false
// 4 extract miss_distance.miles
// 5 extract relative_velocity.mile_per_hour
// 6 extract "estimated_diameter_max"
// 7 parse boolean for hazardous key
// 8 sort data for true/false into separate dom threads
// 9 submit button that fetches NEO one week out, should be 7 results
// 10 button click should also:
//  - initiate function for parsing hazardous or not
//  - build hazardous and nonhazardous into distinct divs (based on class assignment which is result of boolean?)
// 11 append divs with proper styling

// A potentially hazardous object (PHO) is a near-Earth object whose orbit brings it within 4.7 million miles (7.5 million km) of Earth’s orbit, and is greater than 500 feet (140 meters) in size.


// 
// POST MVP
// -asteroid impact animation
// -historiacl impacts
// -'doom calculator' graphic representation of ?
// 

// NEOW address with date at 2021-10-01
// https://api.nasa.gov/neo/rest/v1/feed?2021-10-01=START_DATE&api_key=xeZDkYctu0fubDwBXSHdKpQCuL0eRQtNE1edmh7c

// DUMMY FETCH CODE taken straight from the OMDB homework
const DOMAIN = 'http://www.omdbapi.com/';
const API_KEY = 'afc12be0'
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;

// const button = document.querySelector('button')
// button.addEventListener('click', () => { let title = document.getElementById('blank').value })


// fetch address should go like this: 
//   fetch(`${BASE_URL}s=${title}`)
fetch('https://api.nasa.gov/neo/rest/v1/feed?2021-10-01=START_DATE&api_key=xeZDkYctu0fubDwBXSHdKpQCuL0eRQtNE1edmh7c')
    .then((res) => { return res.json() })

    .then((resJSON) => {
      // console.log(resJSON)
      // console.log(resJSON.near_earth_objects)
      // renderList(resJSON)
      // this one works to get the boolean back from first array in NEO object
      // I think I might have to loop over n_e_o to get the actual date value objects so that the boolean can be programmatically extracted from the json
      console.log(resJSON.near_earth_objects['2021-10-02'][0].is_potentially_hazardous_asteroid)

      let dateExtractor = resJSON.near_earth_objects

      let dates = []
      // this for loop generates an array of date objects. 
      // then should be able to iterate PHO booleans and split dates into PHO and benign asteroid arrays
      for (var property in dateExtractor) {
        // console.log(property)
        dates.push(property)
      }
      console.log(dates)
      let neodDay
      for (i = 0; i < dates.length; i++) {
        console.log(dates[i])
        neoDay = dates[i]
        // this line logs the i_p_h_a boolean for the first asteroid of each date returned from the 7 day search results
        console.log(dateExtractor[`${neoDay}`][0].is_potentially_hazardous_asteroid)
        // logging the number of asteroids per day. hopefully just one more step to get a boolean for every asteroid
        console.log(dateExtractor[`${neoDay}`].length + 1)
        // push all the booleans into an array
        // check each using if/else
        // use if/else func to either build divs or send object data to the appropriate build div
      }
      

    })

