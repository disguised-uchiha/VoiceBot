import { useState } from "react";
import styles from "./AudioTest.module.scss";

const AudioTest = () => {
  const [lang, setLang] = useState("en");

  return (
    <div onClick={() => setLang(lang === "en" ? "hi" : "en")} className={styles.container}>AudioTest
      <div dangerouslySetInnerHTML={{
        __html: `
   <df-messenger
     intent="WELCOME"
     chat-title="FirstTest"
     agent-id="xxxxxxxxxxx"
     language-code=${lang}>
   </df-messenger>
` }} /></div>
  )
}

export default AudioTest