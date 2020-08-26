import { links } from "../data/links";

const About = () => {
  return (
    <div id="links" className="w-1/2 sm:w-full m-auto flex items-center">
      <a
        href={`https://www.instagram.com/${links.instagram}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" />
      </a>
      <a
        href={`https://github.com/${links.github}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src="https://img.icons8.com/fluent/48/000000/repository.png" />
      </a>
      <a
        href={`https://twitter.com/${links.twitter}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src="https://img.icons8.com/fluent/48/000000/twitter.png" />
      </a>
      <a
        href={`https://youtube.com/channel/${links.youtube}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src="https://img.icons8.com/fluent/48/000000/youtube-play.png" />
      </a>
    </div>
  );
};

export default About;
