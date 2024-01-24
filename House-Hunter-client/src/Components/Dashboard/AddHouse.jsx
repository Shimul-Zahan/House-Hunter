// src/components/AddHouse.js
import React, { useState } from 'react';
import axios from 'axios';
import usePublicHook from '../Hooks/usePublicHook';

const AddHouse = () => {

    const api = usePublicHook();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const house = {
            address: form.address.value,
            city: form.city.value,
            bedrooms: form.bedrooms.value,
            roomSize: form.roomSize.value,
            picture: form.picture.value,
            availability: form.availability.value,
            rentPerMonth: form.rentPerMonth.value, 
            phoneNumber: form.phoneNumber.value,
            description : form.description.value,
        }
        const res = await api.post('/api/add-house', house);
        console.log(res.data);
    };

    return (
        <div className="max-w-2xl mx-auto my-8">
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        required
                        id="name"
                        name="name"
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                        Address
                    </label>
                    <input
                        type="text"
                        required
                        id="address"
                        name="address"
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                        City
                    </label>
                    <input
                        type="text"
                        required
                        id="city"
                        name="city"
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bedrooms">
                        Bedrooms
                    </label>
                    <input
                        type="number"
                        required
                        id="bedrooms"
                        name="bedrooms"
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bathrooms">
                        Bathrooms
                    </label>
                    <input
                        type="number"
                        required
                        id="bathrooms"
                        name="bathrooms"
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roomSize">
                        Room Size
                    </label>
                    <input
                        type="text"
                        required
                        id="roomSize"
                        name="roomSize"
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="availability">
                        Availability
                    </label>
                    <select
                        id="availability"
                        name="availability"
                        className="w-full border border-gray-300 p-2 rounded"
                    >
                        <option disabled value="">Select Availability</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rentPerMonth">
                        Rent Per Month
                    </label>
                    <input
                        type="number"
                        required
                        id="rentPerMonth"
                        name="rentPerMonth"
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                        Phone Number
                    </label>
                    <input
                        type="number"
                        required
                        id="phoneNumber"
                        name="phoneNumber"
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="picture">
                        Picture
                    </label>
                    <input
                        type="text"
                        required
                        id="picture"
                        name="picture"
                        placeholder='Please input image link'
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>

                <div className="mb-4 col-span-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="w-full border border-gray-300 p-2 rounded"
                    ></textarea>
                </div>

                <div className="mb-4 col-span-2">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 w-full"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddHouse;
