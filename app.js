function prova(){
    
    //Declarations of inputs
    var num1 = parseInt(document.getElementById("billNumber").value);
    var num2 = parseInt(document.getElementById("peopleNumber").value);
    var num3 = document.getElementById("percentage");
    

    /*//Declarations of outputs
    var risp1 = document.getElementById("risposta1");
    var risp2 = document.getElementById("risposta2");
    var risp3 = document.getElementById("risposta3");*/

    //Calculations tips
    var tip20 = num1 * 0.20;
    var tip10 = num1 * 0.10;
    var tip2 = num1 * 0.020;
    console.log(tip2);
    console.log(typeof tip2);

    //Calculations totals
    let total20 = num1 + tip20;
    let total10 = num1 + tip10;
    let total2 = num1 + tip2;
    console.log(total2);
    console.log(typeof total2);

    //Calculations each person owes
    let each20 = total20 / num2;
    let each10 = total10 / num2;
    let each2 = total2 / num2;
    console.log(num2);
    console.log(typeof tip2);
    console.log(each2);
    console.log(typeof each2);    
      
    
    // For not blank inputs
    if ((num1 > 0) && (num2 > 0) && 
        (document.getElementById("peopleNumber").value.length !== 0) &&
        (document.getElementById("peopleNumber").value.length !== 0)){
        
        //Select value 0
        if (num3.value == 0){
            alert("Please Select a Value for the Service");    
        }
        if (num3.value == 1){
            document.getElementById("risposta1").innerHTML = "Tip Amount $ " + tip20;
            document.getElementById("risposta2").innerHTML = "Total Amount $ " + total20;
            document.getElementById("risposta3").innerHTML = "Each person owes " + each20;
        }
        if (num3.value == 2){
            document.getElementById("risposta1").innerHTML = "Tip Amount $ " + tip10;
            document.getElementById("risposta2").innerHTML = "Total Amount $ " + total10;
            document.getElementById("risposta3").innerHTML = "Each person owes " + each10;
        }
        if (num3.value == 3){
            document.getElementById("risposta1").innerHTML = "Tip Amount $ " + tip2;
            document.getElementById("risposta2").innerHTML = "Total Amount $ " + total2;
            document.getElementById("risposta3").innerHTML = "Each person owes " + each2;
        }

    }
    else{
        alert("Bill cost and number of people must be different from zero.")
    }
}