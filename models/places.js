const mongoose = require('mongoose')
const placeSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    pic: { 
        type: String, 
        default: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    cuisines: { 
        type: String, 
        required: true 
    },
    city: { 
        type: String, 
        default: 'Anytown' 
    },
    state: { 
        type: String, 
        default: 'USA' 
    },
    founded: Number
})

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

module.exports = mongoose.model('Place', placeSchema)