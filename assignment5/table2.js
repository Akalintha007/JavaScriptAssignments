// New Table
var table2 = {};
table2.name = "Table-2";
table2.total = 0;
table2.itemsNo = 0;
var items = [];
table2.items = items;

// Table to Session 
sessionStorage.setItem(table2.name,JSON.stringify(table2));

var data2 = document.getElementById('tableSection');

// card Div
// var table2Card = document.createElement('div');
// table2Card.setAttribute("id","table2Card");
// table2Card.classList.add("table-container");
// table2Card.setAttribute("class","card");
// data2.appendChild(table2Card);

// Table Div
var table2Div = document.createElement('div');

table2Div.setAttribute("id","table2");
// table2Div.setAttribute("class","card-body");ard
table2Div.classList.add("table-container");
data2.appendChild(table2Div);
table2Div.setAttribute("ondrop","drop(event,table2Data.name)");
table2Div.setAttribute("ondragover","allowDrop(event)")
console.log(table2Div);
table2Data = JSON.parse(sessionStorage.getItem(table2.name));

// Table Name
var table2Name = document.createElement('h2');
table2Name.innerHTML = table2Data.name;
table2Name.setAttribute("id",table2Data.name + "name");
// table2Name.setAttribute("class","card-title");
table2Div.appendChild(table2Name);
let items2Div =document.createElement('div');
items2Div.classList.add("table-elements");
items2Div.classList.add("d-flex");
items2Div.classList.add("flex-row");
items2Div.classList.add("justify-content-center");
items2Div.classList.add("mt-2");
table2Div.appendChild(items2Div);

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
      tableItem.style.marginLeft = "20px";
      tableItem.setAttribute("id",table2Data.name + element.name);
      table2Items.appendChild(tableItem);

      var itemPresent = false;
      var currElement ={ ...element } ;
      table2Data.items.forEach(function(ele){
        if(ele.name == data){
          ele.quantity++;
          currElement = ele;
          itemPresent = true;
        }
      })
      if(!itemPresent){
        table2Data.items.push(currElement);
        var name = document.createElement('td');
        name.innerHTML = currElement.name;
        tableItem.appendChild(name);

        var price = document.createElement('td');
        price.innerHTML = currElement.price;
        tableItem.appendChild(price);

        var quantity = document.createElement('td');
        quantity.setAttribute("id",table2Data.name + currElement.name + "quantity");
        quantity.innerHTML = currElement.quantity;
        tableItem.appendChild(quantity);

        var incDec = document.createElement('td');
        tableItem.appendChild(incDec);
        var increase = document.createElement('button');
        increase.setAttribute("id",table2Data.name + currElement.name + "increase");
        increase.setAttribute("value",currElement.name);
        increase.setAttribute("onclick","add(table2Data,value)");
        increase.innerHTML = "+";
        incDec.appendChild(increase);

        var decrease = document.createElement('button');
        decrease.setAttribute("id",table2Data.name + currElement.name + "decrease");
        decrease.setAttribute("value",currElement.name);
        decrease.setAttribute("onclick","subtract(table2Data,value)");
        decrease.innerHTML = "-";
        incDec.appendChild(decrease);

        var rem = document.createElement('td');
        tableItem.appendChild(rem);
        var remove = document.createElement('button');
        remove.setAttribute("id",table2Data.name + currElement.name + "remove");
        remove.setAttribute("value",currElement.name);
        remove.setAttribute("onclick","cancel(table2Data,value)");
        remove.innerHTML = "remove";
        rem.appendChild(remove);
      }else{
        document.getElementById(table2Data.name + currElement.name + "quantity").innerHTML = currElement.quantity;
      }

      table2Data.total = table2Data.total + currElement.price;
      table2Total.innerHTML = "| Price: Rs " + table2Data.total;
      table2ModalFooter.innerHTML = "Price: Rs " + table2Data.total;
             
      table2Data.itemsNo++;
      table2ItemsNo.innerHTML = "Total items: " + table2Data.itemsNo+" |";
      
      items2Div.appendChild(table2ItemsNo);
      items2Div.appendChild(table2Total);
    }
  })
  sessionStorage.setItem(table2Data.name,JSON.stringify(table2Data));
}

// Table Details
var table2Modal = document.createElement('div');
table2Modal.setAttribute("id",table2Data.name + "modal");
table2Modal.setAttribute("class","modal");
table2Div.appendChild(table2Modal);

var table2ModalContent = document.createElement('div');
table2ModalContent.setAttribute("id",table2Data.name + "modal-content");
table2ModalContent.setAttribute("class","modal-content");
table2Modal.appendChild(table2ModalContent);

var table2ModalHeader = document.createElement('div');
table2ModalHeader.setAttribute("id",table2Data.name + "modal-header");
table2ModalHeader.setAttribute("class","modal-header");
table2ModalHeader.innerHTML = table2Data.name + " | Order Details";
table2ModalContent.appendChild(table2ModalHeader);
var exit = document.createElement('span');
exit.innerHTML = "x";
exit.setAttribute("class","close");
exit.setAttribute("id",table2Data.name + "exit");
table2ModalHeader.appendChild(exit);

var table2Items = document.createElement('table');
table2Items.setAttribute("id",table2Data.name + "items");
table2Items.setAttribute("class","modal-body");
table2ModalContent.appendChild(table2Items);

table2Items.style.border = "2px";
table2Items.style.width = "200%";

var table2ItemsHeader = document.createElement('tr');
table2Items.appendChild(table2ItemsHeader);

var table2ItemsFoods = document.createElement('th');
table2ItemsFoods.innerHTML = "Items";
table2Items.appendChild(table2ItemsFoods);

