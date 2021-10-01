# HEED
Asteroid Cataclysm Tracker


## Pitch
Title: Heed the Asteroid Cataclysm Tracker


## API
<https://api.nasa.gov/>

Asteroids - NeoWs
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

## MVP objectives

- Incorporate the NASA Asteroids - NeoWs API

- Fully functioning in browser app utilizing html, javascript, and styled with css

- App Functionality: user gives HEED a date and HEED returns all "potentially hazardous asteroids." Info for each NEOo will include at least size, speed, and "miss distance." An additional return will include the top three non-hazardous NEOo with the same data. This should account for the eventuality of returning no PHA NEOo.

### Post MVP objectives

- animated "tone" styling for both hazardous and non-hazardous
- asteroid animation (in background?): when the search lands asteroid impacts the page
- historical links for asteroid impacts





