import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core';
import React from 'react';

export default function CountrySelector({ value, handleOnChange, countries }) {
    return <FormControl>
        {/* shrink giúp lable co lại*/}
        {/* truyền id country-selector để lable và Nati đi với nhau */}
        <InputLabel htmlFor='country-selector' shrink>Quốc gia</InputLabel>
        <NativeSelect
            value={value}
            onChange={handleOnChange}
            inputProps={
                {
                    name: 'country',
                    id: 'country-selector'
                }
            }>
            {/* in ra danh sach option */}
            {
                //  map se duyet qua tung item cau country
        
                countries.map((country) => {
                    // lấy data bỏ vào option
                    return <option value={country.ISO2.toLowerCase()}>{country
                        .Country}</option>
                })
            }
            <FormHelperText>Lựa chọn quốc gia</FormHelperText>
        </NativeSelect>
    </FormControl>
}