var table2ItemsFoodPrice = document.createElement('th');
table2ItemsFoodPrice.innerHTML = "Price";
table2Items.appendChild(table2ItemsFoodPrice);

var table2ItemsFoodQuantity = document.createElement('th');
table2Items.appendChild(table2ItemsFoodQuantity);

var table2ItemsButtons = document.createElement('th');
table2Items.appendChild(table2ItemsButtons);

var table2ItemsRemove = document.createElement('th');
table2Items .appendChild(table2ItemsRemove);

var table2ModalFooter = document.createElement('div');
table2ModalFooter.setAttribute("id",table2Data.name + "modal-footer");
table2ModalFooter.setAttribute("class","modal-footer");
table2ModalFooter.innerHTML = "Price: Rs " + table2Data.total;
table2ModalContent.appendChild(table2ModalFooter);

// Bill
var table2BillDiv = document.createElement('div');
table2BillDiv.style.display = "flex";
table2BillDiv.style.justifyContent = "center";
table2BillDiv.style.alignItems = "center";
table2ModalContent.appendChild(table2BillDiv);
var table2Bill = document.createElement('button');
table2Bill.setAttribute("id",table2Data.name + "bill");
table2Bill.innerHTML = "bill";
table2BillDiv.appendChild(table2Bill);

var table2BillModal = document.createElement('div');
table2BillModal.setAttribute("id",table2Data.name + "modalBill");
table2BillModal.setAttribute("class","modal");
table2Div.appendChild(table2BillModal);

var table2BillModalContent = document.createElement('div');
table2BillModalContent.setAttribute("id",table2Data.name + "modalBill-content");
table2BillModalContent.setAttribute("class","modal-content");
table2BillModal.appendChild(table2BillModalContent);

var table2BillModalHeader = document.createElement('div');
table2BillModalHeader.setAttribute("id",table2Data.name + "modalBill-header");
table2BillModalHeader.setAttribute("class","modal-header");
table2BillModalHeader.innerHTML = "Bill";
table2BillModalContent.appendChild(table2BillModalHeader);
var exitBill = document.createElement('span');
exitBill.innerHTML = "x";
exitBill.setAttribute("class","close");
exitBill.setAttribute("id",table2Data.name + "exitBill");
table2BillModalHeader.appendChild(exitBill);

var table2BillBody = document.createElement('div');
table2BillBody.setAttribute("id",table2Data.name + "modal-body");
table2BillBody.setAttribute("class","modal-body");
table2BillModalContent.appendChild(table2BillBody);

var table2BillModalFooter = document.createElement('div');
table2BillModalFooter.setAttribute("id",table2Data.name + "modalBill-footer");
table2BillModalFooter.setAttribute("class","modal-footer");
table2BillModalContent.appendChild(table2BillModalFooter);

// Table Items Loop
table2Data.items.forEach(function(element){

  var name = document.createElement('div');
  name.innerHTML = element.name;
  table2Items.appendChild(name);

  var price = document.createElement('div');
  price.innerHTML = element.price;
  table2Items.appendChild(price);

  var quantity = document.createElement('div');
  quantity.setAttribute("id",table2Data.name + element.name + "quantity");
  quantity.innerHTML = element.quantity;    
  table2Items.appendChild(quantity);

});

//items div
 
// Table Item No
var table2ItemsNo = document.createElement('p');
table2ItemsNo.setAttribute("id",table2Data.name + "itemsNo");
table2ItemsNo.setAttribute("class","card-text");
table2ItemsNo.innerHTML = "Total Items: " + table2Data.itemsNo+" |";
items2Div.appendChild(table2ItemsNo);
// Table Total
var table2Total = document.createElement('p');
table2Total.setAttribute("id",table2Data.name + "total");
table2Total.setAttribute("class","card-text");
table2Total.innerHTML = "| Price: Rs " + table2.total + "/- ";
items2Div.appendChild(table2Total);


 
// Pop up Window (Modal) Table Details Functions
var modal = document.getElementById(table2Data.name +"modal");

var modalTableName = document.getElementById(table2Data.name + "name");
var modalTableTotal = document.getElementById(table2Data.name + "total");
var modalTableItemsNo = document.getElementById(table2Data.name + "itemsNo");

var span = document.getElementById(table2Data.name +"exit");

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
var modal2 = document.getElementById(table2Data.name +"modalBill");

var btn2 = document.getElementById(table2Data.name + "bill");

var span2 = document.getElementById(table2Data.name +"exitBill");

btn2.onclick = function() {

  console.log("w");
  var billItems = document.createElement('table');
  billItems.style.border = "2px";
  billItems.style.width = "200%";
  table2BillBody.appendChild(billItems);

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

  var i = 2;
  table2Data.items.forEach(function(element){

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

  table2BillModalFooter.innerHTML = "Total Cost Rs: " + table2Data.total;

  // reset Table
  sessionStorage.removeItem(table2.name);
  sessionStorage.setItem(table2.name,JSON.stringify(table2));
  table2Data = JSON.parse(sessionStorage.getItem(table2.name));

  table2Total.innerHTML = "Price: Rs " + table2Data.total;
  table2ItemsNo.innerHTML = "Total items: " + table2Data.itemsNo+" |";
  table2Items.innerHTML = "";
  table2ModalFooter.innerHTML = "| Price: Rs " + table2Data.total;

  console.log(table2.items);
  console.log(itemList);

  modal2.style.display = "block"
  modal.style.display = "none";
}



window.onclick = function(event) {
  if (event.target == modal2) {
    table2BillBody.innerHTML = "";
    modal2.style.display = "none";
  }
}

span2.onclick = function() {
  table2BillBody.innerHTML = "";
  modal2.style.display = "none";
}

var hr2 = document.createElement('hr');
table2Div.appendChild(hr2);
data2.appendChild(hr2);
