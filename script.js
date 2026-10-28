let isTogle = true 

function testFunc() {
    if(isTogle){
        document.getElementById("colorBox").style.backgroundColor = 'red'
        isTogle = false
    }
    else {
        isTogle = true
        document.getElementById("colorBox").style.backgroundColor = 'blue'
    }
}


function apiCall() {
    fetch("https://jsonplaceholder.typicode.com/posts",
       { method:"GET"}).then((res) => {
         res.json().then((res2) => {
            console.log("Res", res2);
        });
    })
}