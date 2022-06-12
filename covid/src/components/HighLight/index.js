import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import HighlightCard from './HighLightCard';

export default function HighLight({ report }){
    const data = report[report.lenght - 1];
    const summary = [
        {
            title: 'Số ca nhiễm',
            count: data.Confirmed,
            type: 'confirmed'
        },
        {
            title: 'Khỏi',
            count: data.Recovered,
            type: 'recovered'
        },
        {
            title: 'Tử vong',
            count: data.Deaths,
            type: 'deaths'
        }
    ]
    // Xét khoảng cách gt =3
    return( 
         <Grid container spacing={3}>
        {
            summary.map(item => (
                <Grid item sm={4} xs={12}>
                     <HighlightCard 
                     title={item.title} 
                     count={item.count} 
                     type={item.type}/>
                </Grid>
            ))
        }
    </Grid>
    );
}