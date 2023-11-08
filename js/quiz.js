// generate numbers for the quizz

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var M = randInt(300, 600);
var N = randInt(100, M);
var K = randInt(1, 10);
console.log(M, N, K);

//put the random numbers in the HTML
document.getElementById("s1").textContent = M.toString();
document.getElementById("s2").textContent = N.toString();
document.getElementById("s3").textContent = K.toString();

// do the rest of the math

//generate the CORRECT answer

document.querySelector('[value="4"]').nextSibling.nodeValue = M.toString() + "-" + N.toString() + "+" + K.toString();
document.querySelector('[value="3"]').nextSibling.nodeValue = M.toString() + "-" + N.toString() + "-" + K.toString();
document.querySelector('[value="2"]').nextSibling.nodeValue = M.toString() + "-" + N.toString() + "-" + K.toString();
document.querySelector('[value="1"]').nextSibling.nodeValue = M.toString() + "-" + N.toString() + "+" + K.toString();

// Action -- click and change style

function changestyle(e) {
    e.preventDefault();  //prevent the default action
    //get the style of the element

    var classname = this.getAttribute("class");

    //change the style of this element (or clicked button)
    if (classname == "answer") {
        this.setAttribute("class", "answer selected");
    } else {

    }
    this.animate([{transform:'rotate(0deg)'}],{duration:3000, fill:"forwards"});
}
    //change the style back to normal when clicked
    
    // add the event listener to all the answers
    for (var i = 0; i < 4; i++) {
        document.getElementsByClassName("answer")[i].addEventListener("click", changestyle, false);
    }

