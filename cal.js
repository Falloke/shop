// plus button
function plus1(){
    var counter1 = Number(document.getElementById("result1").innerText);
    document.getElementById("result1").innerHTML = counter1+1;
  }function plus2(){
    var counter2 = Number(document.getElementById("result2").innerText);
    document.getElementById("result2").innerHTML = counter2+1;
  }function plus3(){
    var counter3 = Number(document.getElementById("result3").innerText);
    document.getElementById("result3").innerHTML = counter3+1;
  }function plus4(){
    var counter4 = Number(document.getElementById("result4").innerText);
    document.getElementById("result4").innerHTML = counter4+1;
  }
  
  
  // minus button
  function minus1(){
    var counter1 = Number(document.getElementById("result1").innerText);
    if (counter1 > 0 ) {
      document.getElementById("result1").innerHTML = counter1-1;
    }
  }function minus2(){
    var counter2 = Number(document.getElementById("result2").innerText);
    if (counter2 > 0 ) {
      document.getElementById("result2").innerHTML = counter2-1;
    }
  }function minus3(){
    var counter3 = Number(document.getElementById("result3").innerText);
    if (counter3 > 0 ) {
      document.getElementById("result3").innerHTML = counter3-1;
    }
  }function minus4(){
    var counter4 = Number(document.getElementById("result4").innerText);
    if (counter4 > 0 ) {
      document.getElementById("result4").innerHTML = counter4-1;
    }
  }
  function sumbutton(){
    var counter1 = Number(document.getElementById("result1").innerText);
    var counter2 = Number(document.getElementById("result2").innerText);
    var counter3 = Number(document.getElementById("result3").innerText);
    var counter4 = Number(document.getElementById("result4").innerText);
    var ton = counter1+counter2+counter3+counter4 
    var tonsum = ton*3200
    document.getElementById("sum").innerHTML = tonsum+' BATH';

  }