let menuSectionElement = document.getElementById("menuSection");
let itemList = [{
        name: "French Fries",
        price: 105,
        type : "desserts",
        quantity : 1,
        id:1
    },
    {
        name: "Crusty Garlic Focaccia with Melted Cheese",
        price: 200,
        type : "desserts",
        quantity : 1,
        id:2
    },
    {
        name: "Home Country Fries with Herbs & Chilli Flakes",
        price: 300,
        type : "desserts",
        quantity : 1,
        id:3
    },
    {
        name: "French fries with Cheese & Jalapenos",
        price: 150,
        type : "desserts",
        quantity : 1,
        id:4
    },
    {
        name: "Onion Rings",
        price: 100,
        type : "desserts",
        quantity : 1,
        id:5
    },
    {
        name: "Chicken Biriyani",
        price: 250,
        type : "desserts",
        quantity : 1,
        id:6
    },
    {
        name: "Mutton mandi",
        price: 1399,
        type : "desserts",
        quantity : 1,
        id:7
    },
    {
        name: "Steek Chicken",
        price: 400,
        type : "desserts",
        quantity : 1,
        id:8
    }
];

function drag(event){
    event.dataTransfer.setData("text",event.target.id);
  }

var createMenuItem = (obj) => {
    let itemDivElement = document.createElement("div");
    itemDivElement.classList.add("menu-items");
     itemDivElement.setAttribute("id", obj.name);
    itemDivElement.setAttribute("draggable", "true");
    itemDivElement.setAttribute("ondragstart","drag(event)");
    let itemName = document.createElement("h2");
    itemName.textContent = obj.name;
    itemDivElement.appendChild(itemName);
    let itemPrice = document.createElement("p");
    itemPrice.textContent = "Rs: " + obj.price + "/-";
    itemDivElement.appendChild(itemPrice);
    let hiddenPrice = document.createElement("p");
    hiddenPrice.textContent = JSON.stringify(obj);
    hiddenPrice.classList.add("hidden");
    itemDivElement.appendChild(hiddenPrice);
    menuSectionElement.appendChild(itemDivElement);
    console.log(itemDivElement);
};

for (let menuItem of itemList) {
    createMenuItem(menuItem);
}
// New Table
var table1 = {};
table1.name = "Table-1";
table1.total = 0;
table1.itemsNo = 0;
var items = [];
table1.items = items;

// Table to Session 
sessionStorage.setItem(table1.name,JSON.stringify(table1));

var data2 = document.getElementById('tableSection');

// card Div
// var table1Card = document.createElement('div');
// table1Card.setAttribute("id","table1Card");
// table1Card.classList.add("table-container");
// table1Card.setAttribute("class","card");
// data2.appendChild(table1Card);

// Table Div
var table1Div = document.createElement('div');

table1Div.setAttribute("id","table1");
// table1Div.setAttribute("class","card-body");ard
table1Div.classList.add("table-container");
data2.appendChild(table1Div);
table1Div.setAttribute("ondrop","drop(event,table1Data.name)");
table1Div.setAttribute("ondragover","allowDrop(event)")
console.log(table1Div);
table1Data = JSON.parse(sessionStorage.getItem(table1.name));

// Table Name
var table1Name = document.createElement('h2');
table1Name.innerHTML = table1Data.name;
table1Name.setAttribute("id",table1Data.name + "name");
// table1Name.setAttribute("class","card-title");
table1Div.appendChild(table1Name);
let items1Div =document.createElement('div');
items1Div.classList.add("table-elements");
items1Div.classList.add("d-flex");
items1Div.classList.add("flex-row");
items1Div.classList.add("justify-content-center");
items1Div.classList.add("mt-2");
table1Div.appendChild(items1Div);

// Table Items after Drop
function allowDrop(event){
  event.preventDefault();
}

