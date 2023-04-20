import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [emailStatus, setEmailStatus] = useState("");
  const form = useRef<any>();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          setEmailStatus("success");
        },
        (error) => {
          setEmailStatus("error");
          console.log(error);
        }
      );
  };

  const resizeMessageBox = (event: React.FormEvent<HTMLTextAreaElement>) => {
    event.currentTarget.style.height = "auto";
    event.currentTarget.style.height = `${event.currentTarget.scrollHeight}px`;
  };

  return (
    <section>
      <div className="contact-form-container">
        {emailStatus === "success" && (
          <div className="success-msg">Email sent successfully!</div>
        )}
        {emailStatus === "error" && (
          <div className="error-msg">
            Email failed to send. Try again later or email me directly through
            another email provider.
          </div>
        )}

        {/*TODO: add links to linkedin github and put email in plain text*/}

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="to_name" required />
          <label>Email</label>
          <input type="email" name="from_name" required />
          <label>Message</label>
          <textarea name="message" onInput={resizeMessageBox} />
          <input type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
};
