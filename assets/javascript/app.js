var correctTotal=0;
var incorrectTotal=0;

//questions function section
  //Question 1
addEventListener('click', function check(event)
{
  console.log(event.target.value)
   var ans = document.getElementsByName("q1");
   var buts = ans.length;
   console.log(ans[0].checked)
   for(var i = 0; i < buts; i++){
           if(ans[i].checked){
                 if (ans[i].value === "correct"){
                  this.correctTotal++;
                 }
                 else if (ans[i].value === "incorrect"){
                   this.incorrectTotal++;
                 }
                       
            }
       }
  console.log(correctTotal)
  console.log(incorrectTotal)
});

    //Question 2
addEventListener('click', function check(event)
{
  console.log(event.target.value)
   var ans = document.getElementsByName("q2");
   var buts = ans.length;
   console.log(ans[0].checked)
   for(var i = 0; i < buts; i++){
           if(ans[i].checked){
                 if (ans[i].value === "correct"){
                  this.correctTotal++;
                 }
                 else if (ans[i].value === "incorrect"){
                   this.incorrectTotal++;
                 }
                       
            }
       }
  console.log(correctTotal)
  console.log(incorrectTotal)
});

    //Question 3
addEventListener('click', function check(event)
{
  console.log(event.target.value)
   var ans = document.getElementsByName("q3");
   var buts = ans.length;
   console.log(ans[0].checked)
   for(var i = 0; i < buts; i++){
           if(ans[i].checked){
                 if (ans[i].value === "correct"){
                  this.correctTotal++;
                 }
                 else if (ans[i].value === "incorrect"){
                   this.incorrectTotal++;
                 }
                       
            }
       }
  console.log(correctTotal)
  console.log(incorrectTotal)
});

    //Question 4
addEventListener('click', function check(event)
{
  console.log(event.target.value)
   var ans = document.getElementsByName("q4");
   var buts = ans.length;
   console.log(ans[0].checked)
   for(var i = 0; i < buts; i++){
           if(ans[i].checked){
                 if (ans[i].value === "correct"){
                  this.correctTotal++;
                 }
                 else if (ans[i].value === "incorrect"){
                   this.incorrectTotal++;
                 }
                       
            }
       }
  console.log(correctTotal)
  console.log(incorrectTotal)
});

//count down function

var timeLeft = 30;
var elem = document.getElementById('clock');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    doSomething();
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}
//Console logging for testing.
console.log(timeLeft);
console.log(correctTotal);
console.log(incorrectTotal);