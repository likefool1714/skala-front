function changeCity() {
    const selectElement = document.getElementById("city-select");
    const weatherBox = document.getElementById("weather-box");

    const cityName = selectElement.options[selectElement.selectedIndex].text;
    const geoData = selectElement.value; // 예: "37.5665,126.9780"

    if (geoData === "") {
        weatherBox.innerHTML = "도시를 선택하면 이곳에 실시간 좌표 정보가 나타납니다.";
        return;
    }

    const coordinates = geoData.split(",");
    const latitude = coordinates[0];
    const longitude = coordinates[1];

    // DOM API innerHTML 조작으로 결과 반영
    weatherBox.innerHTML = `
        <h4>📍 선택된 도시: ${cityName}</h4>
        <p>🗺️ 위도(Latitude): <strong>${latitude}</strong></p>
        <p>🗺️ 경도(Longitude): <strong>${longitude}</strong></p>
    `;
}