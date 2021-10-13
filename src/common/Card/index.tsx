import { useEffect } from 'react';
import styles from "../../styles/card.module.scss";
import Table from "../Table";
import ProgressBar from "./../ProgressBar/index";
import { DataInterface } from '../../interfaces/data.interface';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFullScreenCard } from '../../redux/actions/app.actions';

type CardProps = {
  headerTitle: string;
  data: DataInterface;
  fullScreen: Boolean;
};

export default function Card(props: CardProps) {
  let { headerTitle, data, fullScreen } = props;
  let statistics = data.stats && Object.values(data.stats);
  const dispatch = useDispatch();
  const { highlightsFullScreen, countriesFullScreen, incomeFullScreen, buyersFullScreen } = useSelector((state: any) => state.appReducer);


  const toggleToFullScreen = (title: string) => {
    dispatch(toggleFullScreenCard(title.toLowerCase()));
  }
  
  return (
    <div className={fullScreen ? styles.fullSizeCard : styles.card}>
      <div className={styles.cardHeader}>
        <aside>
          <h1>{headerTitle}</h1>
        </aside>
        <aside>
          <select>
            <option>Sort by value</option>
            <option>Sort by label</option>
          </select>
          <button className={styles.button} onClick={() => toggleToFullScreen(headerTitle)}>
            {fullScreen ? <i className='fa fa-minus'></i> : <i className="fa fa-arrows-alt" aria-hidden="true"></i>
}          </button>
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
            <div>{data?.filter?.label}</div>
            <div>{data?.filter?.value} %</div>
          </div>
          <Table header={data?.dataSet?.header} data={data?.dataSet?.data} />
        </div>
      </div>
    </div>
  );
}
