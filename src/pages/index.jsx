import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        Cmder:n <span className={styles.help}>Type help to start</span>
      </h1>
      <p>
        Visit{" "}
        <a href="#" target="_blank">Youtube Channel</a>
      </p>
      {/* Terminal component should be plugged here */}
    </div>
  )
}
