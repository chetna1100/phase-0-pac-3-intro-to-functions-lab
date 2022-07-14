// let string= "Hello";
// console.log(string);
// console.log(string.toUpperCase());

// string === string.toUpperCase();

function shout(string) {
    string ="Hello"
    return string.toUpperCase();
  }
  console.log(shout());

  function slow(loString){
loString ="Chetna"
console.log(loString.toLowerCase());
  }
slow()

function sayHiToGrandma(calling){
    if(calling===calling.toLowerCase()){
        console.log( "I can't hear you!")
    }else if(calling===calling.toUpperCase()){
        console.log( "YES INDEED!")
    }
    else if(calling==="I love you, Grandma."){
        console.log( "I love you, too.")
    }
        else{
            console.log( "mixed case letter")  
}
}
sayHiToGrandma("i love you")
sayHiToGrandma("I LOVE YOU")
sayHiToGrandma("I love you, Grandma.")
sayHiToGrandma("I love you ")