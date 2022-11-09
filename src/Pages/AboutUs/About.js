import React from 'react';
import aboutus from '../../assests/about/abouus.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-500 my-12">
            <div className="hero-content flex-col lg:flex-row">
                <img src={aboutus} alt="" className="w-3/4 rounded-lg shadow-2xl" />
                <div>
                    <div className=' pl-5'>
                        <h1 className="text-5xl font-bold">ABOUT US</h1>
                        <p className="py-6">Web developers are professionals who build attractive and functional websites. A professional and user-friendly website reflects a business that is trustworthy, relevant and client or consumer-centric. People make decisions about which products and services to buy based on information they’ve searched for online.

                            There are many templates available to set up your own website, but it’s not foolproof. Unfortunately, a confusing or sloppily designed website negatively impacts your professional image and equates to losing out on business.

                            Web development is broad and includes a variety of aspects of building web applications and data management tools, to developing an ecommerce website. Web developers may specialize in one aspect, or be a ‘full-stack’ developer and work on all of them.

                            A full-stack developer is all you need for a standard sized website with good functionality. If you’re looking to improve or update a particular aspect of your website, a specialized developer can surpass expectations.

                            Web developers will ensure that your business or personal website works reliably and effortlessly. Furthermore, they can make your life easier by creating a user-friendly content management system to control your content. You’ll confidently promote your website, knowing that it reflects your brand’s value, and reap the rewards. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;