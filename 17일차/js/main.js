




const weather = (pos) => {
    const API_KEY = "e11832014ad246e6e95b4ec62e328940";
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    const tempEl = document.querySelector(`.temp span`)
    const cityEl = document.querySelector(`.city span`)

    fetch(url).then((res) => res.json()).then((data) => {
        console.log(data);
        tempEl.innerText = data.main.temp;
        cityEl.innerText = data.name;
    });
}



navigator.geolocation.getCurrentPosition(weather);




// *변수의 범위
// 1. 전역변수
// =>전체 영역에서 사용할 수 있는 변수로 함수 안에 작성하지 않음

// 2. 지역변수
// =>함수 내부에서만 사용할 수 있는 변수로 함수 밖에서는 사용 불가


// e11832014ad246e6e95b4ec62e328940