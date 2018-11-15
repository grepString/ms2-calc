function ms2Calc()
{
        ppi = document.getElementById("inputPPI").value;
        quantity = document.getElementById("inputQuantity").value;
        finalCost = ppi * quantity;
        profit = finalCost - (finalCost * .1)
        document.getElementById("cost").innerHTML = finalCost;
        document.getElementById("profit").innerHTML = profit;
}