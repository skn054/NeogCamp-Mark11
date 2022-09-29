const dob = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const luckybtn = document.querySelector(".luck-num-btn");
const output = document.querySelector("#output");

var dobValue;
var luckyValue;


function clickHandler(){


    dobValue=dob.value;
    luckyValue=luckyNumber.value;
    if(dobValue == ""  && (luckyValue== "" || luckyValue<=0)){
        output.classList.add("output-err");
        output.innerText="Enter DOB and Lucky Number";  
    }
    else if(luckyValue== "" || luckyValue<=0){
        output.classList.add("output-err");
        output.innerText="Enter valid lucky number";    
    }else if(dobValue == "" ){
        output.classList.add("output-err");
        output.innerText="Enter DOB";  
    }
    else if(dobValue !="" && luckyValue>0){
        output.classList.remove("output-err");
        checkLuckyNumber();
    }
}

function checkLuckyNumber() {
  var sum=0;
  var dobList = dobValue.replaceAll("-", "");
  console.log("Replaced all", dobList);
  for (var i = 0; i < dobList.length; i++) {
    console.log("in array value of i", dobList[i]);
    sum += parseInt(dobList[i]);
    console.log("sum is", sum);
  }

  if (sum % luckyValue == 0) {
    output.innerText = "Yeahh!! Your Birthday is LUCKY 🎉🎉🎉";
  } else {
    output.innerText = "oops!! Your Birthday is NOT LUCKY 🥴🥴🥴";
  }
}

luckybtn.addEventListener("click", clickHandler);