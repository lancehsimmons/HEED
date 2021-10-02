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

const missMiles = []
const isHazardous = []
const pho = [] /*array of miss distances*/
const nonPho = [] /*array of miss distances*/
const phoSizeAll = []
const phoSpeedAll = []
const phoSize = []
const phoSpeed = []


// fetch address should go like this: 
//   fetch(`${BASE_URL}s=${title}`)
fetch('https://api.nasa.gov/neo/rest/v1/feed?2021-10-01=START_DATE&api_key=xeZDkYctu0fubDwBXSHdKpQCuL0eRQtNE1edmh7c')
    .then((res) => { return res.json() })

    .then((resJSON) => {
      // console.log(resJSON)
      // reference for object structure of neo object
      // console.log(resJSON.near_earth_objects)
      // this one works to get the boolean back from first array in NEO object
      // console.log(resJSON.near_earth_objects['2021-10-02'][0].is_potentially_hazardous_asteroid)

      let dateExtractor = resJSON.near_earth_objects

      let dates = []
      // this for loop generates an array of date objects. 
      for (var property in dateExtractor) {
        // console.log(property)
        dates.push(property)
      }
      // console.log(dates)
      let neodDay
      for (i = 0; i < dates.length; i++) {
        // console.log(dates[i])
        neoDay = dates[i]
        // this line logs the i_p_h_a boolean for the first asteroid of each date returned from the 7 day search results
        // console.log(dateExtractor[`${neoDay}`][0].is_potentially_hazardous_asteroid)
        // logging the number of asteroids per day (one more than array length). 
        // console.log(dateExtractor[`${neoDay}`].length + 1)


        // on this line asteroidExtractor is returning the date plus the index of each asteroid
        asteroidExtractor(dateExtractor[`${neoDay}`])
      }
      phoExtractor(isHazardous, missMiles, phoSizeAll, phoSpeedAll)
      warningSystem(pho, nonPho)
    })


    const phoExtractor = (is, miles, size, speed) => {
      for (let i = 0; i < is.length; i++) {
        if (is[i] === true) {
          // console.log(miles[i])
          pho.push(miles[i])
          phoSize.push(size[i])
          phoSpeed.push(speed[i])
        }
        else if (is[i] === false) {
          nonPho.push(miles[i])
        }
      }
    }




const asteroidExtractor = (day) => {
  day.forEach(asteroid => {
    // console.log(asteroid)
    // console.log(asteroid.close_approach_data[0].miss_distance.miles)
    // this line puts all of the miss miles in an array
    missMiles.push(asteroid.close_approach_data[0].miss_distance.miles)

    // this line puts all of the hazardous booleans in an array
    // console.log(asteroid.is_potentially_hazardous_asteroid)
    isHazardous.push(asteroid.is_potentially_hazardous_asteroid)

    // all sizes in an array
    phoSizeAll.push(asteroid.estimated_diameter.feet.estimated_diameter_max)
    // all speeds in an array
    phoSpeedAll.push(asteroid.close_approach_data[0].relative_velocity.miles_per_hour)

  })
  
}
const warningDiv = ".warningzone"
const nullDiv = '.nullzone'
const warningSystem = (hazardous, nonhazardous, speed, size) => {
  
  if (pho.length > 0) {
    const warning = document.createElement('h3')
    warning.id = 'warning'
    warning.innerText = "WARNING: POSSIBLE IMMINENT CATACLYSM"
    document.body.appendChild(warning)

    hazardous.forEach((asteroid) => {
      // console.log(asteroid)
      const phoDiv = document.createElement('div')
      phoDiv.className = 'pho'
      phoDiv.innerText = `A near miss at only ${Math.round(asteroid)} miles`
      document.body.appendChild(phoDiv)
    })
  }

  

  nonhazardous.forEach((asteroid) => {
    const nonphoDiv = document.createElement('div')
    nonphoDiv.className = 'nonPho'
    nonphoDiv.innerText = asteroid
    document.body.appendChild(nonphoDiv)
  })
  
}


// console.log(missMiles)
// console.log(isHazardous)
// console.log(pho)
// console.log(nonPho)
// console.log(phoSizeAll)
// console.log(phoSpeedAll)
console.log(phoSize)
console.log(phoSpeed)



