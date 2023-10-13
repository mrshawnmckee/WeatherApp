const key = 'AuNTty2lcVMdqR5tY2ZnRmEqfWlMhSTg';
// Raleigh city key: 329823


// id is the city key/ geolocation under the api
const getCurrentConditions = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query)
    const data = await response.json();

    return data[0]      //Retuning the object instead od the array, so [0]
}


// // Attempt at creating a three day
// const getThreeDay = async (id) => {
//     const base = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/'
//     const query = `${id}?apikey=${key}`;

//     const response = await fetch(base + query)
//     const data = await response.json();

//     return data[0]


// }

const getCity = async (city) => {
    
    // THis is the link to the api endpoint for city, if using geolocation would have to use that url
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'

    // Starts with a '?' because it is a query, the apiKey and q are the requirements form the api endpoint above
    // In this case the q is city, which is passed in through the function from the form input
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query)
    const data = await response.json();

    // we are returning data 0, because an array of all the cities with that name are returned
    // We want to return only the best match
    return data[0]
}

// getCity('manchester')
//   .then(data => {               //This data will be waht is returned from the city
//     return getCurrentConditions(data.Key)
//   }).then(data => { //This data will be waht is returned from the getCurrentVconditions
//         console.log(data)
//   }).catch(err => console.log(err))




