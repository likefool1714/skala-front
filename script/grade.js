function avgGrade(){
    let subjects = ["HTML", "CSS", "JavaScript"];
    let sum = 0;
    let avg = 0;
    
    for(let i = 0; i < subjects.length; i ++) {
        let userInput = prompt(subjects[i] + "점수를 입력하세요: ");
        if(userInput == null || userInput === ""){
            alert("입력을 안하셨네요 0점 처리할게요...");
            break;
        }
        let userNum = parseInt(userInput);
        sum += userNum;
    }
    avg = sum / subjects.length;
    let to_avg = avg.toFixed(2);
    if(to_avg >= 60){
        alert("총점 " + sum + "\n평균 점수는 " + to_avg + " 로 합격입니다.");
    }
    else{
        alert("총점 " + sum + "\n평균 점수는 " + to_avg + " 로 불합격입니다.");
    }
}