const container = document.querySelector('.user-container')

// fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
//     return response.json()

// }).then((data)=>{
// console.log(data)

// let html = ''
// data.forEach((user)=>{
//     html += `
//     <h1>${user.name}</h1>
//     <div>${user.username}</div>
//     <div>${user.email}</div>
//     `
// })
// container.innerHTML = html

// }).catch((error)=>{
//     console.log(error)

// })

// Using Async/Await

const fetchUsers = async ()=>{

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    let html = ''
    data.map((user)=>{
        html +=  `
        <h1>${user.name}</h1>
        <div>${user.username}</div>
        <div>${user.email}</div>
        `
    })

    container.innerHTML = html

}

window.onload = async()=>{
    await fetchUsers()
    
}