import styles from "./page.module.css";
import ClientComponent from "../../components/client-component";
import ServerComponent from "../../components/server-component";

export default function Home() {
  return (
    <div className={styles.page}>
      인덱스 페이지
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
