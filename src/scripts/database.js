const database = {
    band: [
  { id: 1, name: "The Cure", members: 4, genre: "Alternative Rock", formed: 1976 },
  { id: 2, name: "Depeche Mode", members: 3, genre: "Synthpop", formed: 1980 },
  { id: 3, name: "New Order", members: 3, genre: "Alternative Dance", formed: 1980 },
  { id: 4, name: "Duran Duran", members: 5, genre: "New Wave", formed: 1978 },
  { id: 5, name: "Tears for Fears", members: 2, genre: "New Wave", formed: 1981 },
  { id: 6, name: "The Smiths", members: 4, genre: "Indie Rock", formed: 1982 },
  { id: 7, name: "Bananarama", members: 3, genre: "Pop", formed: 1981 },
  { id: 8, name: "Pet Shop Boys", members: 2, genre: "Synthpop", formed: 1981 },
  { id: 9, name: "A-ha", members: 3, genre: "Synthpop", formed: 1982 },
  { id: 10, name: "Culture Club", members: 4, genre: "New Wave", formed: 1981 },
  { id: 11, name: "Spandau Ballet", members: 5, genre: "New Wave", formed: 1979 },
  { id: 12, name: "Talk Talk", members: 4, genre: "Synthpop", formed: 1981 }
],
    venue: [
  {
    id: 1,
    name: "The Basement",
    address: "1604 8th Ave S, Nashville, TN 37203",
    sqfoot: 1200,
    occupancy: 100
  },
  {
    id: 2,
    name: "The 5 Spot",
    address: "1006 Forrest Ave, Nashville, TN 37206",
    sqfoot: 1500,
    occupancy: 125
  },
  {
    id: 3,
    name: "The Basement East",
    address: "917 Woodland St., Nashville, TN 37206",
    sqfoot: 1100,
    occupancy: 120
  },
  {
    id: 4, 
    name: "Exit/In",
    address: "2208 Elliston Pl, Nashville, TN 37203",
    sqfoot: 1800,
    occupancy: 150
  },
  {
    id: 5,
    name: "The East Room",
    address: "2412 Gallatin Ave, Nashville, TN 37206",
    sqfoot: 900,
    occupancy: 75
  },
  {
    id: 6,
    name: "The End",
    address: "2219 Elliston Pl, Nashville, TN 37203",
    sqfoot: 800,
    occupancy: 80
  }
],
    booking:[
        {
          "id": 1,
          "bandId": 12,
          "venueId": 5,
          "date": "2023-08-06"
        },
        {
          "id": 2,
          "bandId": 8,
          "venueId": 2,
          "date": "2023-08-17"
        },
        {
          "id": 3,
          "bandId": 2,
          "venueId": 6,
          "date": "2023-08-25"
        },
        {
          "id": 4,
          "bandId": 3,
          "venueId": 4,
          "date": "2023-09-03"
        },
        {
          "id": 5,
          "bandId": 3,
          "venueId": 5,
          "date": "2023-09-08"
        },
        {
          "id": 6,
          "bandId": 4,
          "venueId": 3,
          "date": "2023-09-09"
        },
        {
          "id": 7,
          "bandId": 4,
          "venueId": 6,
          "date": "2023-09-11"
        },
        {
          "id": 8,
          "bandId": 5,
          "venueId": 5,
          "date": "2023-09-13"
        },
        {
          "id": 9,
          "bandId": 2,
          "venueId": 1,
          "date": "2023-09-15"
        },
        {
          "id": 10,
          "bandId": 1,
          "venueId": 6,
          "date": "2023-09-20"
        },
        {
          "id": 11,
          "bandId": 7,
          "venueId": 3,
          "date": "2023-09-21"
        },
        {
          "id": 12,
          "bandId": 12,
          "venueId": 1,
          "date": "2023-09-25"
        },
        {
          "id": 13,
          "bandId": 11,
          "venueId": 3,
          "date": "2023-09-29"
        },
        {
          "id": 14,
          "bandId": 5,
          "venueId": 1,
          "date": "2023-10-02"
        },
        {
          "id": 15,
          "bandId": 6,
          "venueId": 4,
          "date": "2023-10-03"
        },
        {
          "id": 16,
          "bandId": 1,
          "venueId": 2,
          "date": "2023-10-16"
        },
        {
          "id": 17,
          "bandId": 11,
          "venueId": 4,
          "date": "2023-10-18"
        },
        {
          "id": 18,
          "bandId": 10,
          "venueId": 2,
          "date": "2023-11-03"
        },
        {
          "id": 19,
          "bandId": 9,
          "venueId": 1,
          "date": "2023-11-05"
        },
        {
          "id": 20,
          "bandId": 7,
          "venueId": 2,
          "date": "2023-11-21"
        }
      ]
      

}

export const getBands = () => {
    return database.band.map((bands) => ({...bands}))
}

export const getVenues = () => {
    return database.venue.map((venues) => ({...venues}))
}

export const getBookings = () => {
    return database.booking.map((bookings) => ({...bookings}))
}