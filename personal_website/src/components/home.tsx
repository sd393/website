import React from "react";
import "./home.css";

const Home = () => {
    return (
        <div className="parent-home">
            <h1 className="home animate_typewriter">Hi, I'm Samarjit.</h1>
            <p className="home">I'm a student at Dartmouth College studying Computer Science. I am also
                broadly interested in neuroscience, brain-computer interfaces, philosophy of mind, and 
                <a href="https://qri.org/"> qualia research</a>. Email me at samarjitd391@gmail.com.
            </p>
        </div>
    );
};

export default Home;
