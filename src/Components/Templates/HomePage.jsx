import React, {useEffect, useState} from 'react';
import TableCoin from "../Modules/TableCoin.jsx";
import {getdata} from "../../Services/cryptoApi.js";
import Pagination from "../Modules/Pagination.jsx";
import Searchitem from "../Modules/Searchitem.jsx";
import Chart from "../Modules/Chart.jsx";

const HomePage = () => {
    const [coin, setCoin] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const [page, setPage] = useState(1)
    const [currency , setCurrency] =useState("usd")
    const [chart , setChart] =useState(null)

    useEffect(() => {
        const data = async () => {
            setIsloading(true)
            const res = await fetch(getdata(page , currency))
            const json = await res.json()
            setCoin(json)
            setIsloading(false)
        }
        data()
    }, [page,currency])

    return (
        <div>
            <Searchitem currency={currency} setCurrency={setCurrency}/>
            <TableCoin coin={coin} isLoading={isLoading} setChart={setChart}/>
            <Pagination page={page} setPage={setPage}/>
            {!! chart && <Chart chart={chart} setChart={setChart}/>}
        </div>
    );
};

export default HomePage;