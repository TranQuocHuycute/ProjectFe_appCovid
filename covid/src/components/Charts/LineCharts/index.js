import React, { useEffect, useState } from 'react';
import Highchart from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const generateOption = (data) => {
    
    const categories = [];
    return {
        chart: {
            height: 500,
        },
        title: {
            text: 'Tổng ca nhiễm',
        },
        // truc ngang
        xAxis: {
            categories: categories,
            crosshair: true,
        },
        colors: ['#F3585B'],
        // truc doc
        yAxis: {
            min: 0,
            title: {
                text: null,
            },
            labels: {
                align: 'right',
            },
        },
        // hien thi thong tin tren bieu do
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat:
                '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true,
        },
        // 
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            },
        },
        // du lieu truyen vo de hien thi tren linecharts
        series: [
            {
                name: 'Tổng Ca nhiễm',
                data: data.map((item) => item.Confirmed),
            },
        ],
    };
};



export default function LineChart({data}) {

    const[option,setOptions] = useState({});
    
    useEffect(()=>{
        setOptions(generateOption(data));
    },[data]);

    return <div>
        <HighchartsReact
            highchart={Highchart}

            // dữ liệu từ option này sẽ bị thay đổi khi chọn 1 country khác 
            // nêu phải tạo lại 1 option mói tương ứng với đất nước vừa mới lựa chọn
            option={{}} />
    </div>
}