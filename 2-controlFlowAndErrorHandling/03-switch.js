//switch

var friend = 'Ken';

switch (friend){
    case 'Aaron':
        console.log('Hey Aaron, when are we going rock climbing?');
        break;
    case 'Kenn' :
        console.log('Hey Kenn, wanna play Catan?');
        break;
    case 'Carolyn':
        console.log('Hey Carolyn, when are we playong DnD?');
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`); 
}

//

var dessert = 'Pie'

switch (dessert){
    case 'Pie':
    console.log(`${dessert}, ${dessert}, me oh my!`);
    break;
case 'Cake' :
    console.log(`${dessert} is great!`);
    break;
case 'Ice Cream':
    console.log(`I scream for ${dessert}!`);
    break;
default:
    console.log(`${friend}, is not on the menu.`); 
}

//


var yep = -8;

switch (true) {
    case (yep < 0 && yep > -10):
        console.log('worked');
        break;
    case (yep > 0):
        console.lot('also worked!')
        break;
        default:
            console.log('didnt work')

    }




