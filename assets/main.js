// input declaration
const inputa=document.querySelector('.age input');
const inputw=document.querySelector('.weight input');
const inputh=document.querySelector('.height input');

// regex declaration
const exp=/^\d*\.?\d{0,2}$/;

// BMI calculation declaration
let BMI
let inputWeight;
let inputHeight;

//local storage declaration and condition check
let valueBmi = (localStorage.getItem("values"))?JSON.parse(localStorage.getItem("values")):[];
let valueWeight=(localStorage.getItem("valueOfWeight"))?JSON.parse(localStorage.getItem("valueOfWeight")):[];

//date and day display declaration and function
var now,days,date;
var days=["Sunday",'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
function mode(){
     now=document.querySelector(".do");
     date=new Date();
     day=document.querySelector(".day");
    day.innerHTML=days[date.getDay()];
    now.innerHTML=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();

    if(date.getDay()==0 && date.getUTCHours()==23){
        localStorage.clear("values");
        localStorage.clear("valueWeight");
    }
}

//age verification function
function myage(){
     if(inputa.value>100 || inputa.value<0){
        alert("enter your correct age");
          inputa.value="";
    }
    
}
//weight verification function
function myweight(){
    if(inputw.value<0 || inputw.length>5){
        alert("you have entered wrong value or enter two decimal point");
        inputw.value="";
    }
  else if(exp.test(inputw.value)){
      inputWeight=inputw.value;
}
else{
    alert('enter your correct weight!');
}
}
//height verification and BMI calculation function
function myheight(e){
    if(inputh.value<0 || inputh.value.length>4){
        alert("you have entered wrong value or enter two decimal point or enter all the fields");
        inputh.value="";
    }
    else if(exp.test(inputh.value) && event.key=="Enter"){
        inputHeight=inputh.value;
        BMI=inputWeight / (inputHeight ** 2);
        let heading=document.querySelector('.heading');
        const todayBmi = BMI.toFixed(2);
        heading.innerHTML=todayBmi;
        valueBmi.push(todayBmi);
        valueWeight.push(inputWeight);
        function ishealthy(){
            if(todayBmi>=30){
                var para=document.querySelector('.para');
                para.innerHTML="you're Obese : (";
            }
           else if(todayBmi>25){
                var para=document.querySelector('.para');
                para.innerHTML="you're Overweight : (";
            }
            else if(todayBmi<19){
                var para=document.querySelector('.para');
                para.innerHTML="you're Underweight : (";
            }
            else if(todayBmi>=19 || valueBmi<=25){
                var para=document.querySelector('.para');
                para.innerHTML="you're Normal weight : )";
            }
        }
        ishealthy();
        
    
        //local storage save function
     saveFunc= () =>{
        localStorage.setItem('valueOfWeight',JSON.stringify(valueWeight));
        localStorage.setItem('values',JSON.stringify(valueBmi));
     }
    }
    }
//input increment and decrement function
let increment= ()=>{
    document.getElementById('incrementor').stepUp(1);
}
let increasing=()=>{
    document.getElementById('increment').stepUp(1);
}
let expand=()=>{
    let a;
    let h=document.getElementById('increase').stepUp(1);
}
let decrement=()=>{
    document.getElementById('incrementor').stepDown(1);
}
let decreasing=()=>{
    document.getElementById('increment').stepDown(1);
}
let reduce=()=>{
    document.getElementById('increase').stepDown(1);
}

//toggle of the navbar
function show(){
    document.querySelector(".toggle-div").classList.toggle("left");
}

//chart display function
chartFunc = () =>{
    var chartIcon=document.querySelector('.fa-chart-bar')
    var bmiLine=JSON.parse(localStorage.getItem('values'));
    var weightLine=JSON.parse(localStorage.getItem('valueOfWeight'));
    var ctx = document.getElementById('myChart').getContext('2d');
    const xlabels=bmiLine;
    
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
    labels: xlabels,
    datasets: [{
    label: 'My First dataset',
    backgroundColor: 'transparent',
    borderColor: 'rgb(248, 130, 68)',
    data: weightLine
    }]
    },
    
    // Configuration options go here
    options: {
        legend: {
            display: false,
              labels: {
                display: false
              }
          }
    }
    });
    }
