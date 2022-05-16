let menuSectionElement = document.getElementById("menuSection");
let tableSectionElement = document.getElementById("tableSection");
// let table2=[{
//   name: "French Fries",
//   price: 105,
//   type: "desserts",
//   quantity: 1,
//   id: 1
// }];
// localStorage.setItem("table5",JSON.stringify(table2));



let itemList = [{
        name: "French Fries",
        price: 105,
        type: "desserts",
        quantity: 1,
        id: 1
    },
    {
        name: "Crusty Garlic Focaccia with Melted Cheese",
        price: 200,
        type: "desserts",
        quantity: 1,
        id: 2
    },
    {
        name: "Home Country Fries with Herbs & Chilli Flakes",
        price: 300,
        type: "desserts",
        quantity: 1,
        id: 3
    },
    {
        name: "French fries with Cheese & Jalapenos",
        price: 150,
        type: "desserts",
        quantity: 1,
        id: 4
    },
    {
        name: "Onion Rings",
        price: 100,
        type: "desserts",
        quantity: 1,
        id: 5
    },
    {
        name: "Chicken Biriyani",
        price: 250,
        type: "desserts",
        quantity: 1,
        id: 6
    },
    {
        name: "Mutton Mandi",
        price: 1399,
        type: "desserts",
        quantity: 1,
        id: 7
    },
    {
        name: "Steek Chicken",
        price: 400,
        type: "desserts",
        quantity: 1,
        id: 8
    }
];

let tableList = [{
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    },
    {
        id: 4
    },
    {
        id: 5
    }
];

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

//create menu item cards
var createMenuItem = (obj) => {
    let itemDivElement = document.createElement("div");
    let data = JSON.stringify(obj);
    itemDivElement.setAttribute("id", data);
    itemDivElement.classList.add("menu-items");
    itemDivElement.setAttribute("draggable", "true");
    itemDivElement.setAttribute("ondragstart", "drag(event)");
    let itemName = document.createElement("h2");
    itemName.textContent = obj.name;
    itemDivElement.appendChild(itemName);
    let itemPrice = document.createElement("p");
    itemPrice.textContent = "Rs: " + obj.price + "/-";
    itemDivElement.appendChild(itemPrice);

    menuSectionElement.appendChild(itemDivElement);
    console.log(itemDivElement);
};

for (let menuItem of itemList) {
    createMenuItem(menuItem);
}






function allowDrop(event) {
    event.preventDefault();
}
// let tempList = JSON.parse(localStorage.getItem("table1"));
// console.log(tempList);

function updateDetails(ttList, detailsNewElement) {

    let itemCount = 0;
    let totalPrice = 0;
    for (let temp of ttList) {
        itemCount += temp.quantity;
        totalPrice += temp.price;
    }
    detailsNewElement.textContent = "Total Items: " + itemCount + " || Price: Rs " + totalPrice + "/-";

}


//table-1
function drop1(event) {
    event.preventDefault();
    let tableList1 = [];
    let tempList = localStorage.getItem("table1");
    console.log(tempList);
    if (tempList !== null) {
        tempList = JSON.parse(tempList);
        for (let tempListItem of tempList) {
          
          tableList1.push(tempListItem);
            
        }

    }
    var data = event.dataTransfer.getData("text");
    let dataParsed = JSON.parse(data);
    if (tableList1.includes(dataParsed)){
      console.log(tableList1);
    localStorage.setItem("table1", JSON.stringify(tableList1));
      
    } 
    else{
      tableList1.push(dataParsed);
    }
    
    console.log(tableList1);
    localStorage.setItem("table1", JSON.stringify(tableList1));
    let detailsNewElement = document.getElementById("details1");
    updateDetails(tableList1, detailsNewElement);
}

