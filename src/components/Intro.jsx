import avatar from '../assets/images/avatar.png';
const Intro = () => {
  return (
    <section id="intro">
      <div className="avatar-box">
        <img src={avatar} alt="Lex Liu" className="avatar" />
      </div>
      <div className="content">
        <p className="name">Full Stack Developer</p>
        <h2>
          I write <span>Code.</span>
        </h2>
        <p>Hey there 👋!</p>
        <p>
          I'm Lex, an enthusiastic full-stack developer. I'm currently pursuing
          a Master's degree in Computer Software Engineering at Northeastern
          University, scheduled to graduate in December 2024.
        </p>
        <p>
          My passion lies in creating captivating user interfaces using
          HTML/CSS, JavaScript, and React.js. On the back end, I specialize in
          Node.js, Express.js, and MongoDB for robust server-side logic and
          RESTful APIs. I also enjoy utilizing various development tools to
          streamline the developing process.
        </p>
        <p>
          With my continuous learning mindset, I thrive in collaborative
          environments and can't wait to dive into exciting projects. I am
          actively seeking new opportunities to contribute as a Full-stack
          Engineer 😊！
        </p>
      </div>
    </section>
  );
};

export default Intro;
