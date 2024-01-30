import {LineWave} from "react-loader-spinner"
import ItemCrypto from "./ItemCrypto.jsx";
import styles from "../../Components/Modules/TableCoin.module.css"
const TableCoin = ({coin , isLoading ,setChart}) => {
    console.log(coin)
    return (
        <div className={styles.container}>
            {isLoading ? <LineWave   color="#0000ff" width="300" strokeWidth="2"/> : (
                <table className={styles.table}>
                    <thead>
                    <tr className={styles.tritem}>
                        <th>Coin</th>
                        <th>name</th>
                        <th>Price</th>
                        <th>24h</th>
                        <th>Total volume</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {coin.map(item => <ItemCrypto coin={item} key={item.id} setChart={setChart}/>)}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TableCoin;