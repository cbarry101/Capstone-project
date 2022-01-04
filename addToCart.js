const thirtyEightyButton = document.getElementById('3080Button') 
const thirtySeventyTIButton = document.getElementById('3070TIButton')
const thirtyNinetyButton = document.getElementById('3090Button')
const tenEightyButton = document.getElementById('1080Button')
const thirtySixtyTIButton = document.getElementById('3060TIButton')
const twentySeventySuperButton = document.getElementById('2070SuperButton')


const thirtyEightyObject = {
name: 'RTX3080',
price: 1000
}

const thirtySeventyTIObject = {
name: 'RTX 3070 TI',
price: 900
}

const thirtyNinetyObject = {
    name: 'RTX 3090',
    price: 1600
}
const tenEightyObject = {
    name:'GTX 1080',
    price: 300
}
const thirtySixtyTIObject = {
    name: 'RTX 3060 TI',
    price: 800
}
const twentySeventySuperObject = {
    name: 'RTX 2070 SUPER',
    price: 600
}


const addToCart = event => {
    let body 
    if (event.target.id === '3080Button'){
        body = thirtyEightyObject
    }else if (event.target.id === '3070TIButton'){
        body = thirtySeventyTIObject
    }else if (event.target.id === '3090Button'){
        body = thirtyNinetyObject
    }else if (event.target.id === '1080Button'){
        body = tenEightyObject
    }else if (event.target.id === '3060TIButton'){
        body = thirtySixtyTIObject
    }else if (event.target.id === '2070SuperButton'){
        body = twentySeventySuperObject
    }
    console.log(body)
    axios.post('http://localhost:3000/api/cart', body)
    .then(res => {
        console.log(res.data)
        alert(`${body.name} was added to cart`)
    })
}


thirtyEightyButton.addEventListener('click',addToCart)
thirtySeventyTIButton.addEventListener('click', addToCart)
thirtyNinetyButton.addEventListener('click', addToCart)
tenEightyButton.addEventListener('click', addToCart)
thirtySixtyTIButton.addEventListener('click', addToCart)
twentySeventySuperButton.addEventListener('click', addToCart)

