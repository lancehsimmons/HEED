console.log('we are connected')

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

const isHazardous = [] /* boolean array*/

const missMiles = [] /* all search miss miles*/
const phoSizeAll = [] /* all search sizes*/
const phoSpeedAll = [] /* all search speeds*/

const pho = [] /*array of miss distances*/
const phoSpeed = []
const phoSize = []

const phoData = []

const nonPho = [] /*array of miss distances*/

// const dates = []

const dish = document.getElementById('dish')


  // this code straight from the country search lecture with my values
  const fetchData = (date) => {
  const nasaAPIUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&api_key=xeZDkYctu0fubDwBXSHdKpQCuL0eRQtNE1edmh7c`;

    console.log('Making our request');
    
    fetch(nasaAPIUrl)
    .then((res) => { return res.json() })
    .then((resJSON) => {
      console.log(resJSON)

      dishAnimate(0)

      while (isHazardous.length > 0) {
        missMiles.pop()
        phoSizeAll.pop()
        phoSpeedAll.pop()
        isHazardous.pop()
      }

      while (phoData.length > 0) {
        for (var member in phoData) delete phoData[member];
        phoData.pop()
      }

      while (nonPho.length > 0) {
        nonPho.pop()
      }

      let dateExtractor = resJSON.near_earth_objects

      let dates = []
      // this for loop generates an array of date objects. 
      for (var property in dateExtractor) {
        // console.log(property)
        dates.push(property)
      }
      // console.log(dates)
      let neoDay 
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
      warningSystem(phoData)

    })
    .catch((err) => {
      // check if they spelled the country wrong?
      console.error(`ERROR: ${err}`)
    });
}

// builds arrays of hazardous and non hazardous asteroid datas
const phoExtractor = (is, allMiles, allSize, allSpeed) => {
  for (let i = 0; i < is.length; i++) {
    if (is[i] === true) {


      
      phoData.push({miss: allMiles[i], size: allSize[i], speed: allSpeed[i]})

    }
    else if (is[i] === false) {
      nonPho.push(allMiles[i])
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

const warningSystem = (object) => {

  const results = document.getElementById('result-section')
  results.innerHTML = ''

  const phoDisplay = document.createElement('div')
  phoDisplay.className = 'warningzone'
  document.getElementById('result-section').appendChild(phoDisplay)

  const nonphoDisplay = document.createElement('div')
  nonphoDisplay.className = 'safezone'
  document.getElementById('result-section').appendChild(nonphoDisplay)


    if (phoData.length > 0) {

      // console.log(object)

      document.getElementById('warning').innerText = "WARNING: POSSIBLE IMMINENT CATACLYSM"
      
      object.forEach((asteroid) => {
        
        const phoDiv = document.createElement('div')
        phoDiv.className = 'pho'
        document.querySelector('.warningzone').appendChild(phoDiv)
        
        const alert = document.createElement('h3')
        alert.className = 'pho-alert'
        alert.innerText = "HAZARDOUS \nASTEROID \nDETECTED"
        phoDiv.appendChild(alert)

        const phoMISS = document.createElement('p')
        phoMISS.className = 'pho-body'
        phoMISS.innerText = `A near miss at only \n${Math.round(asteroid.miss)} miles`
        phoDiv.appendChild(phoMISS)

        const phoSPEED = document.createElement('p')
        phoSPEED.className = 'pho-body'
        phoSPEED.innerText = `speed: ${Math.round(asteroid.speed)} mph`
        phoDiv.appendChild(phoSPEED)

        const phoSIZE = document.createElement('p')
        phoSIZE.className = 'pho-size'
        phoSIZE.innerText = `size: ${Math.round(asteroid.size)} feet`
        phoDiv.appendChild(phoSIZE)
      })
    } else {
      document.getElementById('warning').innerText = "NO POTENTIALLY HAZARDOUS ASTEROIDS DETECTED \nThe coast is clear! \nPlease enjoy your time on Earth. \n\n(double-check your date search format)"
    }

    const nonPhoDiv = document.createElement('div')
    nonPhoDiv.className = 'nonPho'
    document.querySelector('.safezone').appendChild(nonPhoDiv)
  
  const nonPhoCountDiv = document.createElement('h4')
  nonPhoCountDiv.className = 'safe-count'
    const nonPhoCount = nonPho.length
    nonPhoCountDiv.innerText = `${nonPhoCount} other non-hazardous asteroids were detected`
    nonPhoDiv.appendChild(nonPhoCountDiv)
    }

  // this code straight from the country search lecture with my values
  const submitButton = document.querySelector('#get-date');

  submitButton.addEventListener('click', (ev) => {
    ev.preventDefault();
  
    const inputData = document.querySelector('#date-search').value;
    fetchData(inputData);

    dishAnimate(1)

    document.querySelector('#date-search').value = '';

  });

const dishAnimate = (on_off) => {
  if (on_off === 0) {
    dish.style.setProperty('animation-duration', '0s')
  }
  else if (on_off === 1) {
    dish.style.setProperty('animation-play-state', 'running')

  }
  }