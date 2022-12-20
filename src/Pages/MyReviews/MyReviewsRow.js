import React from 'react';

const MyReviewsRow = ({myReview, handleDelete}) => {
    const { _id, serviceName, reviewer, message, image, status } = myReview;

    
 
    return (
        
            <tr className=' mb-24'>
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
                <th>
                    <button 
                    className="btn btn-ghost btn-xs">{status ? status : 'EDIT REVIEW'}</button>
                </th>
            </tr>
        
    );
};

export default MyReviewsRow;