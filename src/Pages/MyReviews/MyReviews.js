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

    const handleDelete = id => {
        const proceed = window.confirm('Are your sure, you want to delete this review ?');
        if(proceed){
            fetch(`https://services-server-site.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = myReviews.filter(mr => mr._id !== id);
                    setMyReviews(remaining);
                }
            })
        }
    }


    return (
        <div className="overflow-x-auto w-full mb-24">
            <table className="table w-full">
                <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>Job</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>

                    <div>
                        {
                            myReviews.map(myReview => <MyReviewsRow
                                key={myReview._id}
                                myReview={myReview}
                                handleDelete={handleDelete}
                                // handleStatusUpdate={handleStatusUpdate}
                            ></MyReviewsRow>)
                        }
                    </div>

                </tbody>

            </table>
        </div>
    );
};

export default MyReviews;