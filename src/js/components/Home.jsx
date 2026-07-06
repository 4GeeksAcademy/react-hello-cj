import React from 'react';
import SecondsCounter from './SecondsCounter';

const Home = (props) => {
    return (
        <div className="text-center mt-5">
            <SecondsCounter seconds={props.seconds} />
        </div>
    );
};

export default Home;