const exhibitionList = document.querySelector(".exhibition-list")
const exhibitionURL = 'http://localhost:3000/exhibitions/37' 
const likeButton = document.querySelector(".like-button")
const exhibitionLikes = document.querySelector(".likes")
const exhibitionTitle = document.querySelector(".title")
const exhibitionImg = document.querySelector(".image")
const exhibitionLength = document.querySelector(".length")
const exhibitionDescription = document.querySelector(".comments")

const exhibitionTwoURL ='http://localhost:3000/exhibitions/38' 
const likeButton2 = document.querySelector(".like-button2")
const exhibitionLikes2 = document.querySelector(".likes2")
const exhibitionTitle2 = document.querySelector(".title2")
const exhibitionLength2 = document.querySelector(".length2")
const exhibitionImg2 = document.querySelector(".image2")
const exhibitionDescription2 = document.querySelector(".comments2")

const exhibitionThreeURL ='http://localhost:3000/exhibitions/39' 
const likeButton3 = document.querySelector(".like-button3")
const exhibitionLikes3 = document.querySelector(".likes3")
const exhibitionTitle3 = document.querySelector(".title3")
const exhibitionLength3 = document.querySelector(".length3")
const exhibitionImg3 = document.querySelector(".image3")
const exhibitionDescription3 = document.querySelector(".comments3")

const exhibitionFourURL ='http://localhost:3000/exhibitions/40' 
const likeButton4 = document.querySelector(".like-button4")
const exhibitionLikes4 = document.querySelector(".likes4")
const exhibitionTitle4 = document.querySelector(".title4")
const exhibitionLength4 = document.querySelector(".length4")
const exhibitionImg4 = document.querySelector(".image4")
const exhibitionDescription4 = document.querySelector(".comments4")

const exhibitionFiveURL ='http://localhost:3000/exhibitions/41' 
const likeButton5 = document.querySelector(".like-button5")
const exhibitionLikes5 = document.querySelector(".likes5")
const exhibitionTitle5 = document.querySelector(".title5")
const exhibitionLength5 = document.querySelector(".length5")
const exhibitionImg5 = document.querySelector(".image5")
const exhibitionDescription5 = document.querySelector(".comments5")

const exhibitionSixURL ='http://localhost:3000/exhibitions/42' 
const likeButton6 = document.querySelector(".like-button6")
const exhibitionLikes6 = document.querySelector(".likes6")
const exhibitionTitle6 = document.querySelector(".title6")
const exhibitionLength6 = document.querySelector(".length6")
const exhibitionImg6 = document.querySelector(".image6")
const exhibitionDescription6 = document.querySelector(".comments6")

const exhibitionSevenURL ='http://localhost:3000/exhibitions/43' 
const likeButton7 = document.querySelector(".like-button7")
const exhibitionLikes7 = document.querySelector(".likes7")
const exhibitionTitle7 = document.querySelector(".title7")
const exhibitionLength7 = document.querySelector(".length7")
const exhibitionImg7 = document.querySelector(".image7")
const exhibitionDescription7 = document.querySelector(".comments7")

const exhibitionEightURL ='http://localhost:3000/exhibitions/44' 
const likeButton8 = document.querySelector(".like-button8")
const exhibitionLikes8 = document.querySelector(".likes8")
const exhibitionTitle8 = document.querySelector(".title8")
const exhibitionLength8 = document.querySelector(".length8")
const exhibitionImg8 = document.querySelector(".image8")
const exhibitionDescription8 = document.querySelector(".comments8")

const exhibitionNineURL ='http://localhost:3000/exhibitions/45' 
const likeButton9 = document.querySelector(".like-button9")
const exhibitionLikes9 = document.querySelector(".likes9")
const exhibitionTitle9 = document.querySelector(".title9")
const exhibitionLength9 = document.querySelector(".length9")
const exhibitionImg9 = document.querySelector(".image9")
const exhibitionDescription9 = document.querySelector(".comments9")

fetch(exhibitionURL)
.then(res => res.json())
.then(exhibition => {
    exhibitionTitle.textContent = exhibition.name
    exhibitionLength.textContent =exhibition.length
    exhibitionImg.src = exhibition.image
    exhibitionDescription.textContent = exhibition.description
    exhibitionLikes.textContent = exhibition.likes
    likeButton.addEventListener("click", () =>{
        likeAmount = parseInt(exhibitionLikes.textContent)+1
        exhibitionLikes.textContent = likeAmount

        fetch(exhibitionURL, {
            method:"PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                likes: likeAmount
            })
        })
    })

})

fetch(exhibitionTwoURL)
.then(res => res.json())
.then(exhibition => {
    exhibitionTitle2.textContent = exhibition.name
    exhibitionLength2.textContent =exhibition.length
    exhibitionImg2.src = exhibition.image
    exhibitionDescription2.textContent = exhibition.description
    exhibitionLikes2.textContent = exhibition.likes
    likeButton2.addEventListener("click", () =>{
        likeAmount2 = parseInt(exhibitionLikes2.textContent)+1
        exhibitionLikes2.textContent = likeAmount2

        fetch(exhibitionTwoURL, {
            method:"PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                likes: likeAmount2
            })
        })
    })
})

