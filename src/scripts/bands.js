import { getBands, getVenues, getBookings } from "./database.js";

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()

export const bandsOutput = () => {
    let html = `<ul style="column-count:2;">`
    for (const band of bands) {
        html += `<li data-type="band" data-id="${band.id}" data-name="${band.name}" class="band">${band.name}</li>`
    }
    html += `</ul>`
    return html
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    let venuesPlayed = []
    const bandId = itemClicked.dataset.id
    let alertMessage = `${itemClicked.dataset.name} is playing at:\n`
    if (itemClicked.dataset.type === "band") {
    for (const booking of bookings) {
        if (parseInt(bandId) === booking.bandId) {
            for (const venue of venues) {
                if (booking.venueId === venue.id){
                    venuesPlayed.push(venue.name)
                }
            }
        }
    }
    if (venuesPlayed.length === 0) {
        window.alert(`${itemClicked.dataset.name} isn't playing anywhere!`)
    } else {
        alertMessage += venuesPlayed.join(`\n`);
    }
window.alert(alertMessage)

}})