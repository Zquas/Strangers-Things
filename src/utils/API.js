const BASE_URL = "https://strangers-things.herokuapp.com/api/2209-ftb-pt-web-pt";

export async function registerUser(user){
    const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    const data = await response.json();
    console.log(data);
    return data;
}

export async function sendMessage(message, id, token){
    //fetch to the right end point
    const response = await fetch(`${BASE_URL}/users/message`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(token)
    })
    const data = await response.json();
    console.log(data);
    return data;
}

export async function loginUser(user){
    const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    const data = await response.json();
    console.log(data);
    return data;
}

export async function myProfile(token){
    const response = await fetch(`${BASE_URL}/users/me`, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
    }).then(response => response.json())
        .then(result => {
        console.log(result);
    })
    .catch(console.error);
    const data = await response.json();
    console.log(data);
    return data;
}

export async function postsList(user){
const response = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})
.then(response => response.json())
.then(result => {
  console.log(result);
})
.catch(console.error);
const data = await response.json();
console.log(data);
return data;
}