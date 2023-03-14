import { CORE_MEMBERS } from "@/utils/utils";
import { Member } from "../components/members/Member";
import styles from "../styles/Members.module.css";
import Head from "next/head";

export default function Members() {
  return (
    <div className={styles.members}>
      <Head>
        <title>RR | Members</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Core Members</h2>

      <div className={styles.coreMembers}>
        {CORE_MEMBERS.map((member) => {
          return <Member name={member.name} bio={member.bio} />;
        })}
      </div>
    </div>
  );
}