function drop(event,tableName){
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  itemList.forEach(function(element){
    if(element.name == data){
      var tableItem = document.createElement('tr');
      tableItem.style.marginLeft = "10px";
      tableItem.setAttribute("id",table1Data.name + element.name);
      table1Items.appendChild(tableItem);

      var itemPresent = false;
      var currElement ={ ...element } ;
      table1Data.items.forEach(function(ele){
        if(ele.name == data){
          ele.quantity++;
          currElement = ele;
          itemPresent = true;
        }
      })
      if(!itemPresent){
        table1Data.items.push(currElement);
        var name = document.createElement('td');
        name.innerHTML = currElement.name;
        tableItem.appendChild(name);

        var price = document.createElement('td');
        price.innerHTML = currElement.price;
        tableItem.appendChild(price);

        var quantity = document.createElement('td');
        quantity.setAttribute("id",table1Data.name + currElement.name + "quantity");
        quantity.innerHTML = currElement.quantity;
        tableItem.appendChild(quantity);

        var incDec = document.createElement('td');
        tableItem.appendChild(incDec);
        var increase = document.createElement('button');
        increase.setAttribute("id",table1Data.name + currElement.name + "increase");
        increase.setAttribute("value",currElement.name);
        increase.setAttribute("onclick","add(table1Data,value)");
        increase.innerHTML = "+";
        incDec.appendChild(increase);

        var decrease = document.createElement('button');
        decrease.setAttribute("id",table1Data.name + currElement.name + "decrease");
        decrease.setAttribute("value",currElement.name);
        decrease.setAttribute("onclick","subtract(table1Data,value)");
        decrease.innerHTML = "-";
        incDec.appendChild(decrease);

        var rem = document.createElement('td');
        tableItem.appendChild(rem);
        var remove = document.createElement('button');
        remove.setAttribute("id",table1Data.name + currElement.name + "remove");
        remove.setAttribute("value",currElement.name);
        remove.setAttribute("onclick","cancel(table1Data,value)");
        remove.innerHTML = "remove";
        rem.appendChild(remove);
      }else{
        document.getElementById(table1Data.name + currElement.name + "quantity").innerHTML = currElement.quantity;
      }

      table1Data.total = table1Data.total + currElement.price;
      table1Total.innerHTML = "| Price: Rs " + table1Data.total;
      table1ModalFooter.innerHTML = "Price: Rs " + table1Data.total;
             
      table1Data.itemsNo++;
      table1ItemsNo.innerHTML = "Total items: " + table1Data.itemsNo+" |";
      
      items1Div.appendChild(table1ItemsNo);
      items1Div.appendChild(table1Total);
    }
  })
  sessionStorage.setItem(table1Data.name,JSON.stringify(table1Data));
}

// Table Details
var table1Modal = document.createElement('div');
table1Modal.setAttribute("id",table1Data.name + "modal");
table1Modal.setAttribute("class","modal");
table1Div.appendChild(table1Modal);

var table1ModalContent = document.createElement('div');
table1ModalContent.setAttribute("id",table1Data.name + "modal-content");
table1ModalContent.setAttribute("class","modal-content");
table1Modal.appendChild(table1ModalContent);

var table1ModalHeader = document.createElement('div');
table1ModalHeader.setAttribute("id",table1Data.name + "modal-header");
table1ModalHeader.setAttribute("class","modal-header");
table1ModalHeader.innerHTML = table1Data.name + " | Order Details";
table1ModalContent.appendChild(table1ModalHeader);
var exit = document.createElement('span');
exit.innerHTML = "x";
exit.setAttribute("class","close");
exit.setAttribute("id",table1Data.name + "exit");
table1ModalHeader.appendChild(exit);

var table1Items = document.createElement('table');
table1Items.setAttribute("id",table1Data.name + "items");
table1Items.setAttribute("class","modal-body");
table1ModalContent.appendChild(table1Items);

table1Items.style.border = "1px";
table1Items.style.width = "100%";

var table1ItemsHeader = document.createElement('tr');
table1Items.appendChild(table1ItemsHeader);

var table1ItemsFoods = document.createElement('th');
table1ItemsFoods.innerHTML = "Items";
table1Items.appendChild(table1ItemsFoods);

var table1ItemsFoodPrice = document.createElement('th');
table1ItemsFoodPrice.innerHTML = "Price";
table1Items.appendChild(table1ItemsFoodPrice);

var table1ItemsFoodQuantity = document.createElement('th');
table1Items.appendChild(table1ItemsFoodQuantity);

var table1ItemsButtons = document.createElement('th');
table1Items.appendChild(table1ItemsButtons);

var table1ItemsRemove = document.createElement('th');
table1Items .appendChild(table1ItemsRemove);

var table1ModalFooter = document.createElement('div');
table1ModalFooter.setAttribute("id",table1Data.name + "modal-footer");
table1ModalFooter.setAttribute("class","modal-footer");
table1ModalFooter.innerHTML = "Price: Rs " + table1Data.total;
table1ModalContent.appendChild(table1ModalFooter);

// Bill
var table1BillDiv = document.createElement('div');
table1BillDiv.style.display = "flex";
table1BillDiv.style.justifyContent = "center";
table1BillDiv.style.alignItems = "center";
table1ModalContent.appendChild(table1BillDiv);
var table1Bill = document.createElement('button');
table1Bill.setAttribute("id",table1Data.name + "bill");
table1Bill.innerHTML = "bill";
table1BillDiv.appendChild(table1Bill);

var table1BillModal = document.createElement('div');
table1BillModal.setAttribute("id",table1Data.name + "modalBill");
table1BillModal.setAttribute("class","modal");
table1Div.appendChild(table1BillModal);

