function ms2CalcR()
{
        bp = document.getElementById("inputBP").value;
        q = document.getElementById("inputQuantity").value;
        fc = bp * q;
        rp = document.getElementById("inputRP").value;
        fc2 = rp * q;
        mp = fc2 - (fc2 * .1);
        roi = mp - fc;
        document.getElementById("finalCost").innerHTML = fc;
        //document.getElementById("finalCost2").innerHTML = fc2;
        document.getElementById("marketProfit").innerHTML = mp;
        document.getElementById("roi").innerHTML = roi;
}