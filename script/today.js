function setTodayDate() {
    const dateElement = document.getElementById("today-date");
    if (!dateElement) return;

    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");

    // <time> 태그의 datetime 속성(기계용 표준 형식)도 함께 갱신
    dateElement.setAttribute("datetime", `${yyyy}-${mm}-${dd}`);
    // 화면에 보이는 텍스트(사람이 읽는 형식)
    dateElement.textContent = `${yyyy}년 ${mm}월 ${dd}일`;
}

document.addEventListener("DOMContentLoaded", setTodayDate);