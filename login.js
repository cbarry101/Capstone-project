const register = event => {
    event.preventDefault()
    const userName = document.getElementById('usernameRegister').value
    const passWord = document.getElementById('passwordRegister').value

    axios.post('http://localhost:3000/api/register/', {
        userName,
        passWord
    })
    .then(res=>{
        alert('Sign Up Successful')
    })
    .catch(err => {
        console.log(err)
        alert('Something went wrong')
    })
}




const login = event => {
    event.preventDefault()
    const userName = document.getElementById('loginUsername').value
    const passWord = document.getElementById('loginPassword').value
    
    axios.post('http://localhost:3000/api/users/', {
        userName,
        passWord
    }).then(res => {
        alert(`Welcome, ${userName}`)
    })
    .catch(err => {
        console.log(err)
        alert('Request did not work...')
    })
}

const registerButton = document.getElementById('signUpButton')

registerButton.addEventListener('click', register)

const logInButton = document.getElementById('logInButton')

logInButton.addEventListener('click', login)

