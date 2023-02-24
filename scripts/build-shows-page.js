// shows data added into an array
const showsData = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tues Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021 ",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    }
]

// The Skeleton of the show container, event dates and location

const section = document.querySelector('.shows')

        const sectionContainer = document.createElement('div')
        sectionContainer.classList.add('shows__titleContainer')
        section.appendChild(sectionContainer)

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


// iterate through a for loop and log data with index [i]
    for(let i =0; i< showsData.length; i++) {
        const events = showsData[i]
        console.log(events)

        const showsContentEl = document.createElement('div')
        showsContentEl.classList.add('shows__content')
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
        showsDateDetailsEl.innerText = events.date;
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
        showsVenueDetailsEl.innerText = events.venue;
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
        showsLocationDetailsEl.innerText = events.location;
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

    