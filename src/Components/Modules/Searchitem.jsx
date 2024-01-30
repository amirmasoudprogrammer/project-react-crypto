import React, {useEffect, useState} from 'react';
import {textdata} from "../../Services/cryptoApi.js";
import {LineWave} from "react-loader-spinner";
import styles from "../../Components/Modules/Searchbox.module.css"

const Searchitem = ({currency, setCurrency}) => {

    const [text, setText] = useState("")
    const [coin, setCoin] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        setCoin([])
        if (!text) {
            setLoading(false)
            return
        }
        const data = async () => {
            try {
                const res = await fetch(textdata(text), {signal: controller.signal})
                const json = await res.json();
                if (json.coins) {
                    setLoading(false)
                    setCoin(json.coins)
                }
            } catch (error) {
                if (error.name !== "AbortError") {
                    alert(error.message)
                }
                console.log(json)
            }
        }
        setLoading(true)
        data()
        return () => {
            controller.abort()
        }
    }, [text])

    return (
        <div className={styles.searchbox}>
            <input type="text" placeholder="search" value={text} onChange={(e) => setText(e.target.value)}/>
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="jpy">JPY</option>
            </select>

            {
                (!!coin.length || isLoading) && (
                    <div className={styles.searchResult}>
                        {isLoading && <LineWave/>}
                        <ul>
                            {coin.map(item => <li key={item.id}>
                                <img src={item.thumb} alt={item.name}/>
                                <p>{item.name}</p>
                            </li>)}
                        </ul>
                    </div>
                )
            }

        </div>
    );
};

export default Searchitem;