document.getElementById("year").textContent = new Date().getFullYear();


document.getElementById("lastModified").textContent = document.lastModified;


document.getElementById("windchill").textContent = calculateWindChill()


function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
    } else {
        return "N/A";
    }
}

