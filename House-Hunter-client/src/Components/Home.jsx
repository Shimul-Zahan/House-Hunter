import React, { useEffect, useState } from 'react'
import bannerImage from '../../public/assets/landing-header-bg.jpg'
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/all-houses')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    console.log(data);

    return (
        <div className='py-24 px-10 min-h-screen bg-blend-overlay bg-black bg-opacity-60' style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'cover' }}>


            <div className='my-20 grid md:grid-cols-2  gap-4 mx-auto place-items-center'>
                {
                    data && data.map(item =>
                        <div className=''>
                            <div className="flex max-w-2xl mx-auto h-36 overflow-hidden border-2 bg-slate-100 border-slate-400 mb-5">
                                <div className="">
                                    <img className="w-72 h-36" src={item?.picture} />
                                </div>
                                <div className="flex justify-between flex-1 mb-2 p-2">
                                    <div className="flex flex-col justify-between">
                                        <div>
                                            <h1 className="text-2xl font-semibold">{item?.address}</h1>
                                            <p className="text-sm"> {item?.city} </p>
                                            <p className="text-sm"> {item?.phoneNumber} </p>
                                        </div>
                                        <div className="flex gap-10">
                                            <p className="text-xs uppercase flex flex-col">
                                                <span className="font-semibold text-sm -mb-1">date : {item?.availability}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <div>
                                            <h1 className="text-2xl font-bold text-green-800 text-end">
                                                {item?.rentPerMonth}$
                                            </h1>
                                        </div>
                                        <div className="flex justify-end">
                                            <Link>
                                                <button
                                                    className="bg-[#E36252] text-white rounded-sm h-9 text-base px-2 hover:bg-red-500">
                                                    Book now
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}
