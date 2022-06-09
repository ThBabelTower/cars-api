const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const cars = {
    'honda civic':{
        'No. of Doors': 4,
        'Engine CC': 1799,
        'Horse Power': 139,
        'Price': '$22000',
        'Electric': false
    },
    'toyota prius':{
        'No. of Doors': 4,
        'Engine CC': 'Hybrid',
        'Horse Power': 98,
        'Price':'$24000',
        'Electric': true
    },
    'unknown':{
        'No. of Doors': 'unknown',
        'Engine CC': 'unknown',
        'Horse Power': 'unknown',
        'Price':'unknown',
        'electric': 'unknown'
    }
}

app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const carName = request.params.name.toLowerCase()
    if(cars[carName]){
        response.json(cars[carName])
    }else{
        response.json(cars['unknown'])
    }
    response.json(cars)
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`USE PORT ${PORT}`)
})