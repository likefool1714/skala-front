// /script/weatherAPI.js

// 다른 파일에서 이 함수를 import 해갈 수 있도록 export를 붙입니다.
export async function getWeatherData(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m`;
    
    // 외부 서버와 통신하여 데이터를 받아옵니다.
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error("날씨 데이터를 가져오는 데 실패했습니다.");
    }
    
    // JSON 데이터로 변환하여 그대로 리턴합니다.
    const data = await response.json();
    return data;
}