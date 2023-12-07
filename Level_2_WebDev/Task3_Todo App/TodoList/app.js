function getAndUpdate() {
    console.log("Adding...");

    titleArr = document.getElementById('title').value;
    descpArr = document.getElementById('description').value;

    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArrOne = [];
        itemJsonArrOne.push([titleArr, descpArr])
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArrOne))
    }
    else {
        itemJsonArrOneStr = localStorage.getItem('itemsJson')
        itemJsonArrOne = JSON.parse(itemJsonArrOneStr);
        itemJsonArrOne.push([titleArr, descpArr])
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArrOne))
    }
    update();
}



//= Update function is started

function update() {
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArrOne = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArrOne))
    }
    else {
        itemJsonArrOneStr = localStorage.getItem('itemsJson')
        itemJsonArrOne = JSON.parse(itemJsonArrOneStr);
}
    


    //- Table Data

    let tableOne = document.getElementById("tableOne");
    let strOne = "";
    itemJsonArrOne.forEach((element, index) => {
        strOne += ` <tr><th scope="row">${index + 1}</th><td>${element[0]}</td><td>${element[1]}</td><td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
        </tr>`;
    });
    tableOne.innerHTML = strOne;
    
}


add = document.getElementById("addBtn");

add.addEventListener('click', getAndUpdate);
update();

function deleted(itemIndex){
    console.log("Delete", itemIndex);
    itemJsonArrOneStr = localStorage.getItem('itemsJson')
    itemJsonArrOne = JSON.parse(itemJsonArrOneStr);

    itemJsonArrOne.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArrOne));
    update();
}
function clearStr() {
    if (confirm("Are You Sure?")) {
        
        console.log('Cleared');
        localStorage.clear();
        update()
    }
}