var table1BillModalContent = document.createElement('div');
table1BillModalContent.setAttribute("id",table1Data.name + "modalBill-content");
table1BillModalContent.setAttribute("class","modal-content");
table1BillModal.appendChild(table1BillModalContent);

var table1BillModalHeader = document.createElement('div');
table1BillModalHeader.setAttribute("id",table1Data.name + "modalBill-header");
table1BillModalHeader.setAttribute("class","modal-header");
table1BillModalHeader.innerHTML = "Bill";
table1BillModalContent.appendChild(table1BillModalHeader);
var exitBill = document.createElement('span');
exitBill.innerHTML = "x";
exitBill.setAttribute("class","close");
exitBill.setAttribute("id",table1Data.name + "exitBill");
table1BillModalHeader.appendChild(exitBill);

var table1BillBody = document.createElement('div');
table1BillBody.setAttribute("id",table1Data.name + "modal-body");
table1BillBody.setAttribute("class","modal-body");
table1BillModalContent.appendChild(table1BillBody);

var table1BillModalFooter = document.createElement('div');
table1BillModalFooter.setAttribute("id",table1Data.name + "modalBill-footer");
table1BillModalFooter.setAttribute("class","modal-footer");
table1BillModalContent.appendChild(table1BillModalFooter);

// Table Items Loop
table1Data.items.forEach(function(element){

  var name = document.createElement('div');
  name.innerHTML = element.name;
  table1Items.appendChild(name);

  var price = document.createElement('div');
  price.innerHTML = element.price;
  table1Items.appendChild(price);

  var quantity = document.createElement('div');
  quantity.setAttribute("id",table1Data.name + element.name + "quantity");
  quantity.innerHTML = element.quantity;    
  table1Items.appendChild(quantity);

});

//items div
 
// Table Item No
var table1ItemsNo = document.createElement('p');
table1ItemsNo.setAttribute("id",table1Data.name + "itemsNo");
table1ItemsNo.setAttribute("class","card-text");
table1ItemsNo.innerHTML = "Total Items: " + table1Data.itemsNo+" |";
items1Div.appendChild(table1ItemsNo);
// Table Total
var table1Total = document.createElement('p');
table1Total.setAttribute("id",table1Data.name + "total");
table1Total.setAttribute("class","card-text");
table1Total.innerHTML = "| Price: Rs " + table1.total + "/- ";
items1Div.appendChild(table1Total);


 
// Pop up Window (Modal) Table Details Functions
var modal = document.getElementById(table1Data.name +"modal");

var modalTableName = document.getElementById(table1Data.name + "name");
var modalTableTotal = document.getElementById(table1Data.name + "total");
var modalTableItemsNo = document.getElementById(table1Data.name + "itemsNo");

var span = document.getElementById(table1Data.name +"exit");

modalTableName.onclick = function() {
  modal.style.display = "block";
}
modalTableTotal.onclick = function() {
  modal.style.display = "block";
}
modalTableItemsNo.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
  return;
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  return;
}

// Pop up Window (Modal) Bill Functions
var modal2 = document.getElementById(table1Data.name +"modalBill");

var btn2 = document.getElementById(table1Data.name + "bill");

var span2 = document.getElementById(table1Data.name +"exitBill");

btn2.onclick = function() {

  console.log("w");
  var billItems = document.createElement('table');
  billItems.style.border = "1px";
  billItems.style.width = "100%";
  table1BillBody.appendChild(billItems);

  var billHeader = document.createElement('tr');
  billItems.appendChild(billHeader);

  var billSNo = document.createElement('th');
  billSNo.innerHTML = "S.No";
  billHeader.appendChild(billSNo);

  var billFoods = document.createElement('th');
  billFoods.innerHTML = "Items";
  billHeader.appendChild(billFoods);

  var billFoodPrice = document.createElement('th');
  billFoodPrice.innerHTML = "Price";
  billHeader.appendChild(billFoodPrice);

  var billFoodQuantity = document.createElement('th');
  billFoodQuantity.innerHTML = "Quantity";
  billHeader.appendChild(billFoodQuantity);

  var billFoodCost = document.createElement('th');
  billFoodCost.innerHTML = "Cost";
  billHeader.appendChild(billFoodCost);

  var i = 1;
  table1Data.items.forEach(function(element){

    var billItem = document.createElement('tr');
    billItems.appendChild(billItem);

    var billItemSNo = document.createElement('td');
    billItemSNo.innerHTML = i++;
    billItem.appendChild(billItemSNo);

    var billItemFoods = document.createElement('td');
    billItemFoods.innerHTML = element.food;
    billItem.appendChild(billItemFoods);

    var billItemFoodPrice = document.createElement('td');
    billItemFoodPrice.innerHTML = element.price;
    billItem.appendChild(billItemFoodPrice);

    var billItemFoodQuantity = document.createElement('td');
    billItemFoodQuantity.innerHTML = element.quantity;
    billItem.appendChild(billItemFoodQuantity);

    var billItemFoodCost = document.createElement('td');
    billItemFoodCost.innerHTML = element.price * element.quantity;
    billItem.appendChild(billItemFoodCost);
  });

  table1BillModalFooter.innerHTML = "Total Cost Rs: " + table1Data.total;

  // reset Table
  sessionStorage.removeItem(table1.name);
  sessionStorage.setItem(table1.name,JSON.stringify(table1));
  table1Data = JSON.parse(sessionStorage.getItem(table1.name));

  table1Total.innerHTML = "Price: Rs " + table1Data.total;
  table1ItemsNo.innerHTML = "Total items: " + table1Data.itemsNo+" |";
  table1Items.innerHTML = "";
  table1ModalFooter.innerHTML = "| Price: Rs " + table1Data.total;

  console.log(table1.items);
  console.log(itemList);

  modal2.style.display = "block"
  modal.style.display = "none";
}



