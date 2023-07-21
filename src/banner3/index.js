import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./style.css"
import {  CardActions } from '@mui/material';
import Img1 from "./images/1.jpg"
import Img2 from "./images/2.jpg"
import Img3 from "./images/3.jpg"

export default function Banner3() {
    return (
        <div className='full2'>
            <div className="words3">
                <h1>SHOP PRODUCTS</h1>
                <h2>Open 24/7/365.</h2>
            </div>
            <div className='full-banner3'>
                <Card sx={{ maxWidth: 345 }} className='cardds'>
                    <CardMedia
                        sx={{ height: 290 }}
                        image={Img1}
                        title="green iguana"
                    />
                    <CardContent className='content1'>
                        <Typography gutterBottom variant="h5" component="div">
                            White Tend
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            200,00 USD
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" className='btn1'>Details</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }} className='cardds'>
                    <CardMedia
                        sx={{ height: 290 }}
                        image={Img2}
                        title="green iguana"
                    />
                    <CardContent className='content1'>
                        <Typography gutterBottom variant="h5" component="div">
                            White Tend
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            200,00 USD
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" className='btn1'>Details</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }} className='cardds'>
                    <CardMedia
                        sx={{ height: 290 }}
                        image={Img3}
                        title="green iguana"
                    />
                    <CardContent className='content1'>
                        <Typography gutterBottom variant="h5" component="div">
                            White Tend
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            200,00 USD
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" className='btn1'>Details</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}
