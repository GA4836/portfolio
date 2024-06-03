var b4tax = Number(Math.round(localStorage.getItem("total"))+Number(localStorage.getItem("total2")+20));
b4tax=Math.round(b4tax)
document.getElementById("pretax").innerHTML = b4tax;
var tax= Number(Math.round(b4tax/10));
document.getElementById("tax").innerHTML=tax;
var total=Number(b4tax+tax)
document.getElementById("total").innerHTML=total