const { Schema, model } = require('mongoose');

const houseSchema = new Schema({
    contact: [
        {
            phone: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            alternative_phone: {
                type: String,
                required: true,
            },
            best_time_to_contact: {
                type: String,
                required: true,
            },
        }
    ],
    facilities: [
        {
            wifi: {
                type: String,
                required: true,
            },
            air_conditioning: {
                type: String,
                required: true,
            },
            parking: {
                type: String,
                required: true,
            },
            doctor: {
                type: String,
                required: true,
            },
            cctv: {
                type: String,
                required: true,
            },
            security: {
                type: String,
                required: true,
            },
            elevator: {
                type: String,
                required: true,
            }
        },
    ],
    adress: [
        {
            street: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
            },
            state: {
                type: String,
                required: true,
            },
            zipcode: {
                type: String,
                required: true,
            }
        }
    ],
    measurement: [
        {
            bedrooms: {
                type: Number,
                required: true,
            },
            bathrooms: {
                type: Number,
                required: true,
            },
            kitchen: {
                type: Number,
                required: true,
            },
            balcony: {
                type: String,
                required: true,
            },
            squareFootage: {
                type: Number,
                required: true,
            }
        },
    ],
    about: [
        {
            rent_per_month: {
                type: Number,
                required: true,
            },
            security_depo: {
                type: Number,
                required: true,
            },
            utilities_included: {
                type: String,
                required: true,
            },
            pet_policy: {
                type: String,
                required: true,
            },
            parking: {
                type: String,
                required: true,
            },
        }
    ],
    descriptions: [
        {
            description: {
                type: String,
                required: true,
            }
        }
    ],
    gallery: [
        {
            image1: {
                type: String,
                required: true,
            },
            image2: {
                type: String,
                required: true,
            },
            image3: {
                type: String,
                required: true,
            },
            image4: {
                type: String,
                required: true,
            },
            image5: {
                type: String,
                required: true,
            },
        }
    ]
});

const House = model('House', houseSchema);
module.exports = House;