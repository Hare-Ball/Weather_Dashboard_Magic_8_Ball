//API call
//const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=&appid=41e8ab555c3a9084cb1bed1c4f7a9a42";
var formEl = $('#searchBtn');

var searchFormEl = $('#search-input');

function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Search Data:", searchFormEl.val());
    getCurrentWeather(searchFormEl.val());
    getWeatherForecast(searchFormEl.val());
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
            tempOfCity.text("Temp: "+data.main.temp)
            forecastDiv.append(tempOfCity)

            var wind= $("<p></p>")
            wind.text("Wind Speed: "+data.wind.speed)
            forecastDiv.append(wind)

            var humidity= $("<p></p>")
            humidity.text("Humidity: "+data.main.humidity)
            forecastDiv.append(humidity)
        }
    })
}

function getLatitudeAndLongitude (searchValue){
    const queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=41e8ab555c3a9084cb1bed1c4f7a9a42&units=imperial";
    $.ajax({
        url:queryURL,
        method:"GET", 
        success:function(data){
            console.log(data)
        }
    })
}

    function getUVIndex(searchValue){
    
    const oneCallURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+ latitude + "&lon="+ latitude + "&appid=41e8ab555c3a9084cb1bed1c4f7a9a42";
    }
function getWeatherForecast(searchValue){
    const queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=41e8ab555c3a9084cb1bed1c4f7a9a42&units=imperial";
    $.ajax({
        url:queryURL,
        method:"GET", 
        success:function(data){
            console.log(data)
            var firstDay= $("<h2></h2>")
            firstDay.text("Day 1")
            var dayOne = $("#day1")
            dayOne.append(firstDay)

                    var dayOneTemp= $("<p></p>")
                    dayOneTemp.text("Temp: "+data.list[1].main.temp)
                    dayOne.append(dayOneTemp)

                    var dayOneWind= $("<p></p>")
                    dayOneWind.text("Wind: "+data.list[1].wind.speed)
                    dayOne.append(dayOneWind)
                
                    var dayOneHumidity= $("<p></p>")
                    dayOneHumidity.text("Humidity: "+data.list[1].main.humidity)
                    dayOne.append(dayOneHumidity)

    
            var secondDay= $("<h2></h2>")
            secondDay.text("Day 2")
            var dayTwo = $("#day2")
            dayTwo.append(secondDay)

                    var dayTwoTemp= $("<p></p>")
                    dayTwoTemp.text("Temp: "+data.list[2].main.temp)
                    dayTwo.append(dayTwoTemp)

                    var dayTwoWind= $("<p></p>")
                    dayTwoWind.text("Wind: "+data.list[2].wind.speed)
                    dayTwo.append(dayTwoWind)
                
                    var dayTwoHumidity= $("<p></p>")
                    dayTwoHumidity.text("Humidity: "+data.list[2].main.humidity)
                    dayTwo.append(dayTwoHumidity)

            var thirdDay= $("<h2></h2>")
            thirdDay.text("Day 3")
            var dayThree = $("#day3")
            dayThree.append(thirdDay)

                    var dayThreeTemp= $("<p></p>")
                    dayThreeTemp.text("Temp: "+data.list[3].main.temp)
                    dayThree.append(dayThreeTemp)

                    var dayThreeWind= $("<p></p>")
                    dayThreeWind.text("Wind: "+data.list[3].wind.speed)
                    dayThree.append(dayThreeWind)
                
                    var dayThreeHumidity= $("<p></p>")
                    dayThreeHumidity.text("Humidity: "+data.list[3].main.humidity)
                    dayThree.append(dayThreeHumidity)

            var fourthDay= $("<h2></h2>")
            fourthDay.text("Day 4")
            var dayFour = $("#day4")
            dayFour.append(fourthDay)

                    var dayFourTemp= $("<p></p>")
                    dayFourTemp.text("Temp: "+data.list[4].main.temp)
                    dayFour.append(dayFourTemp)

                    var dayFourWind= $("<p></p>")
                    dayFourWind.text("Wind: "+data.list[4].wind.speed)
                    dayFour.append(dayFourWind)
                
                    var dayFourHumidity= $("<p></p>")
                    dayFourHumidity.text("Humidity: "+data.list[4].main.humidity)
                    dayFour.append(dayFourHumidity)

            var fifthDay= $("<h2></h2>")
            fifthDay.text("Day 5")
            var dayFive = $("#day5")
            dayFive.append(fifthDay)

                    var dayFiveTemp= $("<p></p>")
                    dayFiveTemp.text("Temp: "+data.list[5].main.temp)
                    dayFive.append(dayFiveTemp)

                    var dayFiveWind= $("<p></p>")
                    dayFiveWind.text("Wind: "+data.list[5].wind.speed)
                    dayFive.append(dayFiveWind)
                
                    var dayFiveHumidity= $("<p></p>")
                    dayFiveHumidity.text("Humidity: "+data.list[5].main.humidity)
                    dayFive.append(dayFiveHumidity)
        }
    })
}

formEl.click(handleFormSubmit);

//data.dt convert from unix
//search convert unix into format mm//dd/yyyy with Moment
//Icons in API
//UV index is not in the OpenWeather look in One Call API;\