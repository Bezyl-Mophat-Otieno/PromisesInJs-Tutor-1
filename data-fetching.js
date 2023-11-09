const usersContainer = document.querySelector('.user-container');

const fetchUser = ()=>{
    return new Promise ((resolve , reject)=>{
        const response = fetch('https://jsonplaceholder.typicode.com/users')
        response.then((data)=>{
            return resolve (data.json())
        }).catch((err)=>{
            return reject(err)
        });
       
    })
}

fetchUser().then((data)=>{
    console.log(data)

}).catch((error)=>{

     console.log(error);
}).finally(()=>{
    console.log('Clean up the request Cache')
})



const dataFromPromise = [
    {name:'John Doe'},
    {name : 'Martine Doe'},
    { name : 'Sheila Doe'}
]


let html = ``
dataFromPromise.map((user)=>{
    html += `<div>${user.name}</div>`
})

usersContainer.innerHTML = html












