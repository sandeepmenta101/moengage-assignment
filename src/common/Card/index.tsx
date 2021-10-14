import styles from "../../styles/card.module.scss";
import Table from "../Table";
import ProgressBar from "./../ProgressBar/index";
import { DataInterface } from "../../interfaces/data.interface";
import { useDispatch, useSelector } from "react-redux";
import { toggleFullScreenCard } from "../../redux/actions/app.actions";

type CardProps = {
  headerTitle: string;
  data: DataInterface;
};

export default function Card(props: CardProps) {
  let { headerTitle, data } = props;
  let statistics = data.stats && Object.values(data.stats);
  const dispatch = useDispatch();
  const { fullScreenMode, afterViewInitialized } = useSelector((state: any) => state.appReducer);

  const toggleToFullScreen = (title: string) => {
    dispatch(toggleFullScreenCard(title.toLowerCase()));
  };

  if (fullScreenMode[headerTitle.toLowerCase()]) {
    return (
      <div className={styles.fullSizeCard}>
      <div className={styles.cardHeader}>
        <aside>
          <h1>{headerTitle}</h1>
        </aside>
        <aside>
          <select>
            <option>Sort by value</option>
            <option>Sort by label</option>
          </select>
          <button
            className={styles.button}
            onClick={() => toggleToFullScreen(headerTitle)}
          >
            {fullScreenMode[headerTitle.toLowerCase()] ? <i className="fa fa-minus"></i> : <i className="fa fa-arrows-alt" aria-hidden="true"></i>}
          </button>
        </aside>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.statistics}>
          <h1>STATS:</h1>
          <ul>
            {statistics?.map(
              (stat: { label: string; value: number }, i: number) => (
                <li key={i}>
                  <ProgressBar label={stat.label} value={stat.value} />
                </li>
              )
            )}
          </ul>
        </div>
        <div className={styles.table}>
          <div className={styles.tableTitle}>
            <div className={styles.filterLabel}>{data?.filter?.label}</div>
            <div className={styles.filterValue}>{data?.filter?.value} %</div>
          </div>
          <Table header={data?.dataSet?.header} data={data?.dataSet?.data} />
        </div>
      </div>
    </div>
    )
  }else{
    return (
      <div className={afterViewInitialized ? styles.none : styles.card}>
        <div className={styles.cardHeader}>
          <aside>
            <h1>{headerTitle}</h1>
          </aside>
          <aside>
            <select>
              <option>Sort by value</option>
              <option>Sort by label</option>
            </select>
            <button
              className={styles.button}
              onClick={() => toggleToFullScreen(headerTitle)}
            >
              <i className="fa fa-arrows-alt" aria-hidden="true"></i>
            </button>
          </aside>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.statistics}>
            <h1>STATS:</h1>
            <ul>
              {statistics?.map(
                (stat: { label: string; value: number }, i: number) => (
                  <li key={i}>
                    <ProgressBar label={stat.label} value={stat.value} />
                  </li>
                )
              )}
            </ul>
          </div>
          <div className={styles.table}>
            <div className={styles.tableTitle}>
              <div className={styles.filterLabel}>{data?.filter?.label}</div>
              <div className={styles.filterValue}>{data?.filter?.value}%</div>
            </div>
            <Table header={data?.dataSet?.header} data={data?.dataSet?.data} />
          </div>
        </div>
      </div>
    );
  }
}
