//max
function myMax(){
  a = parseInt(document.getElementById("n1").value)
  b = parseInt(document.getElementById("n2").value)
  c = parseInt(document.getElementById("n3").value)
  maxNum = Math.max(a,b,c)
  console.log(maxNum)
  alert("the max of three numbers is " +maxNum)
  //return(temp)
  
}
// min
function myMin(){
  a = parseInt(document.getElementById("n1").value)
  b = parseInt(document.getElementById("n2").value)
  c = parseInt(document.getElementById("n3").value)
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
  // var temp = [a,b,c]
  // medianNum = median(temp) 

  // if (a==0 || b==0 || c==0){
  //   alert("error, must be greater than zero")
  // }else if (b>a && c<a) {
  //   alert("median is: " +a)
  // }else if (a>b && c<b){
  //   alert("median is: " +b)
  // }else if (a>c && b<c){
  //   alert("median is: " +c)
  // }else
  //   alert("error")
  // console.log(medianNum)
  // alert("the average of three numbers is " +medianNum)
}
// range (max-min)