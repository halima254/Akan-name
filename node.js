function validatorFunction(){
    
    const maleNames = ["Kwasi", "Kwadwo", "Twabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames= ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 

    var year = parseInt(document.getElementById('year').value);
    var month =parseInt (document.getElementById('month').value);
    var date = parseInt(document.getElementById('date').value);
    var male = document.getElementById("male").value;
    var female=document.getElementById("female").value;
    
    if (date<=0 || date>31){
        alert("invalid date!");
    }
    else if (month<=0 || month >12){
        alert("invalid month!")
    }
    else if (year<=1400 || year>2020){
        alert("invalid year!")
    }
    else if (male =="" && female == ""){
        alert("pick a gender")
    }
    
      var cc = year.slice(0,1);
       var yy = year.slice(2,3);
       var mm = month;
       var dd = date;
       var day= Math.floor(((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;

   if(male == "male"){
       document.getElementById("output").innerHTML=("Your Akan name" + maleNames[day]+weekDays[day])
   }
   else if(female=="female"){
    document.getElementById("output").innerHTML=("Your Akan name" + femaleNames[day]+weekDays[day])

   } 

}


