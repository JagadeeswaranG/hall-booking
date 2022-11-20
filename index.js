const express = require("express");//to start web server
const cors = require("cors")

const app = express();

app.use(express.json())

// Room Booking Data stored in Loacl variale
let rooms_bookedData = [
    {
        roomName : "A",
        seats : 500,
        amenities:["AC","Projector","dts"],
        price_1hr:2000,
        status:"booked",
        customer_name:"personA",
        date:"2022-11-10",
        start_time:"9am",
        end_time:"4pm"
    },
    {
        roomName : "B",
        seats : 250,
        amenities:["AC","Projector"],
        price_1hr:1000,
        status:"booked",
        customer_name:"personB",
        date:"2022-11-15",
        start_time:"10am",
        end_time:"1pm"
    }
]

// Booking Customer Data stored in local variable
let customer_bookedData = [
    {
        customer_name:"personA",
        roomName:"A",
        date:"2022-11-10",
        start_time:"9am",
        end_time:"4pm"
    },
    {
        customer_name:"personB",
        roomName:"B",
        date:"2022-11-15",
        start_time:"10am",
        end_time:"1pm"
    }
]

// API for list all rooms with booked data
app.get("/rooms/booked_data",(req,res)=>{
    res.json(rooms_bookedData)
})

// API for list all customers with booked data
app.get("/customers/booked_data",(req,res)=>{
    res.json(customer_bookedData)
})

// API to create a room
app.post("/create_room",(req,res)=>{
    rooms_bookedData.push(req.body)
    res.json({message:"Room created Successfully"})
})

// API to Book room
app.post("/book_room",(req,res)=>{
    customer_bookedData.push(req.body)
    res.json({message:"Room Booked"})
})

// Assigning local port to this app
app.listen(3002)