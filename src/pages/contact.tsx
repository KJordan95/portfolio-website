import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import GitHubLogo from "@/assets/img/GitHub-logo.png";
import LinkedInLogo from "@/assets/img/LinkedIn-logo.png";
import EmailLogo from "@/assets/img/Email-logo.png";

export const Contact = () => {
  const [emailStatus, setEmailStatus] = useState("");
  const [copiedEmail, setCopyEmail] = useState("0px");
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

  const copyToClipBoard = (event: React.MouseEvent) => {
    navigator.clipboard.writeText("kameronjordan95@gmail.com");
    setCopyEmail("auto");
    console.log(copiedEmail);
    setTimeout(() => {
      console.log(copiedEmail);
      setCopyEmail("0px");
    }, 7000);
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
        <div
          className="success-msg"
          style={{ height: copiedEmail, padding: "0rem", overflow: "hidden" }}
        >
          Email copied to clipboard!
        </div>

        <div>kameronjordan95@gmail.com</div>

        {/*TODO: add links to linkedin github and put email in plain text*/}
        <div className="contact-external-links-container">
          <a href="https://github.com/KJordan95" target="_blank">
            <img
              src={GitHubLogo}
              alt="GitHub Link"
              title="GitHub"
              width="50"
              height="50"
            />
          </a>
          <a href="https://www.linkedin.com/in/kameronjordan/" target="_blank">
            <img
              src={LinkedInLogo}
              alt="Linked In Link"
              title="LinkedIn"
              width="75"
              height="75"
            />
          </a>
          <img
            className="contact-email-logo"
            src={EmailLogo}
            alt="Copy Email to Clipboard"
            title="Copy Email Address"
            width="65"
            height="70"
            onClick={copyToClipBoard}
          />
        </div>

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
