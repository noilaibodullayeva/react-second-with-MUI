import "./style.css"
import * as React from 'react';
import Button from '@mui/material/Button';

const Banner2 = () => {
    return (
        <div className="banner2_full">
            <div className="words2">
                <h1>How we're keeping you safe during COVID-19</h1>
                <h2>As an outdoor shop, we've taken precautionary measures to ensure the safety of all our customers and team members.</h2>
                <Button variant="contained">Read our Statement</Button>
            </div>
        </div>
    )
}

export default Banner2