import { getBookings, getBands, getVenues } from "./database.js";

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()

export const bookingOutput = () => {
    let html = `<ul>`;

    for (const booking of bookings) {
        for (const band of bands) {
            for (const venue of venues) {
                if (booking.bandId === band.id && booking.venueId === venue.id) {
                    html += `<li data-type="booking" data-bandid="${booking.bandId}"> ${band.name} are playing at ${venue.name} on ${booking.date}`
                }
            }
        }
    }
    html += `</ul>`
    return html
};

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    let bandId = itemClicked.dataset.bandid;
    if (itemClicked.dataset.type === "booking") {
        for (const band of bands) {
            if (parseInt(bandId) === band.id){
                window.alert(`${band.name}\n${band.genre}\nFormed in ${band.formed}\n${band.members} band members`)
            }
        }
    }
});