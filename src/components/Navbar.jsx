const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <a href="index.html">
              <span>
                <span className="fa-solid fa-code"> </span> Lex Liu
              </span>
            </a>
          </h1>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        {/* <li>
          <a href="#contact">Contact</a>
        </li> */}
        <li>
          <a href="https://www.linkedin.com/in/xuliulexie/" target="_blank">
            <span className="fa-brands fa-linkedin" aria-hidden="true"></span>
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>

        <li>
          <a href="https://github.com/lexliu19" target="_blank">
            <span
              className="fa-brands fa-github-square"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="#contact" className="button">
            Connect With Me
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
