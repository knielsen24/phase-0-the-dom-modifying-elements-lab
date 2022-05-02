// Write your code here!
const removeMain = () => {
    const main = document.querySelector('#main')
    main.remove()
}

removeMain()

// const newHeader = () => {
//     const h1Victory = document.createElement('h1')
//     return h1Victory.setAttribute('id', 'victory')
// }

// newHeader()

const newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory');

newHeader.innerHTML = "<h1> is the champion</h1>"