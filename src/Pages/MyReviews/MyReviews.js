import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewsRow from './MyReviewsRow';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`https://services-server-site.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])


    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>

                    <div>
                        {
                            myReviews.map(myReview => <MyReviewsRow
                                key={myReview._id}
                                myReview={myReview}
                            ></MyReviewsRow>)
                        }
                    </div>

                </tbody>

            </table>
        </div>
    );
};

export default MyReviews;