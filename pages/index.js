import Terminal from "../components/Terminal";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        Welcome To inuo@portfolio<br></br>
        <h4>まずはhelpを入力してください</h4>
      </h1>
      <br></br>

      <Terminal />
    </div>
  );
}
