const API_KEY = "3af745e55c0152da567c5ffd089f9e00";

function onGeoConfirm(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`You live in ${lat} ${lon}`);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const citySpan = document.querySelector(".city");
            const weatherSpan = document.querySelector(".temp");

            citySpan.innerText = data.name;
            weatherSpan.innerText = `${data.weather[0].main} ${Math.round(data.main.temp)}℃`;
        });
}

function onGeoError() {
    alert("위치 확인 권한 미허용시 날씨 조회가 불가능합니다.")
}

navigator.geolocation.getCurrentPosition(onGeoConfirm, onGeoError);

