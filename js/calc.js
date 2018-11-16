function ms2Calc()
{
        ppi = document.getElementById("inputPPI").value;
        q1 = document.getElementById("inputQuantity").value;
        fc1 = ppi * q1;
        p1 = fc1 - (fc1 * .1);
        document.getElementById("cost").innerHTML = fc1;
        document.getElementById("profit").innerHTML = p1;
}