import React from 'react';

const MyReviewsRow = ({myReview}) => {
    const { _id, serviceName, reviewer, message, image } = myReview;

    const handleDelete = id => {
        const proceed = window.confirm('Are your sure, you want to delete this review ?');
        if(proceed){
            fetch(`https://services-server-site.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }
    }
 
    return (
        
            <tr>
                <th>
                    <label>
                        <button onClick={() =>handleDelete(_id)} className=' btn btn-active'>X</button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="  w-24 h-24">
                                <img src={image} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{serviceName}</div>
                            <div className="text-sm opacity-50">{reviewer}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {message}
                    
                </td>
                <td>Purple</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        
    );
};

export default MyReviewsRow;