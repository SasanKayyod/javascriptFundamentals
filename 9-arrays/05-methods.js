//Arrays, they aare objects but the way you pull info is llike a string

let x = [];

console.log(typeof x);

//

let student = ['Tyler', 'Sasan','Brandon','Lawrence','Rajni','SHerri','David'];

console.log(student[4]);

//

//Challenge

let cohort = ['Lawrence', 35, true, ['Brandon', 4, 'Sherri'], 6, false];

console.log('Hello',cohort[3][2], 'you look nice today');


//Populating/Referring

let food = ['hamburger','chicken','steak','burrito','BBQ'];


food.push('Pizza');

food.splice(2,1,'Hamburger Helper '); //.splice(position, how many to delete, what to add in that location)
food.splice(3,0,'Pie');
food.pop();

for (f in food) {
    console.log(food[f]);

}

//Iteraiting

let food = ['hamburger','chicken','steak','burrito','BBQ'];

food.forEach(f => console.log(f));

//

let food = ['hamburger','chicken','steak','burrito','BBQ'];

//food.forEach(f => console.log(`${f} is on the menu today.`));

//food.forEach((value, number) => {console.log(number, value); })

food.forEach((value, number) => {console.log(number); console.log(value)})


//Challenge

let movie = ['Star Wars', 'Star Trek','Blade Runner'];

movie.push('Shrek');
movie.splice(1,1,'Lord of the Rings');

movie.forEach(f => console.log(f));






