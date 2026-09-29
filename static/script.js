```javascript
function addStock() {

    let stockName = document.getElementById("stockName").value;
    let quantity = document.getElementById("quantity").value;

    if (stockName == "" || quantity == "") {
        alert("Please enter stock name and quantity.");
        return;
    }

    let portfolio = document.getElementById("portfolio");

    let stock = document.createElement("p");

    stock.innerHTML = stockName.toUpperCase() + " - Quantity: " + quantity;

    portfolio.appendChild(stock);

    document.getElementById("stockName").value = "";
    document.getElementById("quantity").value = "";
}
```
