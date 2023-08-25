import { FC, useState } from "react";
import isreal from "./../images/pundit27.png";
import styles from "./../sass/_contact.module.scss";

const Contact: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [date, setDate] = useState<string>('')
  const [text, setText] = useState<string>("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <section id="contact" className={styles["contact"]}>
      <h1 className={styles["contact__heading"]}>Contact</h1>
      <div className={styles["contact__body"]}>
        <div className={styles["contact__body--image"]}>
          <img
            src={isreal}
            alt="ogaga"
            className={styles["contact__body--img"]}
          />
        </div>
        <form
          action="https://formspree.io/f/mwkdowpn"
          method="post"
          className={styles["contact__body--form"]}
        >
          <input
            type="text"
            value={name}
            onChange={handleName}
            placeholder="Full Name"
            name="name"
            className={styles["contact__body--name"]}
          />
          <input
            type="tel"
            value={phone}
            onChange={handlePhone}
            placeholder="Phone"
            name="phone"
            className={styles["contact__body--name"]}
          />
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            placeholder="Email"
            name="email"
            className={styles["contact__body--email"]}
          />
          <input
            type="date"
            value={date}
            onChange={handleDate}
            placeholder="Date"
            name="date"
            className={styles["contact__body--email"]}
          />
          <textarea
            value={text}
            onChange={handleText}
            placeholder="Please Tell Us Your Reason for Scheduling an Appointment:"
            name="textarea"
            className={styles["contact__body--text"]}
          />
          <button type="submit" className={styles["contact__body--button"]}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