//table-2
function drop2(event) {
    event.preventDefault();
    let tableList2 = [];
    let tempList = localStorage.getItem("table2");
    console.log(tempList);
    if (tempList !== null) {
        tempList = JSON.parse(tempList);
        for (let tempListItem of tempList) {
            tableList2.push(tempListItem);
        }

    }
    var data = event.dataTransfer.getData("text");
    let dataParsed = JSON.parse(data);
    tableList2.push(dataParsed);
    console.log(tableList2);
    localStorage.setItem("table2", JSON.stringify(tableList2));
    let detailsNewElement = document.getElementById("details2");
    updateDetails(tableList2, detailsNewElement);
}

//table-3
function drop3(event) {
    event.preventDefault();
    let tableList3 = [];
    let tempList = localStorage.getItem("table3");
    console.log(tempList);
    if (tempList !== null) {
        tempList = JSON.parse(tempList);
        for (let tempListItem of tempList) {
            tableList3.push(tempListItem);
        }

    }
    var data = event.dataTransfer.getData("text");
    let dataParsed = JSON.parse(data);
    tableList3.push(dataParsed);
    console.log(tableList3);
    let detailsNewElement = document.getElementById("details3");
    updateDetails(tableList3, detailsNewElement);
}
//table-4
function drop4(event) {
    event.preventDefault();
    let tableList4 = [];
    let tempList = localStorage.getItem("table4");
    console.log(tempList);
    if (tempList !== null) {
        tempList = JSON.parse(tempList);
        for (let tempListItem of tempList) {
            tableList4.push(tempListItem);
        }

    }
    var data = event.dataTransfer.getData("text");
    let dataParsed = JSON.parse(data);
    tableList4.push(dataParsed);
    console.log(tableList4);
    localStorage.setItem("table4", JSON.stringify(tableList4));
    let detailsNewElement = document.getElementById("details4");
    updateDetails(tableList4, detailsNewElement);
}

//table-5
function drop5(event) {
    event.preventDefault();
    let tableList5 = [];
    let tempList = localStorage.getItem("table5");
    console.log(tempList);
    if (tempList !== null) {
        tempList = JSON.parse(tempList);
        for (let tempListItem of tempList) {
            tableList5.push(tempListItem);
        }

    }
    var data = event.dataTransfer.getData("text");
    let dataParsed = JSON.parse(data);
    tableList5.push(dataParsed);
    console.log(tableList5);
    localStorage.setItem("table5", JSON.stringify(tableList5));
    let detailsNewElement = document.getElementById("details5");
    updateDetails(tableList5, detailsNewElement);
}







//create table cards
function createTable(obj) {
    let tableDiv = document.createElement("div");
    tableDiv.classList.add("table-container");
    tableDiv.setAttribute("id", "table" + obj.id);
    tableDiv.setAttribute("ondrop", "drop" + obj.id + "(event)");
    tableDiv.setAttribute("ondragover", "allowDrop(event)");
    let headElement = document.createElement("h2");
    headElement.textContent = "Table-" + obj.id;
    tableDiv.appendChild(headElement);
    let innerDiv = document.createElement("div");
    innerDiv.classList.add("table-elements");
    tableDiv.appendChild(innerDiv);
    let details = document.createElement("p");
    details.setAttribute("id", "details" + obj.id);
    details.setAttribute("onclick", "loadData" + obj.id + "()");
    details.setAttribute("data-toggle", "modal");
    details.setAttribute("data-target", "#popUp" + obj.id);
    details.textContent = "Total Items: 00 || Price: Rs 00/-";
    details.classList.add("mt-2");
    innerDiv.appendChild(details);
    tableSectionElement.appendChild(tableDiv);

    let tempList = localStorage.getItem("table" + obj.id);
    if (tempList !== null) {
        tempList = JSON.parse(tempList);
        let detailsNewElement = document.getElementById("details" + obj.id);
        updateDetails(tempList, detailsNewElement);

    }
    console.log(tableDiv);

}

for (let tableItem of tableList) {
    createTable(tableItem);
}






// <tr>
//   <th scope="row"></th>
//   <td></td>
//   <td></td>
//   <td>
//       <div class="d-flex flex-row">
//           <p></p>

