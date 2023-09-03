
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


let endpoint=`https://api.openweathermap.org/data/2.5/weather?lat=${finalans[0]}&lon=${finalans[1]}&appid=${8b8640a4a25908b202d4fee78a2681d9}`;
async function getWeather() {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
     console.log(data);
  }
  catch (error) {
    console.error('Error fetching menu:', error);
    throw error;
  }
}

getWeather();