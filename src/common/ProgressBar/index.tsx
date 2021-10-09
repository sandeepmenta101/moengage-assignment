import styles from "../../styles/progressBar.module.scss";

type ProgressBarProps = {
  label: string;
  value: number;
};

export default function ProgressBar(props: ProgressBarProps) {
  const { label, value } = props;

  return (
    <>
      <div className={styles.labelGroup
    }>
        <label>{label}</label>
        <label>{value} %</label>
      </div>
      <progress value={value} max="100" className={styles.progress}></progress>
    </>
  );
}