//           <button class="minus">-</button>
//           <button class="plus">+</button>
//       </div>

//   </td>
//   <td><i id="itemName" class="material-icons w3-xlarge colorr">delete</i></td>
// </tr>




function loadData(obj, tableId, count) {
    

    let id = obj.id;
    //let diCon = document.createElement("div");
    //diCon.classList.add("d-flex","flex-row");
    let tableBodyElement = document.getElementById("orderList" + tableId);
    let tableRowElement = document.createElement("tr");
    tableRowElement.setAttribute("id","detail"+tableId);
    let tableH = document.createElement("th");
    tableH.setAttribute("scope", "row");
    tableH.textContent = count;
    tableRowElement.appendChild(tableH);
    // let td0 = document.createElement("td");
    // td0.textContent = count;
    // tableBodyElement.appendChild(td0);
    let td1 = document.createElement("td");
    td1.textContent = obj.name;
    tableRowElement.appendChild(td1);
    let td2 = document.createElement("td");
    td2.textContent = obj.price;
    td2.classList.add("ml-4");
    tableRowElement.appendChild(td2);
    let td3 = document.createElement("td");
    let tdDiv = document.createElement("div");
    tdDiv.classList.add("d-flex", "flex-row","marginupp","ml-3");
    let pp = document.createElement("p");
    pp.setAttribute("id", obj.name + pp);
    pp.textContent = obj.quantity;
    pp.setAttribute("id",obj.name+tableId);
    pp.classList.add("marginup");
    tdDiv.appendChild(pp);
    let minusB = document.createElement("button");
    minusB.classList.add("minus");
    minusB.setAttribute("onclick","DecreaseItem("+JSON.stringify(tableId+obj.name)+")")
    minusB.textContent = "-"
    tdDiv.appendChild(minusB);
    let plusB = document.createElement("button");
    plusB.classList.add("plus");
    plusB.textContent = "+"
    plusB.setAttribute("onclick","IncreaseItem("+JSON.stringify(tableId+obj.name)+")")
    //plusB.addEventListener("click",increaseQuantity(tableId,obj.name));
    tdDiv.appendChild(plusB);

    tableRowElement.appendChild(tdDiv);

    let td4 = document.createElement("td");
    let ic = document.createElement("i");
    let delBtn = document.createElement("button")
    ic.classList.add("material-icons", "w3-large", "colorr");
  
    delBtn.setAttribute("id", "itemName");
    ic.textContent = "delete";
    
    
    delBtn.appendChild(ic);
    delBtn.classList.add("dlt","transition");
    tableRowElement.appendChild(td4)
    console.log(td4);
    console.log(ic);
    td4.appendChild(delBtn);
    delBtn.setAttribute("id",tableId+obj.name);
    let idd=JSON.stringify(tableId+obj.name);
    delBtn.setAttribute("onclick","deleteItem("+idd+")");
    
    
    
     
   
    tableBodyElement.appendChild(tableRowElement);
    
}

// function increaseQuantity(tableId,name){
//   let tableName ="table"+tableId;
//   let tableLi =localStorage.getItem(tableName);
//   tableLi= JSON.parse(tableLi);
//   console.log(tableLi);

//   for (let temp of tableLi){
//     count=0
//     if(temp.name===name){
//         temp.quantity+=1;
//         let pp = document.getElementById(name+tableId);
//         console.log(temp.quantity);
//         pp.textContent=temp.quantity;
        
//     }
//     count++;
// }
// localStorage.setItem(tableName, JSON.stringify(tableLi)); 
// }

