function showMyBag() {
    const myBag = [];
    while (true) {
        let itemName = prompt("가방에 넣을 물품 이름을 입력하세요\n(입력을 끝내려면 '그만'을 입력하거나 취소를 누르세요):");
        
        if (itemName === null || itemName === "" || itemName === "그만") {
            break;
        }
        let itemCountInput = prompt(itemName + "은(는) 몇 개 있나요?");
        if (itemCountInput === null || itemCountInput === "") {
            itemCountInput = "1";
        }
        
        let itemCount = parseInt(itemCountInput);
        if (isNaN(itemCount)) {
            itemCount = 1; 
        }
        let newItem = {
            name: itemName,
            count: itemCount
        };
        myBag.push(newItem);
    }

    if (myBag.length === 0) {
        alert("🎒 가방이 비어 있습니다. 등록된 물품이 없습니다!");
        return;
    }

    let result = "🎒 내 가방 속 소지품 목록 🎒\n\n";
    for (let i = 0; i < myBag.length; i++) {
        result += "- " + myBag[i].name + " : " + myBag[i].count + "개\n";
    }
    alert(result);
}