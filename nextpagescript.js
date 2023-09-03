
let finalans=[];
let cookies=document.cookie.split(";");
for(let i=0;i<cookies.length;i++)
{
  let cookiearray=cookies[i].split("=");
  finalans.push(cookiearray[1]);
 
}

document.getElementById("latitude").textContent = finalans[0];
document.getElementById("longitude").textContent = finalans[1];
document.getElementById("mapiframe").src=`https://maps.google.com/maps?q=${finalans[0]}, ${finalans[1]}&z=15&output=embed`;


function degreesToDirection(degrees) {
  if (degrees >= 0 && degrees < 22.5) {
      return "North";
  } else if (degrees >= 22.5 && degrees < 67.5) {
      return "Northeast";
  } else if (degrees >= 67.5 && degrees < 112.5) {
      return "East";
  } else if (degrees >= 112.5 && degrees < 157.5) {
      return "Southeast";
  } else if (degrees >= 157.5 && degrees < 202.5) {
      return "South";
  } else if (degrees >= 202.5 && degrees < 247.5) {
      return "Southwest";
  } else if (degrees >= 247.5 && degrees < 292.5) {
      return "West";
  } else if (degrees >= 292.5 && degrees < 337.5) {
      return "Northwest";
  } else {
      return "North"; // Default to North if the value is out of range
  }
}

let endpoint=`https://api.openweathermap.org/data/2.5/weather?lat=${finalans[0]}&lon=${finalans[1]}&appid=8b8640a4a25908b202d4fee78a2681d9`;
async function getWeather() {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
     console.log(data);
    let location=data.name;
    document.getElementById("bottomdiv1").textContent=location;
    let windspeed=data.wind.speed+"mph";
    document.getElementById("bottomdiv2").textContent=windspeed;
    let humidity=data.main.humidity;
    document.getElementById("bottomdiv3").textContent=humidity;
    let timezone=data.timezone;
    let date=new Date(timezone);
    console.log(typeof date);
    date=date.toString();
    date=date.split(" ")[5];
    document.getElementById("bottomdiv4").textContent=date;
    let pressure=data.main.pressure;
    pressure=(pressure / 1013.25);
    pressure=pressure.toFixed(2)+"atm";
    document.getElementById("bottomdiv5").textContent=pressure;
    let winddegree=data.wind.deg;
    const windDirection = degreesToDirection(winddegree);
    document.getElementById("bottomdiv6").textContent=windDirection;
    let feelslike=data.main.feels_like;
    feelslike=(feelslike- 273.15)
    feelslike=feelslike.toFixed(2)+"°C";
    document.getElementById("bottomdiv7").textContent=feelslike;


  }
  catch (error) {
    console.error('Error fetching menu:', error);
  }
}

getWeather();