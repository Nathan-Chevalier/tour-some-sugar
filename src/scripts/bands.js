import { getBands } from "./database.js";

const bands = getBands()

export const bandsOutput = () => {
    let html = `<ul>`
    for (const band of bands) {
        html += `<li data-type="band">${band.name}</li>`
    }
    html += `</ul>`
    return html
}