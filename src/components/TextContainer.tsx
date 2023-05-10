import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./TextContainer.module.css";
const TextContainer: FunctionComponent = () => {
  return (
    <div className={styles.wellLetYouKnowWhenThingsParent}>
      <div className={styles.wellLetYou}>
        We’ll let you know when things are good to go
      </div>
      <div className={styles.textField}>
        <div className={styles.inputContainer}>
          <div className={styles.placeholder}>Email</div>
        </div>
      </div>
      <div className={styles.buttons}>
        <b className={styles.learnMore}>Subscribe</b>
      </div>
      <Form.Group className={styles.textareastandardFormgroup}>
        <Form.Control
          as="textarea"
          name="email"
          defaultValue="Email"
          size="lg"
          rows={1}
          placeholder="Email"
        />
      </Form.Group>
    </div>
  );
};

export default TextContainer;
