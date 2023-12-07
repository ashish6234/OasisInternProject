function getAndUpdate() {

    console.log("Adding.. ")

    titleArr = document.getElementById("title").value;
    desArr = document.getElementById("description").value;
    

    if(localStorage.getItem('itemsJson') == null){
        itemJsonArr = [];
        itemJsonArr.push([titleArr, desArr])

        localStorage.setItem('itemsJson', Json.stringify(itemJsonArr));
    }
}

