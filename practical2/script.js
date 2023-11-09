const container = document.querySelector('.users-container')
console.log(container)



// // fetch data from jsonplaceholder
// fetch('http://jsonplaceholder.typicode.com/users').then((response)=>{
//     // console.log(response.json())
// return response.json()

// }).then((data)=>{
//     // console.log(data)

//     const users = data;

//     let html = ''

//     users.forEach((user)=>{
//         html += `
//         <h1> ${user.name} </h1>
//         <div> ${user.username}</div>
//         <div> ${user.email}</div>
//         `
//     })

//     console.log(html)
//     container.innerHTML = html

// return data 
// }).catch((error)=>{

//     console.log(error)
//     return error

// })







const fetchUsers = async ()=>{
    const response = await fetch('http://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    let html = ''

    data.map((user)=>{
        html +=`
        <h1>${user.name}</h1>
        <div>${user.username}</div>
        <div>${user.email}</div>
        `
    })

    console.log(html)
    container.innerHTML = html
    
}

window.onload = async()=>{
    await fetchUsers().finally(()=>{
        console.log('Clean up the cache')
    })
}