function DecreaseItem(id){
  console.log("increase function called")
    let tableName="table"+id.slice(0,1);
    let length = id.length;
    let name=id.slice(1,length);
    
    let idd =id.slice(0,1);
    let iddd=name+idd;
    let tableLi =localStorage.getItem(tableName);
    tableLi= JSON.parse(tableLi);
    console.log(tableLi); 
     
     for (let temp of tableLi){
         count=0
         if(temp.name===name){
             temp.quantity-=1;
             if(temp.quantity<1){
               temp.quantity=1;
             }
             let dd = document.getElementById(iddd);
             dd.textContent=temp.quantity;
             
             
         }
         count++;
     }
    localStorage.setItem(tableName, JSON.stringify(tableLi)); 
    console.log("deleted");
    console.log("logic working"+idd);
     let oldFeed1= document.getElementById("detail"+idd);
    
     oldFeed1.remove();

   if(tableName==="table1"){
     
    loadData1();
    let detailsNewElement = document.getElementById("details1");
    updateDetails(tableLi, detailsNewElement);
   }
   else if(tableName==="table2"){
    // let oldFeed2= document.getElementById("detail"+idd);
    // oldFeed2.remove();
     loadData2();
     let detailsNewElement = document.getElementById("details2");
    updateDetails(tableLi, detailsNewElement);
   }
   else if(tableName==="table3"){
    // let oldFeed3= document.getElementById("detail"+idd);
    // oldFeed3.remove();
    loadData3();
    let detailsNewElement = document.getElementById("details3");
    updateDetails(tableLi, detailsNewElement);
  }
  else if(tableName==="table4"){
    // let oldFeed4= document.getElementById("detail"+idd);
    //  oldFeed4.remove();
    loadData4();
    let detailsNewElement = document.getElementById("details4");
    updateDetails(tableLi, detailsNewElement);
  }
  else{
    // let oldFeed5= document.getElementById("detail"+idd);
    //  oldFeed5.remove();
    loadData5();
    let detailsNewElement = document.getElementById("details5");
    updateDetails(tableLi, detailsNewElement);
  }
 
    
}


function IncreaseItem(id){
  console.log("increase function called")
    let tableName="table"+id.slice(0,1);
    let length = id.length;
    let name=id.slice(1,length);
    
    let idd =id.slice(0,1);
    let iddd=name+idd;
    let tableLi =localStorage.getItem(tableName);
    tableLi= JSON.parse(tableLi);
    console.log(tableLi); 
     
     for (let temp of tableLi){
         count=0
         if(temp.name===name){
             temp.quantity+=1;
             let dd = document.getElementById(iddd);
             dd.textContent=temp.quantity;
             
             
         }
         count++;
     }
    localStorage.setItem(tableName, JSON.stringify(tableLi)); 
    console.log("deleted");
    let oldFeed1= document.getElementById("detail"+idd);
     
    oldFeed1.remove();
   if(tableName==="table1"){
     console.log("logic working"+idd);
     
    loadData1();
    let detailsNewElement = document.getElementById("details1");
    updateDetails(tableLi, detailsNewElement);
   }
   else if(tableName==="table2"){
    // let oldFeed2= document.getElementById("detail"+idd);
    // oldFeed2.remove();
     loadData2();
     let detailsNewElement = document.getElementById("details2");
    updateDetails(tableLi, detailsNewElement);
   }
   else if(tableName==="table3"){
    // let oldFeed3= document.getElementById("detail"+idd);
    // oldFeed3.remove();
    loadData3();
    let detailsNewElement = document.getElementById("details3");
    updateDetails(tableLi, detailsNewElement);
  }
  else if(tableName==="table4"){
    // let oldFeed4= document.getElementById("detail"+idd);
    //  oldFeed4.remove();
    loadData4();
    let detailsNewElement = document.getElementById("details4");
    updateDetails(tableLi, detailsNewElement);
  }
  else{
    // let oldFeed5= document.getElementById("detail"+idd);
    //  oldFeed5.remove();
    loadData5();
    let detailsNewElement = document.getElementById("details5");
    updateDetails(tableLi, detailsNewElement);
  }
 
    
}

