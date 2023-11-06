// generate numbers for the quizz

function randInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
var M = randInt(300,600);
var N = randInt(100,M);
var K = randInt(1,10);
console.log(M,N,K);

//put the random numbers in the HTML
document.getElementById("s1").textContent = M.toString();
document.getElementById("s2").textContent = N.toString();
document.getElementById("s3").textContent = K.toString();

// do the rest of the math

//generate the CORRECT answer

document.querySelector('[value="4"]').nextSibling.nodeValue = M.toString()+"-"+N.toString()+"+"+K.toString();
document.querySelector('[value="3"]').nextSibling.nodeValue = M.toString()+"-"+N.toString()+"-"+K.toString();
document.querySelector('[value="2"]').nextSibling.nodeValue = M.toString()+"-"+N.toString()+"-"+K.toString();
document.querySelector('[value="1"]').nextSibling.nodeValue = M.toString()+"-"+N.toString()+"+"+K.toString();