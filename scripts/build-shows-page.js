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

// iterate through a for loop and log data with index [i]
    for(let i =0; i< showsData.length; i++) {
        const events = showsData[i]
        console.log(events)

        const showsContainerEl = document.createElement('div')
        showsContainerEl.classList.add('shows__container')
        section.appendChild(showsContainerEl)

        //create Shows Events inside parent (Shows Container)
        const showsEventEl = document.createElement('div')
        showsEventEl.classList.add('shows__event')
        showsContainerEl.appendChild(showsEventEl)

        //create Shows Box inside parent (Shows Event)
        const showsBoxEl = document.createElement('div')
        showsBoxEl.classList.add('shows__box')
        showsEventEl.appendChild(showsBoxEl)

        //create Shows Subtitle inside parent (Shows Box)
        const showsSubtitleEl = document.createElement('p')
        showsSubtitleEl.classList.add('shows__subtitle')
        showsSubtitleEl.innerText = "DATE";
        showsBoxEl.appendChild(showsSubtitleEl)

        //create Shows Details inside parent (Shows Box)
        const showsDateDetailsEl = document.createElement('p')
        showsDateDetailsEl.classList.add('shows__details')
        showsDateDetailsEl.innerText = events.date;
        showsBoxEl.appendChild(showsDateDetailsEl)

        //create Shows Subtitle inside parent (Shows Box)
        const showsVenueEl = document.createElement('p')
        showsVenueEl.classList.add('shows__subtitle')
        showsVenueEl.innerText = "VENUE";
        showsBoxEl.appendChild(showsVenueEl)

        //create Shows Details inside parent (Shows Box)
        const showsVenueDetailsEl = document.createElement('p')
        showsVenueDetailsEl.classList.add('shows__details')
        showsVenueDetailsEl.innerText = events.venue;
        showsBoxEl.appendChild(showsVenueDetailsEl)

        //create Shows Subtitle inside parent (Shows Box)
        const showsLocationEl = document.createElement('p')
        showsLocationEl.classList.add('shows__subtitle')
        showsLocationEl.innerText = "LOCATION";
        showsBoxEl.appendChild(showsLocationEl)

        //create Shows Details inside parent (Shows Box)
        const showsLocationDetailsEl = document.createElement('p')
        showsLocationDetailsEl.classList.add('shows__details')
        showsLocationDetailsEl.innerText = events.location;
        showsBoxEl.appendChild(showsLocationDetailsEl)

        //create Shows Button box inside parent (Show Box)
        const showsButtonEl = document.createElement('div')
        showsButtonEl.classList.add('shows__button')
        showsEventEl.appendChild(showsButtonEl)

        //create Shows Button Link inside parent (Shows Button)
        const showsButtonLinkEl = document.createElement('a')
        showsButtonLinkEl.classList.add('shows__button--link')
        showsButtonLinkEl.innerText = "GET TICKET"
        showsButtonEl.appendChild(showsButtonLinkEl)
    }
