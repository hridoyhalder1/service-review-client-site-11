import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <p className="text-5xl font-bold pb-5 text-orange-600 text-center">Services</p>

                <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-8 gap-6 md:gap-6    pt-4'>
                    {
                        services.map(service => <ServicesCard
                            key={service._id}
                            service={service}
                        ></ServicesCard>)
                    }

                </div>

            </div>
            <div className=' text-center mt-8'>
                <button className=' btn btn-primary'><Link to='/services'>See All</Link></button>
            </div>
        </div>
    );
};

export default Services;