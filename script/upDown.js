function startUpDownGame() {
    var computerNum = Math.floor(Math.random() * 50) + 1;
    let count = 0;
    
    while(true){
        let userInput = prompt("1부터 50까지의 숫자를 입력해주세요: ");
        if(userInput == null || userInput === ""){
            alert("게임을 포기하셨습니다. 정답은 " + computerNum + " 입니다.");
            break;
        }
        let userNum = parseInt(userInput);
        count++
        if(userNum == computerNum){
            alert("🚨 생성된 숫자: " + computerNum + " 🚨\n\n정답입니다! " + count + "번 만에 맞추셨습니다!");
            break;
        }
        else if(userNum > computerNum){
            alert("입력하신 숫자보다 값이 낮습니다!(Down)");
        }
        else if(userNum < computerNum){
            alert("입력하신 숫자보다 값이 큽니다!(Up)");
        }

        
    }
}