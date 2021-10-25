function prova(){
    
    //Declarations of inputs
    var num1 = parseInt(document.getElementById("billNumber").value);
    var num2 = parseInt(document.getElementById("peopleNumber").value);
    var num3 = document.getElementById("percentage");
    var divhtml = document.getElementById("alertcamp");
    var provbox = document.createElement("div");

    //Calculations
        var tip, total, each;
        if (num3.value == 1){
            tip = Number((num1 * 0.20).toFixed(2));
        }
        else if (num3.value == 2){
            tip = Number((num1 * 0.10).toFixed(2));
        }
        else{
            tip = Number((num1 * 0.01).toFixed(2));
        }
        total = num1 + tip;
        each = Number((total / num2).toFixed(2));
        
    
    if ((num1 > 0) && (num2 > 0) && 
        (document.getElementById("peopleNumber").value.length !== 0) &&
        (document.getElementById("peopleNumber").value.length !== 0)){
        
        
        document.getElementById("risposta1").innerHTML = "Tip amount is " + tip + " $";
        document.getElementById("risposta2").innerHTML = "Total amount is " + total + " $";
        document.getElementById("risposta3").innerHTML = "Each person owes " + each + " $";
        document.getElementById("alertwhat").remove();
    }


    else {
        if (!document.contains(document.getElementById("alertwhat"))){
        var provbox = document.createElement("div");
        var textnode = document.createTextNode("Bill Cost and Number of People cannot be blank or zero");
        
        provbox.appendChild(textnode);
        provbox.setAttribute("id", "alertwhat");
        divhtml.appendChild(provbox);
        } 
        // Il box di errore (e il testo) non vengono printati più volte in quanto la condizione
        // else non ha nessun comando oltre alla condizione if nestata. 
    }
}
