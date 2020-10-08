//max
function myMax(){
	a = document.getElementById("n1").value
  b = document.getElementById("n2").value
  c = document.getElementById("n3").value
  maxNum = Math.max(a,b,c)
  console.log(maxNum)
  alert("the max of three numbers is " +maxNum)
  //return(temp)
  
}
// min
function myMin(){
	a = document.getElementById("n1").value
  b = document.getElementById("n2").value
  c = document.getElementById("n3").value
  minNum = Math.min(a,b,c)
  console.log(minNum)
  alert("the min of three numbers is " +minNum)
  //return(temp)
  
}

// average
function myAverage(){
  a = parseInt(document.getElementById("n1").value)
  b = parseInt(document.getElementById("n2").value)
  c = parseInt(document.getElementById("n3").value)
  averageNum = (a+b+c)/3
  console.log(averageNum)
  alert("the average of three numbers is " +averageNum)
}
// median
function myMedian(){
  a = parseInt(document.getElementById("n1").value)
  b = parseInt(document.getElementById("n2").value)
  c = parseInt(document.getElementById("n3").value)
  if(a>b && b<c){
    alert("median is: " +b)
  } elseif(b>a && a<c);{
    alert("median is: " +a)
  } elseif(a>c && c<b);{
    alert("median is: " +c)
  }
  
}
// range (max-min)