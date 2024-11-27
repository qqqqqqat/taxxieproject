function Calculatetax(){
    let incomeperyear = parseFloat(document.getElementById("incomeperyear").value)
    let discount = parseFloat(document.getElementById("discount").value)
    let netIncome = incomeperyear - discount
    let tax = 0
    let ranges = [150000, 300000, 500000, 750000, 1000000, 2000000, 5000000]
    let rates = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35]
    for(i = 0; i < ranges.length ;i++){
        if(netIncome <= ranges[i] || i === ranges.length - 1) {
            tax += netIncome * rates[i]
            break;
        }
        else {
          tax += (ranges[i] - (ranges[i - 1] || 0)) * rates[i];
          netIncome -= ranges[i];
        }

    }
    //นำค่าที่กรอกมาเช็คว่ามีความถูกต้องสามารถนำไปคำนวณได้
    if (isNaN(incomeperyear) || isNaN(discount)){
        alert("กรุณากรอกข้อมูลให้ถูกต้อง")
    }
    //กรณีข้อมูลถูกต้องแล้ว
    else{
        document.getElementById("result").innerHTML = "ภาษีที่ต้องชำระ: " + tax + " บาท"
        document.getElementById("result").style.display = "block"
    }

}