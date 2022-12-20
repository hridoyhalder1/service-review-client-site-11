import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Review from '../MyReviews/Review';

const Service = () => {
    const { _id, price, title, img, description } = useLoaderData();
    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://services-server-site.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const handleReview = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const photoURL = form.photoURL.value;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            image: img,
            reviewer: name,
            photoURL,
            message,
            email
        }

        // fetch review api
        fetch('https://services-server-site.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }


    return (
        <div>
            <div className="card  bg-slate-700 shadow-xl flex-col mt-12 p-10">
                <div className=' mt-14'>
                    <figure>
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img src={img} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                    </figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-white">{title}</h2>
                    <p className=' text-white font-semibold'>Price: {price}</p>
                    <p className=' text-white'>{description}</p>
                </div>
            </div>
            {/* review show */}

            <div className=' mt-12 mb-12 '>
                <h2 className='text-center text-white mb-5 text-5xl font-bold'>Reviews</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  text-center'>
                    {
                        reviews.map(review => <Review
                            key={_id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>

            {/* review section */}
            <div className=' mx-auto text-center mt-10 mb-11 w-2/4'>
                <h1 className=' text-3xl pb-2'>Add your review</h1>
                <form onSubmit={handleReview}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user?.displayName}  placeholder="your name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Photo URL</span>
                        </label>
                        <input type="text" name='photoURL' defaultValue={user?.photoURL} readOnly placeholder="your photoURL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="text" name='name' defaultValue={user?.email} placeholder="your email" readOnly className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Message</span>
                        </label>
                        <textarea name='message' className="textarea textarea-bordered w-full" placeholder=" your message.." required></textarea><br />

                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="ADD" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Service;