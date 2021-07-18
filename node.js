function validator(){
 var year = document.getElementById("year").value;
 var month = document.getElementById("month").value;
 var date = document.getElementById("date").value;



 if
 (date==""|| month==""|| year==""){
return false;
}
else{
    var CC =year.slice(0,1);
    var YY =year.slice(2,3);
    var weekday= Math.floor(((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    return weekday;
}
}
function gender(){
    var confirmGender=document.getElementsByName("gender");
    var male=document.getElementById("male");
    var female=document.getElementById("female");


if(!(confirmGender[0].checked || confirmGender[1].checked)){

   return false;
    }
    else if(male.checked){
    confirmGender=male.value;
    return confirmGender;    
    } 
    else if(female.checked){
    confirmGender=female.value;
    return confirmGender;
    }
}
function provideName(){
    var maleNames = ["Kwasi", "Kwadwo", "Twabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames= ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


if (gender() === "male") {
           alert("My Akan : " + maleNames[validator()]);
    }
 else if (gender() === "female") 
 {
alert("My Akan : " + femaleNames[validator()]);
       }
else{
       alert("Please select gender! ");
        }
    } 


