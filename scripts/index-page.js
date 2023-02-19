const commentsList = [
    {
        name: "Connor Walton",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        date: "02/17/2021"

    },
    {
        name: "Emilie Beach",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        date: "01/09/2020"
    },
    {
        name: "Miles Acosta",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        date: "12/20/2020"
    }

]


const formEl = document.querySelector('.form')
const commentEl = document.querySelector('.comments')


formEl.addEventListener('submit', (event) => {
    
    event.preventDefault()

    const name = event.target.name.value;
    const comments = event.target.comments.value;
    const dates = new Date();
    const today = dates.getDate()  + '/' + (dates.getMonth() + 1) + '/' + dates.getFullYear()



    commentsList.unshift({
        name: name,
        comment: comments, 
        date: today
    });

    renderComments()

    event.target.reset()

})


function renderComments () {
    
    commentEl.innerHTML = '';

    for (let i = 0; i < commentsList.length; i++){
        const commentItems = commentsList[i]

        const commentsContainerEl = document.createElement('div')
        commentsContainerEl.classList.add('comments__container')
        commentEl.appendChild(commentsContainerEl)

        const commentsBoxEl = document.createElement('div')
        commentsBoxEl.classList.add('comments__box')
        commentsContainerEl.appendChild(commentsBoxEl)

        const avatarEl = document.createElement('div')
        avatarEl.classList.add('comments__avatar')
        commentsBoxEl.appendChild(avatarEl)

        const commentsHeaderEl = document.createElement('div')
        commentsHeaderEl.classList.add('comments__header')
        commentsBoxEl.appendChild(commentsHeaderEl)

        const nameEl = document.createElement('h3')
        nameEl.classList.add('comments__title')
        nameEl.innerText = commentItems.name
        commentsHeaderEl.appendChild(nameEl)

        const dateEl = document.createElement('p')
        dateEl.classList.add('comments__date')
        dateEl.innerText = commentItems.date
        commentsHeaderEl.appendChild(dateEl)

        const textEl = document.createElement('p')
        textEl.classList.add('comments__text')
        textEl.innerText = commentItems.comment
        commentsBoxEl.appendChild(textEl)

    } 

}

renderComments()








