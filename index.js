//Promise is object

const myPromise = new Promise((resolve, reject) => {
    //**
    // Execution of asynchronous actions(ВЫПОЛНЕНИЕ АСИНХРОННЫХ ДЕЙСТВИЙ)
    // Inside this function, you need to call one of the functions as a result: resolve() or reject()
    
})
console.log(myPromise);// Promise {<pending>} // myPromise is new instance of class Promise
// only created promise will be in condtion pending
// after promise executed it become in condtion or resolve or reject so we can work with value that we recieved in promise
//like some API fetch to us some data
// to get the result of promise we use .then() and .catch()
//as myPromise is promise 
myPromise
    .then(value => {
    // Actionns if promise executed successful
    // transitioned to the resolved state (перешло в состояние resolve)
    // 
})
