import axios from "axios";

export const getCountries = () => axios.get('https://api.covid19api.com/countries')

//  Vì người dùng sẽ chọn xem theo quốc gia nên k đc hashcode nên truyền cho 1 biến country
export const getReporByCountry = (country) => axios.get(`https://api.covid19api.com/dayone/country/${country}`);