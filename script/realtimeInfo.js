// /script/realtimeInfo.js

// 1. weatherAPI.js 파일로부터 날씨 조회 함수를 수입(import)해옵니다.
import { getWeatherData } from './weatherAPI.js';

// 2. 도시가 변경되었을 때 실행될 함수를 정의합니다.
async function changeCity() {
    const selectElement = document.getElementById("city-select");
    const weatherBox = document.getElementById("weather-box");

    const cityName = selectElement.options[selectElement.selectedIndex].text;
    const geoData = selectElement.value;

    if (geoData === "") {
        weatherBox.innerHTML = "도시를 선택하면 이곳에 실시간 좌표 정보가 나타납니다.";
        return;
    }

    const coordinates = geoData.split(",");
    const latitude = coordinates[0];
    const longitude = coordinates[1];

    // [로딩 화면 표시]
    weatherBox.innerHTML = `
        <h4>📍 선택된 도시: ${cityName}</h4>
        <p>🗺️ 위도: ${latitude} / 경도: ${longitude}</p>
        <hr>
        <p style="color: #4a6fa5; font-weight: bold;">로딩 중... ⏳ 실시간 날씨를 불러오고 있습니다.</p>
    `;

    try {
        // 3. 수입해온 getWeatherData 함수에 위도, 경도를 던져서 데이터를 받아옵니다.
        // 화면 담당인 이 파일은 API 주소가 뭔지, 통신을 어떻게 하는지 상세히 몰라도 함수만 호출하면 끝납니다!
        const data = await getWeatherData(latitude, longitude);

        const temperature = data.current.temperature_2m;
        const humidity = data.current.relative_humidity_2m;

        // [최종 결과 화면 그리기]
        weatherBox.innerHTML = `
            <h4>📍 선택된 도시: ${cityName}</h4>
            <p>🗺️ 위도: ${latitude} / 경도: ${longitude}</p>
            <hr>
            <h3 style="color: #2f4d7a; margin: 10px 0;">🌡️ 실시간 온도: ${temperature}°C</h3>
            <h3 style="color: #2f4d7a; margin: 10px 0;">💧 실시간 습도: ${humidity}%</h3>
        `;

    } catch (error) {
        console.error(error);
        weatherBox.innerHTML = `
            <h4>📍 선택된 도시: ${cityName}</h4>
            <p style="color: red; font-weight: bold;">❌ 날씨 정보를 가져오는 데 실패했습니다.</p>
        `;
    }
}

window.changeCity = changeCity;