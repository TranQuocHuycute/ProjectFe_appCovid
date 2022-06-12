import React, { useEffect, useState } from 'react';
import Highchart from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';
import { Button, ButtonGroup } from '@material-ui/core';

const generateOption = (data) => {
    
    const categories = data.map((item) => moment(item.Date).format('DD/MM/YY'));
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
    const [reportType, setReportType] = useState('all');
    useEffect(()=>{
        let customData = [];
        //xủ lý thay đổi reportType
        switch(reportType){
            case 'all':
                customData = data;
                break;
            case '30':
                customData = data.slice(data.lenght - 30);//cắt đi số phần tử sau khi đã trừ 30( lenght : 70 - 30-> cắt đi 40)
                break;
            case '7':
                customData = data.slice(data.lenght - 7);
                break;

        }
        setOptions(generateOption(customData ));
    },[data, reportType]);

    return (
    <div>
        <ButtonGroup size='small' style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <Button color={reportType === 'all' ? 'secondary' : ''} onClick={() => setReportType('all')}>Tất cả</Button>
            <Button color={reportType === '30' ? 'secondary' : ''} onClick={() => setReportType('30')}>30 ngày</Button>
            <Button color={reportType === '7' ? 'secondary' : ''} onClick={() => setReportType('7')}>7 ngày</Button>
        </ButtonGroup>

        <HighchartsReact
        
            highchart={Highchart}

            // dữ liệu từ option này sẽ bị thay đổi khi chọn 1 country khác 
            // nêu phải tạo lại 1 option mói tương ứng với đất nước vừa mới lựa chọn
            option={{}} />
    </div>
    );
}