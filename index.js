// function sayHello() {
//     console.log("hello");
// }

// function callSayHello() {
//     sayHello();
// }

// //callSayHello();

// function callACallBack(callback) {
//     callback();
// }
// callACallBack(callSayHello);

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return function() {

    }
}

receivesAFunction(function() {
    console.log('I\'m anonymous');
});
