import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Service = () => {
    const { price, title, img, description } = useLoaderData();
    const {user} = useContext(AuthContext);
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

            {/* review section */}
            <div className=' mx-auto text-center mt-10 mb-11'>
                <h1 className=' text-3xl pb-2'>Add your review</h1>
                <form>
                    <textarea className="textarea textarea-bordered w-1/4" placeholder=" your comments"></textarea><br/>
                    <input className=' btn' type="submit" value="ADD" />
                </form>
            </div>
        </div>
    );
};

export default Service;