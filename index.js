var century ,year ,month ,dayofmonth ,dayoftheweek ,day ;

function getInput(){
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    dayOfMonth = parseInt(document.getElementById("monthday").value);


    if(century == ""){
        alert("input the correct gender");
        return false;
    }else if (year == ""){
        alert("input the correct year");
        return false;
    }else if (month == ""){
        alert("input the correct month");
        return false;
    }else if(dayOfMonth == ""){
        alert("input the correct date");
        return false;
    }
}

function calculateDay(){
    getInput();
    dayOfWeek = ((((century/4)-2*century-1)+(5*year/4) + ((26*(month+1)/10))+ dayOfMonth)% 7) -1;
    console.log(dayOfWeek);
    return (Math.floor(dayOfWeek));
    if (dayOfWeek < 0){
        dayOfWeek = dayOfWeek * -1   
    }
    else if (dayOfWeek > 0){
        return dayOfWeek ;
    }
}


function chechDayOfWeek(){
    day = calculateDay();
    checkGender();
    console.log("the function runs")
}

let daysOfWeek = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
let maleNames =["Kwasi","Kwado","Kwabena","Kwaku","Yaw","Koffi","Kwame"];



function checkGender(){
    var gen = document.getElementById("rad1");
    if(gen[0].checked ==true){
        var gender ="male";
    }else if(gen[1].checked ==true){
        var gender ="female";
    }else {
        console.log("pass")
    }
}