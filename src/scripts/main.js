import { bookingOutput } from "./bookings.js";
import { bandsOutput } from "./bands.js";

const mainContainer = document.querySelector("#container")
let bookingHTML = bookingOutput()
let bandsHTML = bandsOutput()


let fullHTML = `
<h1>Tour Some Sugar on Me</h1>
<article class="bookings">
    ${bookingHTML}
</article>
<article class="bands">${bandsHTML}</article>
`

mainContainer.innerHTML = fullHTML