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
  var medianNum = [a,b,c]
  medianNum.sort()
  alert("the median of three numbers is " +medianNum[1])
  // Wanted to make it more dynamic, but couldn't get it to work right.
  //  Any suggestions?
  // medianLen = medianNum.length
  // medianPos = medianLen / 2
  // alert("the median of three numbers is " +medianNum[medianPos])
  
}
// range (max-min)
function myRange(){
  a = parseInt(document.getElementById("n1").value)
  b = parseInt(document.getElementById("n2").value)
  c = parseInt(document.getElementById("n3").value)
  var rangeNum = [a,b,c]
  rangeNum.sort()
  range = rangeNum[2] - rangeNum[0]
  alert("the range of three numbers is " +range)
}