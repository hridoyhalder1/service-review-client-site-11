import React from 'react';

const Review = ({ review }) => {
    const { serviceName, reviewer, message, photoURL } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <div className=' flex mr-2'>
                    <img src={photoURL} alt="" className=' w-11 mr-2 rounded-full'></img>
                    <h2 className="card-title">{reviewer}</h2>
                </div>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <p className=' text-left'>{message}</p>
            </div>
        </div>
    );
};

export default Review;