import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";
const FrameComponent1: FunctionComponent = () => {
  return (
    <form
      className={styles.frameForm}
      action="/subscribe"
      method="post"
      id="email"
    />
  );
};

export default FrameComponent1;
