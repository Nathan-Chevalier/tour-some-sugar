import { bookingOutput } from "./bookings.js";
import { bandsOutput } from "./bands.js";
import { venuesOutput } from "./venues.js";

const mainContainer = document.querySelector("#container")
let bookingHTML = bookingOutput()
let bandsHTML = bandsOutput()
let venuesHTML = venuesOutput()


let fullHTML = `
<h1>Tour Some Sugar on Me</h1>
<div class="bigbox">
    <div class="bigbox__single">
        <h2>Our Current Bookings</h2>
        <article class="bookings">
            ${bookingHTML}
        </article>
    </div>
    <div class="bigbox__twin">
        <article class="venues"><h2>Our Venues</h2>
            ${venuesHTML}
        </article>
        <article class="bands"><h2>Our Bands</h2>
            ${bandsHTML}
        </article>
    </div>
</div>
`

mainContainer.innerHTML = fullHTML