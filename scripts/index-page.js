

const formEl = document.querySelector('.form')
const commentEl = document.querySelector('.comments')
const errorEl = document.querySelector('.comments__text--error')

//Add API KEY and API URL

const API_URL = "https://project-1-api.herokuapp.com/comments"
const API_KEY = "6f964ab1-8dc4-461d-b82a-fa87241c5278"


const url = API_URL + `?api_key=${API_KEY}`

function getComments(){

axios
.get(url)
.then((response) => {
    clearContainer()

    const dataEl = response.data.sort((a,b) => {
        return b.timestamp - a.timestamp
    })

    dataEl.forEach((commentItems) =>{
        renderComments(commentItems)
        })
    })

}

getComments()

function clearContainer() {
    commentEl.innerHTML = "";
  }




formEl.addEventListener('submit', (event) => {
    
    event.preventDefault()

    const name = event.target.name.value;
    const comments = event.target.comments.value;
    // const dates = new Date();
    // const today = dates.getDate()  + '/' + (dates.getMonth() + 1) + '/' + dates.getFullYear()



    if (event.target.name.value === '' || event.target.comments.value === ''){
        const nameInput = document.querySelector('.form__text')
        const commentsInput = document.querySelector('.form__message')

        nameInput.classList.add('form__error')
        commentsInput.classList.add('form__error')

        event.target.reset()
        return
    }

    axios
        .post(`${API_URL}?api_key=${API_KEY}`, {
            name: name,
            comment: comments
        })
        .then((response) => {
            getComments()})
        .catch(error => console.log(error))


    event.target.reset()

})


function renderComments (commentItems) {
    

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
        const formattedDate = new Date(commentItems.timestamp);
        const finalDate = (formattedDate.getMonth() + 1) + '/' + formattedDate.getDate()  + '/' + formattedDate.getFullYear();
        dateEl.innerText = finalDate
        commentsHeaderEl.appendChild(dateEl)

        const textEl = document.createElement('p')
        textEl.classList.add('comments__text')
        textEl.innerText = commentItems.comment
        commentsBoxEl.appendChild(textEl)

   

}

