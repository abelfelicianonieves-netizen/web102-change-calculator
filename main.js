
function calculate(amountDue, amountReceived) {

  let change = Math.round((amountReceived - amountDue) * 100);

  let dollars = Math.floor(change / 100);
  change = change % 100;

  let quarters = Math.floor(change / 25);
  change = change % 25;

  let dimes = Math.floor(change / 10);
  change = change % 10;

  let nickels = Math.floor(change / 5);
  change = change % 5;

  let pennies = change;

  document.getElementById("dollars-output").textContent = dollars;
  document.getElementById("quarters-output").textContent = quarters;
  document.getElementById("dimes-output").textContent = dimes;
  document.getElementById("nickels-output").textContent = nickels;
  document.getElementById("pennies-output").textContent = pennies;

}

document.getElementById("calculate-change").addEventListener("click", function() {

  let amountDue = Number(document.getElementById("amount-due").value);
  let amountReceived = Number(document.getElementById("amount-received").value);

  if (amountReceived < amountDue) {
    alert("Not enough money!");
    return;
  }

  calculate(amountDue, amountReceived);

});