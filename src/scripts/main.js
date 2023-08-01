import { bookingOutput } from "./bookings.js";

const mainContainer = document.querySelector("#container")
let bookingHTML = bookingOutput()


let fullHTML = `
<h1>Tour Some Sugar on Me</h1>
<article class="bookings">
    ${bookingHTML}
</article>
`

mainContainer.innerHTML = fullHTML