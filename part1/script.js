var count = 3;
var element1 = document.querySelector("#count");

function addLike(){
    count++;
    element1.innerText = count + " like(s)"
    console.log(count);
}