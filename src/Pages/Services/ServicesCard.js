import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import PrivateRoute from '../../Router/Routes/PrivateRoute';



const ServicesCard = ({ service }) => {
    const { _id, price, title, img, description } = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                <figure>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{price}</p>
                    <p>{description.slice(0, 100)}....</p>
                    <div className="card-actions justify-end">
                        
                            <Link to={`/service/${_id}`}>
                                <button className="btn btn-primary">Details</button>
                            </Link>
                        
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ServicesCard;