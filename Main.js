let balance = document.querySelector(".amo span");
let incomeDisplay = document.getElementById("add");
let expenseDisplay = document.getElementById("low");
let textInput = document.querySelector(".textbox");
let amountInput = document.querySelector(".amountbox");
var historyList = document.querySelector(".history_div");
let addButton = document.querySelector("button");
let buttontns = document.querySelector(".button_rem");
var hist = document.querySelector(".history");
let add_Product = document.querySelector(".his_1");

let totalBalance = 0;
let totalIncome = 0;
let totalExpense = 0;

addButton.addEventListener("click", Transaction);

function Transaction() {
  let text = textInput.value.trim();
  let amount = parseInt(amountInput.value);

  if (text === "") {
    alert("Please enter valid text and amount.");
    return;
  }

  let transactionItem = document.createElement("div");
  transactionItem.classList = "af";

  let transactionText = document.createElement("p");
  transactionText.classList = "j";

  let transactionAmount = document.createElement("p");
  transactionAmount.classList = "h";

  let div1=document.createElement("div")
  let div2=document.createElement("div")
  let div3=document.createElement("div")

  div1.setAttribute("class","div1")
  div2.setAttribute("class","div2")
  div3.setAttribute("class","div3")

  let removebtn = document.createElement("button");
  removebtn.classList = "remove_btn";
  removebtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  let transactionItem_1 = document.createElement("p");

  if (amount > 0){
    transactionItem_1.className="left_g";
  }
  else{
    transactionItem_1.className = "left_r";
  }
  

  div1.append(transactionText)
  div2.append(transactionAmount,transactionItem_1)
  div3.append(div1,div2)
  transactionItem.append(removebtn,div3);
  historyList.append(transactionItem);

  removebtn.addEventListener("click", function () {
    transactionItem.remove();

    if (amount > 0) {
      totalIncome -= amount;
      balance.textContent = totalBalance = totalIncome - totalExpense;
      incomeDisplay.textContent = totalIncome;
    } else {
      totalExpense -= Math.abs(amount);
      expenseDisplay.textContent = totalExpense;
      balance.textContent = totalBalance = totalIncome - totalExpense;
    }
    balance.textContent = totalBalance = totalIncome - totalExpense;

    textInput.value = "";
    amountInput.value = "";
  });

  transactionText.textContent = text;

  if (amount > 0) {
    transactionAmount.textContent = `+${amount}`;
    totalIncome += amount;
    incomeDisplay.innerHTML =`<i class="fa-solid fa-indian-rupee-sign" style="color: lightgreen"></i>`+ totalIncome;
    balance.textContent = totalBalance = totalIncome - totalExpense;

  } else {
    transactionAmount.textContent = `${amount}`;
    totalExpense += Math.abs(amount);
    expenseDisplay.innerHTML =`<i class="fa-solid fa-indian-rupee-sign" style="color: red"></i>`+ totalExpense;
    balance.textContent = totalBalance = totalIncome - totalExpense;

  }

  balance.textContent = totalBalance = totalIncome - totalExpense;

  textInput.value = "";
  amountInput.value = "";
}