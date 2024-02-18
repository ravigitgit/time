let myDate = new Date();


setInterval(()=>{
    document.getElementById('time').innerHTML = myDate;
}, 1000);