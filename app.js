// for(var a = 0 ; a<10; a++){
//     console.log(a)
// }

// var b = 0;
// while(b<10){
//     console.log(b);
//     b++;
// }

// var c = 0;
// do{
//     console.log(c)
//     c++;
// }
// while(c<10);

// function foo(greet){
//     var a = 2 + 2
//     alert("Hello World")
//     alert(a)
//     alert(greet)
// }

// function clickbtn(){
//     alert("Click")
// }

// function getName(){
//     var name = document.getElementById("xyz");
//     console.log(name.value)

//     name.value = ""
// }

// function setName(){
//     var name = document.getElementById("xyz");
//     name.value = "Muhib";
//     var para =document.getElementById("para")

//     para.innerHTML = "Hello This is Example"
// }

// setName()

function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = ""
}

function getResult(){
    var result = document.getElementById("result");
    
    console.log(result)
}