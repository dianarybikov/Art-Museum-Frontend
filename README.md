
# SONDER
> Come to the art Muesum and see exhibitions and events!

## Table of contents
* [General info](#general-info)
* [Intro Video](#intro-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)
* [License](#license)

## General info
Sonder is a full stack website. The fontend is in JavaScript and the backend is in Rails. In Sonder there is member info, visit info, exhibitions, and events. In the exhibitions and events page there is a like button
that allows you to like the exhibit or events if you have been, that way future vistors can decide if they want to go.  

## Intro Video
[Sonder on YouTube]("coming soon")

## Technologies
* Ruby - version 2.6.5
* Rails - version 6.1.3
* JavaScript
* HTML & CSS


## Setup
To run this project, install it locally by cloning the GitHub repository and typing:
```JavaScript
 lite-server
```

## Code Examples
```rails 
    def show
        @exhibition = Exhibition.find(params[:id])
        render json: @exhibition
    end

    def update
        @exhibition = Exhibition.find(params[:id])
        @exhibition.update(likes: params[:likes])
        render json: @exhibition
    end    
```

```javascript
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

```


## Features
* Browse Visit Info
* Visit Info in a graph with price info
* See exhibit info
* See event info
* Ability to like events and exhibits



To-do list:
* Refactor exhibit and event code
* Add ability to to register for a membership
* Redesign website


## Status
Project is: finished with option to expand functionality

## Inspiration
The inspiration for Sonder came from my passion for art. I wanted to see how and if I would be able to bulid out a website for an art mueseum 

## Contact
Created by [Diana Rybikov](https://www.linkedin.com/in/diana-rybikov-465018202/)



