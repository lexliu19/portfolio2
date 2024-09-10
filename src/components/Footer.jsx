const Footer = () => {
  return (
    <footer id="contact">
      <h2>Connect with me 👏</h2>
      <p>
        You can connect with me through{' '}
        <a href="https://www.linkedin.com/in/xuliulexie/">LinkedIn</a> and{' '}
        <a href="https://github.com/LexieLiu19">Github</a>, or feel free to drop
        me an email!
      </p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/xuliulexie/" target="_blank">
            <span className="fab fa-linkedin" aria-hidden="true"></span>
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>

        <li>
          <a href="https://github.com/LexieLiu19" target="_blank">
            <span
              className="fa-brands fa-github-square"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Github</span>
          </a>
        </li>

        <li>
          <a href="mailto:xuliu0925@gmail.com">
            <span className="fas fa-envelope" aria-hidden="true"></span>
            <span className="sr-only">Email</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
