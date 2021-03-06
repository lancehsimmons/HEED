# HEED
Asteroid Cataclysm Tracker

<https://lancehsimmons.github.io/HEED>

## Pitch
Title: Heed the Asteroid Cataclysm Tracker


## API
<https://api.nasa.gov/>

Asteroids -
NeoWs (Near Earth Object Web Service) is a RESTful web service for near earth Asteroid information. With NeoWs a user can: search for Asteroids based on their closest approach date to Earth, lookup a specific Asteroid with its NASA JPL small body id, as well as browse the overall data-set.

Data-set: All the data is from the NASA JPL Asteroid team (http://neo.jpl.nasa.gov/).

#### API snippet

                },
                "is_potentially_hazardous_asteroid": true,
                "close_approach_data": [
                    {
                        "close_approach_date": "2021-10-03",
                        "close_approach_date_full": "2021-Oct-03 02:32",
                        "epoch_date_close_approach": 1633228320000,
                        "relative_velocity": {
                            "kilometers_per_second": "17.3786914768",
                            "kilometers_per_hour": "62563.2893164001",
                            "miles_per_hour": "38874.3949644043"
                        },
                        "miss_distance": {
                            "astronomical": "0.3354112543",
                            "lunar": "130.4749779227",
                            "kilometers": "50176809.217308341",
                            "miles": "31178423.4849274658"
                        },
                        "orbiting_body": "Earth"
                    }

### Wireframes
<https://www.figma.com/file/wEVC5otS0wOmJ641jBaY6P/HEED?node-id=0%3A1>

<https://www.figma.com/file/e0OrEynagNFvYGFdXOxrD8/HEEDdt?node-id=0%3A1>

## MVP objectives

- Incorporate the NASA Asteroids - NeoWs API

- Fully functioning in browser app utilizing html, javascript, and styled with css

- App Functionality: user gives HEED a date and HEED returns all "potentially hazardous asteroids" for one week from search date. Info for each hazardous NEOo will include at least size, speed, and "miss distance." Display will include total number of non-hazardous asteroids detected for the week search. In the event of search returningn no hazardous asteroids display will include a "coast is clear" notice.

### Post MVP objectives

- animated "tone" styling for both hazardous and non-hazardous
- asteroid animation (in background?): when the search lands asteroid impacts the page
- historical links for asteroid impacts


### Notable Snippets
getting the relevant data for each asteroid was tough. The first keyname for every date returned from the API search was an 'illegal' javascript name so I had to learn to use bracket notation to make an exception for that keyname format.

      let neodDay
      for (i = 0; i < dates.length; i++) {
        console.log(dates[i])
        neoDay = dates[i]
        // this line logs the i_p_h_a boolean for the first asteroid of each date returned from the 7 day search results
        console.log(dateExtractor[`${neoDay}`][0].

After that once I reached the level of extracting data for each asteroid I realized I could call the constant for the object I wanted to get ASTEROID. Felt like I was wrangling comets in my code!

      const asteroidExtractor = (day) => {
        day.forEach(asteroid => {
          console.log(asteroid)
          console.log(asteroid.close_approach_data[0].miss_distance.miles)

I didn't add the form event listener until I had already built all of the parsing for my api data. Once I tried refreshing a search I realized the new search was stacking on the previous one. My solution was to reset all of the arrays I used to parse the data.

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


### Timeframes
| Component     | Estimated Time | Actual Time  |
| :-------------: |:-------------:| :-----:|
| psuedocode JS     | 1hr | 1hr |
| HTML Structure    | 2hr |   3hr |
| Javascript API basics | 1hr |    2hr |
| Javascript API data sorting | 8 hr | 13 hr |
| Rendering data on HTML | 4hr | 8hr |
| CSS styling | 5hr | 8hr |
| Media Query Styling | 2hr | 3hr |
| Total | 26hr | 38hr |