window.onclick = function(event) {
  if (event.target == modal2) {
    table1BillBody.innerHTML = "";
    modal2.style.display = "none";
  }
}

span2.onclick = function() {
  table1BillBody.innerHTML = "";
  modal2.style.display = "none";
}

var hr1 = document.createElement('hr');
table1Div.appendChild(hr1);
data2.appendChild(hr1);




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






function add(tableData, value){
    var element;
    tableData.items.forEach(function(ele){
      if(ele.name == value){
        element = ele;
      }
    })
    console.log("increase");
    console.log(element);
    element.quantity++;
    document.getElementById(tableData.name + element.food + "quantity").innerHTML = element.quantity;
  
    tableData.total = tableData.total + element.price;
    document.getElementById(tableData.name + "total").innerHTML = "Price: Rs " + tableData.total;
    document.getElementById(tableData.name + "modal-footer").innerHTML = "Price: Rs " + tableData.total;
    
    tableData.itemsNo++;
    document.getElementById(tableData.name + "itemsNo").innerHTML = "Total items: " + tableData.itemsNo;
    
    sessionStorage.setItem(tableData.name,JSON.stringify(tableData));
  }
  
  function subtract(tableData, value){
    var element;
    tableData.items.forEach(function(ele){
      if(ele.food == value){
        element = ele;
      }
    })
    if(element.quantity <= 1){
      return;
    }
    console.log("decrease");
    console.log(element);
    element.quantity--;
    document.getElementById(tableData.name + element.food + "quantity").innerHTML = element.quantity;
  
    tableData.total = tableData.total - element.price;
    document.getElementById(tableData.name + "total").innerHTML = "Total Rs: " + tableData.total;
    document.getElementById(tableData.name + "modal-footer").innerHTML = "Total Rs: " + tableData.total;
        
    tableData.itemsNo--;
    document.getElementById(tableData.name + "itemsNo").innerHTML = "items: " + tableData.itemsNo;
   
    sessionStorage.setItem(tableData.name,JSON.stringify(tableData));
  }
  
  function cancel(tableData, value){
    var element;
    tableData.items.forEach(function(ele){
      if(ele.food == value){
        element = ele;
      }
    })
  
    document.getElementById(tableData.name + element.food).innerHTML = "";
    console.log("cancel");
    console.log(element);
      
    tableData.total = tableData.total - (element.price * element.quantity);
    document.getElementById(tableData.name + "total").innerHTML = "Price: Rs " + tableData.total;
    document.getElementById(tableData.name + "modal-footer").innerHTML = "Price: Rs " + tableData.total;
         
    tableData.itemsNo = tableData.itemsNo - element.quantity;
    document.getElementById(tableData.name + "itemsNo").innerHTML = "Total items: " + tableData.itemsNo;
    
    var index = tableData.items.indexOf(element);
    tableData.items.splice(index,1);
    sessionStorage.setItem(tableData.name,JSON.stringify(tableData));
  }
  
  function searchTable(tableSearch){
    table1Div.style.display = "none";
    table2Div.style.display = "none";
    table3Div.style.display = "none";
    if(table1.name.toLowerCase().includes(tableSearch.toLowerCase())){
      table1Div.style.display = "block";
    }
    if(table2.name.toLowerCase().includes(tableSearch.toLowerCase())){
      table2Div.style.display = "block";
    }
    if(table3.name.toLowerCase().includes(tableSearch.toLowerCase())){
      table3Div.style.display = "block";
    }
    document.getElementById('tableSearch').value = "";
  }