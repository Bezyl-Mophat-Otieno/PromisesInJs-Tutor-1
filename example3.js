const promise = new Promise (()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Everything went on well')
        },2000)
    })
})

promise.then((value)=>{
    console.log(value)
})


