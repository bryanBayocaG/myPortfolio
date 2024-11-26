import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import MagicButton from "./MagicButton";

const Links = () => {
  return (
    <>
      <a data-type="hero" target="_blank" href="./bayoca_bryan_resume.pdf">
        <MagicButton
          title="My Resume"
          icon={<IoIosPaper className="w-5 h-5" />}
          position="right"
        />
      </a>
      <a data-type="hero" target="_blank" href="./bayoca_bryan_resume.pdf">
        <MagicButton
          title="Linkdn"
          icon={<FaLinkedin className="w-5 h-5" />}
          position="right"
        />
      </a>
      <a data-type="hero" target="_blank" href="./bayoca_bryan_resume.pdf">
        <MagicButton
          title="Github"
          icon={<FaGithub className="w-5 h-5" />}
          position="right"
        />
      </a>
    </>
  );
};

export default Links;
