// const h1 = document.getElementsByID('page_title')

// //const h1 = document.querySelector('h1')
// console.log(h1)
// h1.style.color = 'maroon'

// The code below grabs the first p -- it reads top to bottom
// const p1 = document.querySelector('p')
// console.log(p1)

// p1.innerHTML = "very important things written here"

// p1.textContent = "text content"

const ol = document.querySelector('ol')
// const li = document.createElement('li')

// li.textContent = "This is the first list item"
// li.style.color = 'maroon'

// ol.appendChild(li)

// LOOP HERE

// for(let i = 0; i < 5; i++)
// {
//     const li = document.createElement('li')

//     li.textContent = i

//     ol.appendChild(li)
// }
    

// console.log(ol)

for (let i = 0; i < 5; i++) {
    const li = document.createElement('li')

    li.textContent = i

    ol.appendChild(li)
 }

console.log(ol)