fetch(exhibitionThreeURL)
.then(res => res.json())
.then(exhibition => {
    exhibitionTitle3.textContent = exhibition.name
    exhibitionLength3.textContent =exhibition.length
    exhibitionImg3.src = exhibition.image
    exhibitionDescription3.textContent = exhibition.description
    exhibitionLikes3.textContent = exhibition.likes
    likeButton3.addEventListener("click", () =>{
        likeAmount3 = parseInt(exhibitionLikes3.textContent)+1
        exhibitionLikes3.textContent = likeAmount3

        fetch(exhibitionThreeURL, {
            method:"PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                likes: likeAmount3
            })
        })
    })
})

fetch(exhibitionFourURL)
.then(res => res.json())
.then(exhibition => {
    exhibitionTitle4.textContent = exhibition.name
    exhibitionLength4.textContent =exhibition.length
    exhibitionImg4.src = exhibition.image
    exhibitionDescription4.textContent = exhibition.description
    exhibitionLikes4.textContent = exhibition.likes
    likeButton4.addEventListener("click", () =>{
        likeAmount4 = parseInt(exhibitionLikes4.textContent)+1
        exhibitionLikes4.textContent = likeAmount4

        fetch(exhibitionFourURL, {
            method:"PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                likes: likeAmount4
            })
        })
    })
})

fetch(exhibitionFiveURL)
.then(res => res.json())
.then(exhibition => {
    exhibitionTitle5.textContent = exhibition.name
    exhibitionLength5.textContent =exhibition.length
    exhibitionImg5.src = exhibition.image
    exhibitionDescription5.textContent = exhibition.description
    exhibitionLikes5.textContent = exhibition.likes
    likeButton5.addEventListener("click", () =>{
        likeAmount5 = parseInt(exhibitionLikes5.textContent)+1
        exhibitionLikes5.textContent = likeAmount5

        fetch(exhibitionFiveURL, {
            method:"PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                likes: likeAmount5
            })
        })
    })
})

fetch(exhibitionSixURL)
.then(res => res.json())
.then(exhibition => {
    exhibitionTitle6.textContent = exhibition.name
    exhibitionLength6.textContent =exhibition.length
    exhibitionImg6.src = exhibition.image
    exhibitionDescription6.textContent = exhibition.description
    exhibitionLikes6.textContent = exhibition.likes
    likeButton6.addEventListener("click", () =>{
        likeAmount6 = parseInt(exhibitionLikes6.textContent)+1
        exhibitionLikes6.textContent = likeAmount6

        fetch(exhibitionSixURL, {
            method:"PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                likes: likeAmount6
            })
        })
    })
})

fetch(exhibitionSevenURL)
.then(res => res.json())
.then(exhibition => {
    exhibitionTitle7.textContent = exhibition.name
    exhibitionLength7.textContent =exhibition.length
    exhibitionImg7.src = exhibition.image
    exhibitionDescription7.textContent = exhibition.description
    exhibitionLikes7.textContent = exhibition.likes
    likeButton7.addEventListener("click", () =>{
        likeAmount7 = parseInt(exhibitionLikes7.textContent)+1
        exhibitionLikes7.textContent = likeAmount7

        fetch(exhibitionSevenURL, {
            method:"PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                likes: likeAmount7
            })
        })
    })
})

fetch(exhibitionEightURL)
.then(res => res.json())
.then(exhibition => {
    exhibitionTitle8.textContent = exhibition.name
    exhibitionLength8.textContent =exhibition.length
    exhibitionImg8.src = exhibition.image
    exhibitionDescription8.textContent = exhibition.description
    exhibitionLikes8.textContent = exhibition.likes
    likeButton8.addEventListener("click", () =>{
        likeAmount8 = parseInt(exhibitionLikes8.textContent)+1
        exhibitionLikes8.textContent = likeAmount8

        fetch(exhibitionEightURL, {
            method:"PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                likes: likeAmount8
            })
        })
    })
})

fetch(exhibitionNineURL)
.then(res => res.json())
.then(exhibition => {
    exhibitionTitle9.textContent = exhibition.name
    exhibitionLength9.textContent =exhibition.length
    exhibitionImg9.src = exhibition.image
    exhibitionDescription9.textContent = exhibition.description
    exhibitionLikes9.textContent = exhibition.likes
    likeButton9.addEventListener("click", () =>{
        likeAmount9 = parseInt(exhibitionLikes9.textContent)+1
        exhibitionLikes9.textContent = likeAmount9

        fetch(exhibitionNineURL, {
            method:"PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                likes: likeAmount9
            })
        })
    })
})

        
        
        
    
        
        
        
        
