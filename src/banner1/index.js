import "./style.css"
import * as React from 'react';
import Button from '@mui/material/Button';



const Banner1 = () => {
    return (
        <div className="banner1-full">
            <div className="words">
                <h1>
                    Serving you
                    since 1989.
                </h1>
                <h2>
                    Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.
                </h2>

                <Button variant="outlined">Shop Merch</Button>

            </div>
        </div>
    )
}

export default Banner1