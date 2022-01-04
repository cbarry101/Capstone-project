const myBuildButton = document.getElementById('getBuild')
const myCardItems = document.querySelector('.card-main')
const getBuild = () => {
    axios.get('http://localhost:3000/api/cart')
    .then(res => {
        console.log(res.data)
        res.data.map((item)=>{
            const itemName = document.createElement('h3')
            const cardHolder = document.createElement('div')
            cardHolder.classList.add('card')
            myCardItems.appendChild(cardHolder)
            itemName.innerText = item.name
            cardHolder.appendChild(itemName)
            const price = document.createElement('p')
            price.innerText = item.price
            itemName.appendChild(price)
        })
    })
    .catch(err=>{
        console.log(err)
    })
}





myBuildButton.addEventListener('click',getBuild)