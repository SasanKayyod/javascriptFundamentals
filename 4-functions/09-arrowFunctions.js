//Fat Arrow Functions

//Standard
function laptop() {
    console.log(`Sasan\'s laptop is about to explode`);

}

laptop();

//Fat Arrow
let laptop = () => {
    console.log(`Sasan\'s laptop is about to explode`);

}

laptop();


//With parametters
var cats = (fleas, ticks) => {
    console.log("Cats have" + fleas + "and" + ticks);
}

cats('fleas','ticks');

var turtle = shell => {
    console.log('Turtles have' + shells)

}

turtle('shells');

//Concise Bodies
let apples = x => console.log(`There are ${x} apples.`);

apples(20);

//Block Bodies
 let apples = (x) => { console.log (`There are ${x} apples.`);}

 apples(7);


//Line break are bad

let func = () => console.log('hi'); //ok

//let func = ()
    // => console.log('hi'); //not ok











