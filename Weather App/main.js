// DOM variables
let searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const countryDOM = document.querySelector('#country');
const cityDOM = document.querySelector('span[data-city]');
const latDOM = document.querySelector('span[data-lat]');
const lonDOM = document.querySelector('span[data-lon]');
const dataObjectDOM = document.querySelector('span[data-object]');

// settings for call request
let apiCity = '';
// const countryCode = 'IN'; //use ISO 3166 country codes
const apiLimit = '1';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=';
const apiKey = '9204d07672494a6ed95f41e6eeaa0881';

// geocoding converter from Name to latitude/longitude
const geoCoderUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=';

// search button and input
function search() {
  // search input and btn
  searchBtn.addEventListener('click', (e) => {
    const inputValue = searchInput.value.toLowerCase().trim();
    apiCity = searchInput.value.toLowerCase().trim();

    // console.log(inputValue);
    // console.log(apiCity);
    searchInput.value = '';
  });

  // api call
  searchBtn.addEventListener('click', (e) => {
    // call to get latitude and longitude based on the name of the city
    if (apiCity !== '') {
      async function geoNameToLat() {
        let lat, lon; // declare the lat and lon variables in the outer scope
        let data;
        let name;
        let country;
        try {
          const response = await axios.get(
            `${geoCoderUrl}${apiCity}&limit=${apiLimit}&appid=${apiKey}`
          );
          data = response.data[0];
          lat = data.lat; // set the lat and lon values retrieved from the API call to the outer-scope variables
          lon = data.lon;
          name = data.name;
          country = data.country;
          // console.log(
          //   `latitude: ${lat}, longitude: ${lon},data: ${data},name: ${name},country: ${country}`
          // );
        } catch (error) {
          console.log('Error fetching geographical data:', error);
        }

        // create elements and append them to the DOM with the API data
        function createDomElements(excludeNode) {
          if (
            countryDOM.hasChildNodes() &&
            cityDOM.hasChildNodes() &&
            latDOM.hasChildNodes() &&
            lonDOM.hasChildNodes()
          ) {
            while (countryDOM.lastChild) {
              const lastChild = countryDOM.lastChild;
              if (lastChild !== excludeNode) {
                countryDOM.removeChild(lastChild);
                cityDOM.removeChild(cityDOM.lastChild);
                latDOM.removeChild(latDOM.lastChild);
                lonDOM.removeChild(lonDOM.lastChild);
              } else {
                break;
              }
            }
          } else {
            // take data from variables and place it in the DOM
            const newCountry = document.createElement('span');
            newCountry.setAttribute('data-country', '');
            newCountry.textContent = `${country}`;

            const newName = document.createElement('span');
            newName.textContent = `${name}`;

            const newLat = document.createElement('span');
            newLat.textContent = `${lat}`;

            const newLon = document.createElement('span');
            newLon.textContent = `${lon}`;
            // append the new element into the DOM
            countryDOM.appendChild(newCountry);
            cityDOM.appendChild(newName);
            latDOM.appendChild(newLat);
            lonDOM.appendChild(newLon);
          }
        }
        let baseGeoInfo = document.querySelector('p[data-base]');
        createDomElements(baseGeoInfo);

        // pass the lat and lon values as arguments to the getWeather() function - uncomment when done with geoNameToLat()

        getWeather(lat, lon);
        // accept lat and lon as arguments to the function
        async function getWeather(lat, lon) {
          let response;
          try {
            response = await axios.get(
              `${apiURL}${lat}&lon=${lon}&appid=${apiKey}`
            );
            console.log(response);
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }
        }
      }
      geoNameToLat();
    }
  });
}
search();

// searchBtn.addEventListener('click', () => {
//   if (
//     countryDOM.hasChildNodes() &&
//     cityDOM.hasChildNodes() &&
//     latDOM.hasChildNodes() &&
//     lonDOM.hasChildNodes()
//   ) {
//     console.log('an item has child nodes');
//   } else {
//     console.log('does not have child nodes');
//   }
// });
