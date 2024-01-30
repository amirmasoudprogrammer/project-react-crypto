import React from 'react';
import svg1 from "../../assets/chart-up.svg";
import svg2 from "../../assets/chart-down.svg";
import styles from "../../Components/Modules/ItemCrypto.module.css"
import {marketChart} from "../../Services/cryptoApi.js";

const ItemCrypto = ({coin, setChart}) => {


    const showstart = async () => {
        try {
            const res = await fetch(marketChart(coin.id))
            const json = await res.json();
            console.log(json)
            setChart(json)
        } catch (error) {
            setChart(null)
        }

    }


    return (
        <tr className={styles.trs}>
            <td>
                <div className={styles.symbol} onClick={showstart}>
                    <img src={coin.image} alt=""/>
                    <span>{coin.symbol.toUpperCase()}</span>
                </div>
            </td>
            <td>
                {coin.name}
            </td>
            <td>
                $ {coin.current_price.toLocaleString()}
            </td>
            <td className={coin.price_change_percentage_24h > 0 ? styles.success : styles.error}>
                {coin.price_change_percentage_24h.toFixed(2)}
            </td>
            <td>
                {coin.total_volume.toLocaleString()}
            </td>
            <td>
                <img src={coin.price_change_percentage_24h > 0 ? svg1 : svg2} alt=""/>
            </td>
        </tr>
    );
};

export default ItemCrypto;