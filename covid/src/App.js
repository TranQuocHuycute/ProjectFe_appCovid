// Số ca nhiễm , ca khỏi , ca tử vong

import { useEffect, useState } from "react";
import { getCountries, getReporByCountry } from "./apis";
import CountrySelecter from "./components/CountrySelector";
import HighLight from "./components/HighLight";
import Summary from "./components/Summary";

function App() {
  //countries lưu dữ liệu api , setCountries cập nhật lại api
  const [countries, setCountries] = useState([]);
  const [selecterCountryId, setSelecterCountryId] = useState('');
  const [report, setReport] =  useState([]);

  // Gọi api
  useEffect(() => {
    //res du lieu tra ve tu api
    getCountries().then((res) => {
      console.log({ res });
      // data noi chữa dữ liệu từ api
      setCountries(res.data)
      //Gán giá trị đất nước đầu tiên là VN
      setSelecterCountryId('vn');
    });
  }, []);

  const handleOnChange = (e) => {
    setSelecterCountryId(e.target.value)

   
  };


  useEffect(()=>{
    if(setSelecterCountryId){
      const { Slug } = countries.find((country) => country.ISO2.toLowerCase() === setSelecterCountryId);
  
    // call api
    getReporByCountry(Slug).then(res => setReport = res.data)

    // xoa di item cuoi cung trong array res.data
    res.data.pop();
    setReport.data
    }
  },[countries,setSelecterCountryId])

  return (
    <>
      <CountrySelecter countries={countries} handleOnChange={handleOnChange} value ={setSelecterCountryId} />
      <HighLight report={report}/>
      <Summary report={report}/>
    </>

  );
}

export default App;
