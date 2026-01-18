let apikey = `b92e57938eaebc6ded1fcf3a2f5b4bc3`;




const getWeather = (city) => {
  
  cityName.innerHTML=city

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;


fetch(url)
  .then((res) => 
    res.json()
  )
  .then((data) => {
    console.log(data);

    // Clouds
    cloud_pct.innerHTML = data.clouds.all;

    // Temperature
    temp.innerHTML = data.main.temp;
    temp2.innerHTML = data.main.temp;
    feels_like.innerHTML = data.main.feels_like;
    humidity.innerHTML = data.main.humidity;
    humidity2.innerHTML = data.main.humidity;
    max_temp.innerHTML = data.main.temp_max;
    min_temp.innerHTML = data.main.temp_min;

    // Sunrise & Sunset (convert from UNIX)
    sunrise.innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    sunset.innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    // Wind
    wind_speed.innerHTML = data.wind.speed;
    wind_speed2.innerHTML = data.wind.speed;
    wind_degree.innerHTML = data.wind.deg;


  })
  .catch((err) => {
    console.log(err);
  });
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value)
});




getWeather("surat");



const getWeather2 = (city) => {
   

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;


fetch(url)
  .then((res) => 
    res.json()
  )
  .then((data) => {
    console.log(data);  

    // Clouds
    cloud_pct3.innerHTML = data.clouds.all;




    // Temperature
    temp3.innerHTML = data.main.temp;
    feels_like3.innerHTML = data.main.feels_like;
    humidity3.innerHTML = data.main.humidity;
    max_temp3.innerHTML = data.main.temp_max;
    min_temp3.innerHTML = data.main.temp_min;

    // Sunrise & Sunset (convert from UNIX)
    sunrise3.innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    sunset3.innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    // Wind
    wind_speed3.innerHTML = data.wind.speed;
    wind_degree3.innerHTML = data.wind.deg;

  })
  .catch((err) => {
    console.log(err);
  });
}


getWeather2("shanghai");


const getWeather3 = (city) => {
   

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;


fetch(url)
  .then((res) => 
    res.json()
  )
  .then((data) => {
    console.log(data);  

    // Clouds
    cloud_pct4.innerHTML = data.clouds.all;




    // Temperature
    temp4.innerHTML = data.main.temp;
    feels_like4.innerHTML = data.main.feels_like;
    humidity4.innerHTML = data.main.humidity;
    max_temp4.innerHTML = data.main.temp_max;
    min_temp4.innerHTML = data.main.temp_min;

    // Sunrise & Sunset (convert from UNIX)
    sunrise4.innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    sunset4.innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    // Wind
    wind_speed4.innerHTML = data.wind.speed;
    wind_degree4.innerHTML = data.wind.deg;

  })
  .catch((err) => {
    console.log(err);
  });
}


getWeather3("Boston");


const getWeather4 = (city) => {
   

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;


fetch(url)
  .then((res) => 
    res.json()
  )
  .then((data) => {
    console.log(data);  

    // Clouds
    cloud_pct5.innerHTML = data.clouds.all;




    // Temperature
    temp5.innerHTML = data.main.temp;
    feels_like5.innerHTML = data.main.feels_like;
    humidity5.innerHTML = data.main.humidity;
    max_temp5.innerHTML = data.main.temp_max;
    min_temp5.innerHTML = data.main.temp_min;

    // Sunrise & Sunset (convert from UNIX)
    sunrise5.innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    sunset5.innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    // Wind
    wind_speed5.innerHTML = data.wind.speed;
    wind_degree5.innerHTML = data.wind.deg;

  })
  .catch((err) => {
    console.log(err);
  });
}


getWeather4("Lucknow");



const getWeather5 = (city) => {
   

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;


fetch(url)
  .then((res) => 
    res.json()
  )
  .then((data) => {
    console.log(data);  

    // Clouds
    cloud_pct6.innerHTML = data.clouds.all;




    // Temperature
    temp6.innerHTML = data.main.temp;
    feels_like6.innerHTML = data.main.feels_like;
    humidity6.innerHTML = data.main.humidity;
    max_temp6.innerHTML = data.main.temp_max;
    min_temp6.innerHTML = data.main.temp_min;

    // Sunrise & Sunset (convert from UNIX)
    sunrise6.innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    sunset6.innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    // Wind
    wind_speed6.innerHTML = data.wind.speed;
    wind_degree6.innerHTML = data.wind.deg;

  })
  .catch((err) => {
    console.log(err);
  });
}


getWeather5("Kolkata");