function deleteItem(id){
  console.log("delete function called")
    let tableName="table"+id.slice(0,1);
    let length = id.length;
    let name=id.slice(1,length);
    let idd =id.slice(0,1);
    let tableLi =localStorage.getItem(tableName);
    tableLi= JSON.parse(tableLi);
    console.log(tableLi); 
     
     for (let temp of tableLi){
         count=0
         if(temp.name===name){
             tableLi.splice(count,1);
             
             
         }
         count++;
     }
    localStorage.setItem(tableName, JSON.stringify(tableLi)); 
    console.log("deleted");
    location.reload();

   if(tableName==="table1"){
     console.log("logic working"+idd);
     let oldFeed1= document.getElementById("detail"+idd);
     console.log(oldFeed);
     oldFeed1.remove();
    loadData1();
    let detailsNewElement = document.getElementById("details1");
    updateDetails(tableLi, detailsNewElement);
   }
   else if(tableName==="table2"){
    let oldFeed2= document.getElementById("detail"+idd);
    oldFeed2.remove();
     loadData2();
     let detailsNewElement = document.getElementById("details2");
    updateDetails(tableLi, detailsNewElement);
   }
   else if(tableName==="table3"){
    let oldFeed3= document.getElementById("detail"+idd);
    oldFeed3.remove();
    loadData3();
    let detailsNewElement = document.getElementById("details3");
    updateDetails(tableLi, detailsNewElement);
  }
  else if(tableName==="table4"){
    let oldFeed4= document.getElementById("detail"+idd);
     oldFeed4.remove();
    loadData4();
    let detailsNewElement = document.getElementById("details4");
    updateDetails(tableLi, detailsNewElement);
  }
  else{
    let oldFeed5= document.getElementById("detail"+idd);
     oldFeed5.remove();
    loadData5();
    let detailsNewElement = document.getElementById("details5");
    updateDetails(tableLi, detailsNewElement);
  }
 
    
}

function loadData1() {
    let objList = JSON.parse(localStorage.getItem("table1"));
    let count = 1;
    console.log(objList);
    
    let tableId = 1;
    for (let obj of objList) {
        loadData(obj, tableId, count);
        count++;
    }
}

function loadData2() {
    let objList = JSON.parse(localStorage.getItem("table2"));
    let count = 1;
    console.log(objList);
    let tableId = 2;
    for (let obj of objList) {
        loadData(obj, tableId, count);
        count++;
    }
}

function loadData3() {
    let objList = JSON.parse(localStorage.getItem("table3"));
    let count = 1;
    console.log(objList);
    let tableId = 3;
    for (let obj of objList) {
        loadData(obj, tableId, count);
        count++;
    }
}

function loadData4() {
    let objList = JSON.parse(localStorage.getItem("table4"));
    let count = 1;
    console.log(objList);
    let tableId = 4;
    for (let obj of objList) {
        loadData(obj, tableId, count);
        count++;
    }
}

function loadData5() {
    let objList = JSON.parse(localStorage.getItem("table5"));
    let count = 1;
    console.log(objList);
    let tableId = 5;
    for (let obj of objList) {
        loadData(obj, tableId, count);
        count++;
    }
}



function searchMenu() {
	let input = document.getElementById('menuSearch').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('menu-items');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="";				
		}
	}
}

function searchTables() {
	let input = document.getElementById('tableSearch').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('table-container');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="";				
		}
	}
}

function reload(){
  location.reload();
}

//aria-hidden="true"


// let tableSectionElement = document.getElementById("tableSection");

// function createTable(table) {
//     let tableDivElement = document.createElement("div");
//     tableDivElement.classList.add("table-container");
//     let tableHead = document.createElement("h2");
//     tableDivElement.appendChild(tableHead);
//     let tableDetails = document.createElement("p");
//     tableDetails.classList.add("mt-2");
//     tableDetails.textContent = "Total Items: <span>00</span> | Price: Rs <span>00</span>/-";
//     tableDivElement.appendChild(tableDetails);
//     console.log(tableDivElement);
// }
// let table = 0;
// createTable(table);


function clearTable1(){
  temp={
    name: "",
    price: 0,
    type: "",
    quantity: 0,
    id: 0
  }
  table1.push(temp);
  localStorage.setItem("table1",temp);
   reload();
}