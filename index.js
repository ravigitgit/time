document.addEventListener("load", myTimer);




setInterval(myTimer, 1000);

function myTimer(){
    let myDate = new Date();
    document.getElementById('time').innerHTML = myDate.toLocaleString();
}
