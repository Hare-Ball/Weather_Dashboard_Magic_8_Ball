//API call
//const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=&appid=41e8ab555c3a9084cb1bed1c4f7a9a42";
var formEl = $('#searchBtn');

var searchFormEl = $('#search-input');

function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Search Data:", searchFormEl.val());
    getCurrentWeather(searchFormEl.val())
}
function getCurrentWeather(searchValue){
    const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=41e8ab555c3a9084cb1bed1c4f7a9a42&units=imperial";
    //check documentation for API
    $.ajax({
        url:queryURL,
        method:"GET", 
        success:function(data){
            console.log(data)
            var nameOfCity= $("<h1></h1>")
            nameOfCity.text(data.name)
            var forecastDiv = $("#forecastArea")
            forecastDiv.append(nameOfCity)
            var tempOfCity= $("<p></p>")
            tempOfCity.text(data.main.temp)
            forecastDiv.append(tempOfCity)
            var wind= $("<p></p>")
            wind.text(data.wind.speed)
            forecastDiv.append(wind)
        }
    })

}
formEl.click(handleFormSubmit);

//data.dt convert from unix
//search convert unix into format mm//dd/yyyy with Moment
//Icons in API
//UV index is not in the OpenWeather look in One Call API