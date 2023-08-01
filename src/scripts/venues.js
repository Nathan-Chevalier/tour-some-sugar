import { getVenues, getBands, getBookings } from "./database.js";

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

export const venuesOutput = () => {
    let html = `<ul>`
    for (const venue of venues) {
        html += `<li data-type="venue" data-id="${venue.id}" data-name="${venue.name}" class="venue">${venue.name}</li>`
    }
    html += `</ul>`
    return html
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    let bandsPlaying = []
    const venueId = itemClicked.dataset.id
    let alertMessage = `${itemClicked.dataset.name} is hosting:\n`
    if (itemClicked.dataset.type === "venue") {
        for (const booking of bookings) {
            if (parseInt(venueId) === booking.venueId){
                for (const band of bands) {
                    if (band.id === booking.bandId) {
                        bandsPlaying.push(band.name)
                    }
                }
            }
            }
        if (bandsPlaying.length === 0) {
            window.alert(`Nobody is playing at ${itemClicked.dataset.name}`)
        } else {
            alertMessage += bandsPlaying.join(`\n`)
        }
    window.alert(alertMessage);
        }
    }
)
