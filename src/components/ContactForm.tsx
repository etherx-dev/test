import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import styles from "./ContactForm.module.css";
const ContactForm: FunctionComponent = () => {
  return (
    <div className={styles.contactUsForInquiriesParent}>
      <b className={styles.contactUsFor}>Contact Us for Inquiries</b>
      <div className={styles.cards}>
        <div className={styles.basecards}>
          <div className={styles.basecardsbody}>
            <div className={styles.stayTunedFor}>
              Stay tuned for the launch of fusemoney.com, here you can reach out
              to us for any inquiry!
            </div>
            <Form.Group className={styles.baseforms01Input01Small}>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group className={styles.baseforms01Input01Small}>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
            <Form.Group className={styles.baseforms01Input01Small}>
              <Form.Control type="text" placeholder="Email Address" />
            </Form.Group>
            <Form.Group className={styles.baseforms02Textarea01Sm}>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Describe your condition"
              />
            </Form.Group>
            <Form.Select>
              <option>Clinic</option>
              <option value="Medical Boulevard">Medical Boulevard</option>
              <option value="Health Street">Health Street</option>
              <option value="Live Strong Avenue">Live Strong Avenue</option>
            </Form.Select>
            <Button variant="primary">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
