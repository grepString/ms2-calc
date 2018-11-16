function ms2CalcR()
{
        bp = document.getElementById("inputBP").value;
        q = document.getElementById("inputQuantity").value;
        fc = bp * q;
        rp = document.getElementById("inputRP").value;
        fc2 = rp * q;
        mp = fc2 - (fc2 * .1);
        roi = mp - fc;
        incG = (roi / fc) * 100;
        document.getElementById("finalCost").innerHTML = fc;
        //document.getElementById("finalCost2").innerHTML = fc2;
        document.getElementById("marketProfit").innerHTML = mp;
        document.getElementById("roi").innerHTML = roi;
        document.getElementById("inc").innerHTML = incG.toFixed(2) + '%';

        var elt = document.getElementById("gains");
        if (roi >= 1)
            elt.style.cssText = 'color: #2ecc71;';
        else if (roi <= 0)  
            elt.style.cssText = 'color: #e74c3c;';
}