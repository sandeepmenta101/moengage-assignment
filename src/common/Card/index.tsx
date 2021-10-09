import styles from "../../styles/card.module.scss";
import Table from "../Table";
import ProgressBar from "./../ProgressBar/index";
import { DataInterface } from '../../interfaces/data.interface';

type CardProps = {
  headerTitle: string;
  data: DataInterface  
};

export default function Card(props: CardProps) {
  let { headerTitle, data } = props;
  // let statistics = Object.values(data["stats"]) || [];

  console.log(data);
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <aside>
          <h1>{headerTitle}</h1>
        </aside>
        <aside>
          <select>
            <option>Sort by value</option>
            <option>Sort by label</option>
          </select>
          <button className={styles.button}>
            <i className="fa fa-arrows-alt" aria-hidden="true"></i>
          </button>
        </aside>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.statistics}>
          <h1>STATS:</h1>
          {/* <ul>
            {statistics?.map(
              (stat: { label: string; value: number }, i: number) => (
                <li key={i}>
                  <ProgressBar label={stat.label} value={stat.value} />
                </li>
              )
            )}
          </ul> */}
        </div>
        <div className={styles.table}>
          <Table />
        </div>
      </div>
    </div>
  );
}
