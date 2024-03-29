// The Skeleton of the show container, event dates and location

const section = document.querySelector('.shows')
const showsLink = document.querySelectorAll('.shows__content')
const showsHeaderBox = document.querySelector('.shows__headerBox')


const API_URL = "https://project-1-api.herokuapp.com/showdates"
const API_KEY = "6f964ab1-8dc4-461d-b82a-fa87241c5278"


const url = API_URL + `?api_key=${API_KEY}`

function getShows(){

axios.get(url)
        .then((response) => {

                const showsEl = response.data

                showsEl.forEach((ele) => {
                    showEvents (ele)
                })
            })
        .finally(() => {
            showsLinkEl();
        });
            
}

getShows()


function showsLinkEl (){
    const showsLinkElement = document.querySelectorAll('.shows__content')
    const showsEventHoverLink = document.querySelectorAll('.shows__event')
    showsLinkElement.forEach(event =>{
        event.addEventListener('click', function(){
            showsLinkElement.forEach(e =>{
                e.setAttribute('shows-active', 'false')
            })
           this.setAttribute('shows-active', 'true')
           showsEventHoverLink.classList.remove('shows__event--link')
        });
      })
}
// showsLink.forEach(ele => {
//     ele.addEventListener('click', () => {
//         showsLink.forEach(element => element.classList.remove("shows__content--selected"));
//         this.classList.add('shows__content--selected')
//         })
//     })

// window.addEventListener('click', (event) => {
//     if (event.target.closest('.shows__content'))
//     return 
    
//     showsLink.forEach(element => element.classList.remove("shows__content--selected"))

// })


/////////////// subtitles on desktop view  ///////////////

        const sectionContainer = document.createElement('div')
        sectionContainer.classList.add('shows__titleContainer')
        showsHeaderBox.appendChild(sectionContainer)

        const showsTitleDate = document.createElement('h2')
        showsTitleDate.classList.add('shows__title')
        showsTitleDate.innerText = "DATE";
        sectionContainer.appendChild(showsTitleDate)

        const showsTitleVenue = document.createElement('h2')
        showsTitleVenue.classList.add('shows__title')
        showsTitleVenue.innerText = "VENUE";
        sectionContainer.appendChild(showsTitleVenue)

        const showsTitleLocation = document.createElement('h2')
        showsTitleLocation.classList.add('shows__title')
        showsTitleLocation.innerText = "LOCATION";
        sectionContainer.appendChild(showsTitleLocation)


/////////////// subtitles on tablet view  ///////////////
        const showsContainerTab = document.createElement('div')
        showsContainerTab.classList.add('shows__containerTab')
        section.appendChild(showsContainerTab)

        const showsTitleDateTab = document.createElement('h2')
        showsTitleDateTab.classList.add('shows__titleTab')
        showsTitleDateTab.innerText = "DATE";
        showsContainerTab.appendChild(showsTitleDateTab)

        const showsTitleVenueTab = document.createElement('h2')
        showsTitleVenueTab.classList.add('shows__titleTab')
        showsTitleVenueTab.innerText = "VENUE";
        showsContainerTab.appendChild(showsTitleVenueTab)

        const showsTitleLocationTab = document.createElement('h2')
        showsTitleLocationTab.classList.add('shows__titleTab')
        showsTitleLocationTab.innerText = "LOCATION";
        showsContainerTab.appendChild(showsTitleLocationTab)
        



function showEvents (ele){
    
    const showsContentEl = document.createElement('div')
    showsContentEl.classList.add('shows__content')
    showsContentEl.setAttribute('shows-active', 'false')
    section.appendChild(showsContentEl)

    const showsContainerEl = document.createElement('div')
    showsContainerEl.classList.add('shows__container')
    showsContentEl.appendChild(showsContainerEl)

    //create Shows Events inside parent (Shows Container)
    const showsEventEl = document.createElement('div')
    showsEventEl.classList.add('shows__event')
    showsEventEl.classList.add('shows__event--link')
    showsContainerEl.appendChild(showsEventEl)

    //create Shows Box inside parent (Shows Event)
    const showsBoxEl = document.createElement('div')
    showsBoxEl.classList.add('shows__box')
    showsEventEl.appendChild(showsBoxEl)

    //create Shows Subtitle inside parent (Shows Box)
    const showsSubtitleEl = document.createElement('h4')
    showsSubtitleEl.classList.add('shows__subtitle')
    showsSubtitleEl.innerText = "DATE";
    showsBoxEl.appendChild(showsSubtitleEl)

    //create Shows Details inside parent (Shows Box)
    const showsDateDetailsEl = document.createElement('p')
    showsDateDetailsEl.classList.add('shows__details')
    showsDateDetailsEl.classList.add('shows__details--date')
    const formattedDate = new Date(ele.date);
    const eventDate = formattedDate.toDateString()
    showsDateDetailsEl.innerText = eventDate;
    showsBoxEl.appendChild(showsDateDetailsEl)

    const showsBoxesEl = document.createElement('div')
    showsBoxesEl.classList.add('shows__box')
    showsEventEl.appendChild(showsBoxesEl)
    
    //create Shows Subtitle inside parent (Shows Box)
    const showsVenueEl = document.createElement('h4')
    showsVenueEl.classList.add('shows__subtitle')
    showsVenueEl.innerText = "VENUE";
    showsBoxesEl.appendChild(showsVenueEl)

    //create Shows Details inside parent (Shows Box)
    const showsVenueDetailsEl = document.createElement('p')
    showsVenueDetailsEl.classList.add('shows__details')
    showsVenueDetailsEl.innerText = ele.place;
    showsBoxesEl.appendChild(showsVenueDetailsEl)

    const showBoxesEl = document.createElement('div')
    showBoxesEl.classList.add('shows__box')
    showsEventEl.appendChild(showBoxesEl)

    //create Shows Subtitle inside parent (Shows Box)
    const showsLocationEl = document.createElement('h4')
    showsLocationEl.classList.add('shows__subtitle')
    showsLocationEl.innerText = "LOCATION";
    showBoxesEl.appendChild(showsLocationEl)

    //create Shows Details inside parent (Shows Box)
    const showsLocationDetailsEl = document.createElement('p')
    showsLocationDetailsEl.classList.add('shows__details')
    showsLocationDetailsEl.innerText = ele.location;
    showBoxesEl.appendChild(showsLocationDetailsEl)

    //create Shows Button box inside parent (Show Box)
    const showsButtonEl = document.createElement('a')
    showsButtonEl.classList.add('shows__button')
    showsEventEl.appendChild(showsButtonEl)

    //create Shows Button Link inside parent (Shows Button)
    const showsButtonLinkEl = document.createElement('p')
    showsButtonLinkEl.classList.add('shows__text')
    showsButtonLinkEl.innerText = "BUY TICKETS"
    showsButtonEl.appendChild(showsButtonLinkEl)

}
       