// const temp = document.querySelector('temp')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const wet = document.querySelector('.weather-condition')
const cityForm = document.querySelector('form')
const submitBtn = document.getElementById('submit')

const updateUI = (data) => {
    const cityDetails = data.cityDetails;
    const cityWeather = data.cityWeather;

    let icon

    if(cityWeather.WeatherIcon ===1) {
        icon = './images/01-s.png';
    } 
    else if(cityWeather.WeatherIcon >= 2 && cityWeather.WeatherIcon <= 5 ) {
        icon = './images/02-s.png';
    }
    else if(cityWeather.WeatherIcon === 6) {
        icon = './images/06-s.png';
    }
    else if(cityWeather.WeatherIcon === 7 || cityWeather.WeatherIcon === 8 ) {
        icon = './images/07-s.png';
    }
    else if(cityWeather.WeatherIcon === 11) {
        icon = './images/011-s.png';
    }
    else if(cityWeather.WeatherIcon >= 12  && cityWeather.WeatherIcon <= 18 ) {
        icon = './images/12-s.png';
    }
    else if(cityWeather.WeatherIcon >= 19 && cityWeather.WeatherIcon <= 29 ) {
        icon = './images/22-s.png';
    }
    else if(cityWeather.WeatherIcon === 30) {
        icon = './images/30-s.png';
    }
    else if(cityWeather.WeatherIcon === 31) {
        icon = './images/31-s.png';
    }
    else if(cityWeather.WeatherIcon === 32 ) {
        icon = './images/32-s.png';
    }
    else if(cityWeather.WeatherIcon >= 33 && cityWeather.WeatherIcon <= 36 ) {
        icon = './images/34-s.png';
    }
    else if(cityWeather.WeatherIcon === 37 || cityWeather.WeatherIcon === 38 ) {
        icon = './images/38-s.png';
    }
    else if(cityWeather.WeatherIcon >= 39 && cityWeather.WeatherIcon <= 42 ) {
        icon = './images/39-s.png';
    } 
    else if(cityWeather.WeatherIcon === 43 || cityWeather.WeatherIcon === 44 ) {
        icon = './images/43-s.png';
    } else {
        icon = ''
    }



    details.innerHTML = `

            <h5 class="cityName">${cityDetails.EnglishName}</h5>
            <div class='icon'><img src="${icon}" alt=""><div>
            <div class="weather-condition">${cityWeather.WeatherText}</div>
            <div class="temp">
                <span>${cityWeather.Temperature.Imperial.Value}</span>
                <span>&deg;F</span>
            </div>

    `
}

const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const cityWeather = await getCurrentConditions(cityDetails.Key)


    return { cityDetails, cityWeather }
}


submitBtn.addEventListener('click', e => {
    e.preventDefault();

    // the .city after cityForm is the name of the input, trim ensures no white space
    const city = cityForm.city.value.trim()
    cityForm.reset()        //resets the form to blank
    // console.log(city)
    updateCity(city)
      .then(data => updateUI(data))
      .catch(err => console.log(err))

})