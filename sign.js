const eventList = document.querySelector(".event-list")
const eventURL = 'http://localhost:3000/events/1' 
const likeButton = document.querySelector(".like-button")
const eventLikes = document.querySelector(".likes")
const eventTitle = document.querySelector(".title")
const eventImg = document.querySelector(".image")
const eventLength = document.querySelector(".length")
const eventDescription = document.querySelector(".comments")

const eventTwoURL ='http://localhost:3000/events/2' 
const likeButton2 = document.querySelector(".like-button2")
const eventLikes2 = document.querySelector(".likes2")
const eventTitle2 = document.querySelector(".title2")
const eventLength2 = document.querySelector(".length2")
const eventImg2 = document.querySelector(".image2")
const eventDescription2 = document.querySelector(".comments2")

const eventThreeURL ='http://localhost:3000/events/3' 
const likeButton3 = document.querySelector(".like-button3")
const eventLikes3 = document.querySelector(".likes3")
const eventTitle3 = document.querySelector(".title3")
const eventLength3 = document.querySelector(".length3")
const eventImg3 = document.querySelector(".image3")
const eventDescription3 = document.querySelector(".comments3")

const eventFourURL ='http://localhost:3000/events/4' 
const likeButton4 = document.querySelector(".like-button4")
const eventLikes4 = document.querySelector(".likes4")
const eventTitle4 = document.querySelector(".title4")
const eventLength4 = document.querySelector(".length4")
const eventImg4 = document.querySelector(".image4")
const eventDescription4 = document.querySelector(".comments4")

const eventFiveURL ='http://localhost:3000/events/5' 
const likeButton5 = document.querySelector(".like-button5")
const eventLikes5 = document.querySelector(".likes5")
const eventTitle5 = document.querySelector(".title5")
const eventLength5 = document.querySelector(".length5")
const eventImg5 = document.querySelector(".image5")
const eventDescription5 = document.querySelector(".comments5")

const eventSixURL ='http://localhost:3000/events/6' 
const likeButton6 = document.querySelector(".like-button6")
const eventLikes6 = document.querySelector(".likes6")
const eventTitle6 = document.querySelector(".title6")
const eventLength6 = document.querySelector(".length6")
const eventImg6 = document.querySelector(".image6")
const eventDescription6 = document.querySelector(".comments6")

fetch(eventURL)
.then(res => res.json())
.then(event => {
    eventTitle.textContent = event.name
    eventLength.textContent =event.length
    // eventImg.src = event.image
    // eventDescription.textContent = event.description
    eventLikes.textContent = event.likes
    likeButton.addEventListener("click", () =>{
        likeAmount = parseInt(eventLikes.textContent)+1
        eventLikes.textContent = likeAmount

        fetch(eventURL, {
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
fetch(eventTwoURL)
.then(res => res.json())
.then(event => {
    eventTitle2.textContent = event.name
    eventLength2.textContent =event.length
    // eventImg2.src = event.image
    eventDescription2.textContent = event.description
    eventLikes2.textContent = event.likes
    likeButton2.addEventListener("click", () =>{
        likeAmount2 = parseInt(eventLikes2.textContent)+1
        eventLikes2.textContent = likeAmount2

        fetch(eventTwoURL, {
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
fetch(eventThreeURL)
.then(res => res.json())
.then(event => {
    eventTitle3.textContent = event.name
    eventLength3.textContent =event.length
    eventImg3.src = event.image
    eventDescription3.textContent = event.description
    eventLikes3.textContent = event.likes
    likeButton3.addEventListener("click", () =>{
        likeAmount3 = parseInt(eventLikes3.textContent)+1
        eventLikes3.textContent = likeAmount3

        fetch(eventThreeURL, {
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
fetch(eventFourURL)
.then(res => res.json())
.then(event => {
    eventTitle4.textContent = event.name
    eventLength4.textContent =event.length
    eventImg4.src = event.image
    eventDescription4.textContent = event.description
    eventLikes4.textContent = event.likes
    likeButton4.addEventListener("click", () =>{
        likeAmount4 = parseInt(eventLikes4.textContent)+1
        eventLikes4.textContent = likeAmount4

        fetch(eventFourURL, {
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
fetch(eventFiveURL)
.then(res => res.json())
.then(event => {
    eventTitle5.textContent = event.name
    eventLength5.textContent =event.length
    // eventImg5.src = event.image
    eventDescription5.textContent = event.description
    eventLikes5.textContent = event.likes
    likeButton5.addEventListener("click", () =>{
        likeAmount5 = parseInt(eventLikes5.textContent)+1
        eventLikes5.textContent = likeAmount5

        fetch(eventFiveURL, {
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
fetch(eventSixURL)
.then(res => res.json())
.then(event => {
    eventTitle6.textContent = event.name
    eventLength6.textContent =event.length
    eventImg6.src = event.image
    eventDescription6.textContent = event.description
    eventLikes6.textContent = event.likes
    likeButton6.addEventListener("click", () =>{
        likeAmount6 = parseInt(eventLikes6.textContent)+1
        eventLikes6.textContent = likeAmount6

        fetch(eventSixURL, {
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