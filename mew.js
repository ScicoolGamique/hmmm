function calc() {
    var no1 = document.getElementById("no1").value;
    var no2 = document.getElementById("no2").value;
    var sign = document.getElementById("sign");
    var total;
    if (sign="+") {
      total= parseInt(no1)+parseInt(no2);
      }
     if (sign="-") {
        total= parseInt(no1)-parseInt(no2);
        }
        if (sign="/") {
            total= parseInt(no1)/parseInt(no2);
            }
            if (sign="*") {
                total= parseInt(no1)*parseInt(no2);
                }
     
    
    
    document.getElementById("result").innerHTML = total ;
}