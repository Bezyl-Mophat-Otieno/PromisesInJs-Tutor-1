// I want to display the various states of a promise object 
// I want to display the various result of a promise object

const promise = new Promise ((resolve , reject)=>{
    setTimeout(()=>{
        resolve('Done');
        // Only a single result can be called  , the other is ignored .
        reject(new Error('Error Occured'));
    }, 2000);
})

// Resolved Value ...
// const promise = new Promise ((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve(new Error('Error Occured'));
//     }, 2000);
// })



// The state : ['pending' , 'resolved' , 'rejected' and result ] are internal and thus can not be accessed directly .

// We are trying to simulate the state change .
// setInterval(()=>{
//     console.log(promise);
// },1000)


//CONSUMERS .then , .catch , .finally , 


const promise1 = new Promise ((resolve , reject)=>{
    setTimeout(()=>{

        resolve('Promise resolved successfully')

    },2000)

})

// .then function takes in two functions : the first when the promise resolves, and the second when the promise rejects . 
// incase the promise resolves successfully the second is not called .  

promise1.then((result)=>{
    return console.log(result);
},(error)=>{
    return console.log(error);
})



const promise2 = new Promise ((resolve , reject)=>{
    setTimeout(()=>{

        reject('Promise rejected successfully')

    },2000)

})



// If you are only interested with the .catch you can only pass null as the first argument to the .then function .
promise2.then(null,(error)=>{
    return console.log(error);
})


// Using the .catch method.

const promise3 = new Promise ((resolve , reject)=>{
    setTimeout(()=>{
        reject('Promise rejected successfully')
    },2000)

})

promise3.catch((error)=>{
   return console.log(error)
})


// Using the .finally method
// .finally has no arguments
// .finally does not return anything
// if it returns an error then its' passed to the next handler .

const promise4 = new Promise((resolve , reject)=>{

    setTimeout(()=>{
        resolve('Promise resolved successfully')
    },2000)
})

promise4.then(()=>{

    console.log('This is the resolved value ')

}).finally(()=>{
   console.log('We perform cleanup here , irregardless')
}).catch(()=>{
    console.log('This is the rejected value ')
})

// incase the .finally returns an error it's caught in the next handler


promise4.finally(()=>{
   console.log('We perform cleanup here , irregardless')
}).catch(()=>{
    console.log('This is the rejected value ')
})
