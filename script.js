 
  

const laptopImg = function(){
fetch("http://www.splashbase.co/api/v1/images/search?query=laptop" )
.then((response) => response.json())
.then((laptop) => {
    console.log(laptop);
    let cardImage = document.querySelectorAll('.card img')
    let smallString = document.querySelectorAll('.card small')
    let viewButton = document.querySelectorAll('.card button:first-of-type')
    let modalBody = document.querySelector('.modal-body')
    console.log(cardImage[0]);
    for(let i=0; i<cardImage.length; i++){
        let id = laptop.images[i].id
        cardImage[i].classList.add('img-fluig')
        cardImage[i].src = laptop.images[i].url
        viewButton[i].setAttribute("data-toggle","modal")
        viewButton[i].setAttribute("data-target", "#exampleModal")
        viewButton[i].setAttribute("id", `${i}`) 
        let modalImg = document.createElement('img')
        modalImg.classList.add('img-fluid')
        let currentImg = laptop.images.filter((laptop_image)=> laptop_image.id === id)[0]
        currentImg = currentImg.url
        console.log(currentImg)
        modalImg.src = currentImg
        modalBody.appendChild(modalImg)
        smallString[i].innerText = laptop.images[i].id
    }
})
.catch(err => {
    console.error(err);
})

}

const flowerImg = function(){
    fetch("http://www.splashbase.co/api/v1/images/search?query=flower" )
    .then((response) => response.json())
    .then((flower) => {
        console.log(flower);
        let cardImage = document.querySelectorAll('.card img')
        let smallString = document.querySelectorAll('.card small')
        let viewButton = document.querySelectorAll('.card button:first-of-type')
    
        let modalBody = document.querySelector('.modal-body')
        console.log(viewButton[0]);
           for(let i=0; i<cardImage.length; i++){
            let id = flower.images[i].id
            
            //console.log("id ", card_id)
             cardImage[i].classList.add('img-fluig')
             cardImage[i].src = flower.images[i].url
             viewButton[i].setAttribute("data-toggle","modal")
             viewButton[i].setAttribute("data-target", "#exampleModal")
             viewButton[i].setAttribute("id", `${i}`)       
             let modalImg = document.createElement('img')
             modalImg.classList.add('img-fluid')
             let currentImg = flower.images.filter((flower_image)=> flower_image.id === id)[0]
             currentImg = currentImg.url
             console.log(currentImg)
             modalImg.src = currentImg
             modalBody.appendChild(modalImg)
             smallString[i].innerText = flower.images[i].id 
             
             
    }
    })
    .catch(err => {
        console.error(err);
    })
}



window.onload = function(){

  
   
}



