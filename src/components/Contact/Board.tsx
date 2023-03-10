export default function ContactBoard() {
  return (
    <div
      id="contact_icons"
      className="grid grid-cols-3 p-0 my-0 box-border items-center mx-auto px-4 w-20 min-w-full gap-2"
    >
      <a id="github" href="https://github.com/ntlchs" target="_blank">
        <img src="/assets/github.svg" alt="GitHub" className="footer_icon" />
      </a>
      <a
        id="linkedin"
        href="https://www.linkedin.com/in/nataliachies/"
        target="_blank"
      >
        <img
          src="/assets/linkedin.svg"
          alt="LinkedIn"
          className="footer_icon"
        />
      </a>
      <a id="email" href="mailto:nataliachies@gmail.com">
        <img src="/assets/email.svg" alt="E-mail" className="footer_icon" />
      </a>
    </div>
  );
}
