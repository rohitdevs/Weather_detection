

        // Function to get and display the current location
        function getLocation() {
          console.log("hello");
            // Check if the geolocation API is available in the browser
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    // Get the latitude and longitude from the geolocation data
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;

                    // Display the latitude and longitude on the web page
                    document.getElementById("latitude").textContent = latitude;
                    document.getElementById("longitude").textContent = longitude;
                    document.cookie=`latitude1=${latitude}`;
                    document.cookie=`longitude1=${longitude}`;

                    window.location.href="nextpage.html"
                });
            } else {
                alert("Geolocation is not available in this browser.");
            }
        }

        // Attach a click event listener to the button
        document.getElementById("getLocationButton").addEventListener("click", getLocation);

