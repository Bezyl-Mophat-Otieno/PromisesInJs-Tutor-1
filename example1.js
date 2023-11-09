// Creatng a promise 

// let promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject('Someting went wrong')
//     },3000)
    
// })

// state : 'pending' , 'fullfilled' , 'rejected',
// result : 'Value' , 'error'


// let promise1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject('Promise was rejected successfully')
//     },3000)
    
// })


// Consumers .then () , .cath() , .finally()

// promise.then((value)=>{

//     let messageToFans = value ;
//     console.log(messageToFans);
    
// } , (error)=>{
//     let messageToFans = error
//     console.log(messageToFans);
// })


// promise.catch((error)=>{

//     let messageTofans = error;
//     console.log(messageTofans);

// })


// promise.then((value)=>{
//     let messageTofans = value;
//     console.log(messageTofans);

// })

// promise.finally(()=>{

//     console.log('Execute irregardless')

// })


const promise1 = new Promise ((resolve , reject)=>{

    // setTimeout(()=>{
    //    resolve('Everything went on well')
    // },2000)

    setTimeout(()=>{
         reject('Something went wrong')
    },4000)
})


const returnPromise = async ()=>{

    const value = await new Promise ((resolve , reject)=>{

        // setTimeout(()=>{
        //    resolve('Everything went on well')
        // },2000)
    
        setTimeout(()=>{
             resolve('Something went wrong')
        },4000)
    })

    console.log(value);

}

setTimeout(async()=>{
    await returnPromise()

},1000)

promise1.then((value)=>{
    
    console.log('Everything went on well')

}).catch(()=>{
    console.log('Something went wrong')

}).finally(()=>{

    console.log('Perform a cleanup of the process')

})









