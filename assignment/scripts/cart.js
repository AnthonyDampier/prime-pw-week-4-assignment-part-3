console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const basket = ['Apple', 'Apple Sauce', 'Pineapple'];
const maxItems = 5;


function addItem(item){
    if (isFull() === false){
        basket.push(item);
        console.log("Item added.")
    }
    if (basket[basket.length-1] === item){
        //console.log('Item has been add!');
        return true;
    }
    console.log('item not added');
    return false
}

// let newItem = 'Apple';
// console.log('Test - console should return true: ',addItem(newItem));
// console.log(BASKET); // Visiual confirmation

function listItems(){
    if (basket.length > 0){
        for (item of basket){
            console.log(item);
        }
    } else {
        console.log("Your basket is empty.")
    }
}

// listItems(); //call to visual confirm.

function empty(){
    basket.length = 0;
    if (basket.length > 0){
        return false;
    } return true;
}
// empty();
// listItems(); // Will log that cart is empty

function isFull(){
    if (basket.length >= maxItems){
        return true;
    } else {
        return false;
    }
}




//Final testing
listItems();
console.log(`basket is ${basket}`);
console.log('Adding apples (expect true): ', addItem('apples'));
console.log(`basket is now ${basket}`);
console.log('basket is empty (expect true): ', empty());
console.log(`List items in basket: (expect undefined)`, listItems());


console.log('Basket is full (expect false:', isFull());
// Add item to full cart. 
addItem('Apple1');
addItem('Apple2');
addItem('Apple3');
addItem('Apple4');
addItem('Apple5');
addItem('Apple6');
console.log('^^ Expect last console to be: item not added');
console.log('Basket is full (expect true):', isFull());