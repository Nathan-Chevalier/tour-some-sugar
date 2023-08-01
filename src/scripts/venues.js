import { getVenues } from "./database.js";

const venues = getVenues()

export const venuesOutput = () => {
    let html = `<ul>`
    for (const venue of venues) {
        html += `<li data-type="venue">${venue.name}</li>`
    }
    html += `</ul>`
    return html
}
