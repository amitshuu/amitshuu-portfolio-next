import { AiFillGithub } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import { IUsefulLinks } from "../constants/types";

type Props = {
  links: IUsefulLinks[];
};

const ProjectLinks = ({ links }: Props) => {
  return (
    <div className="flex w-full">
      {links.map((link) => (
        <div key={crypto.randomUUID()} className="flex">
          {link.gitRepo && (
            <a href={link.gitRepo} target="_blank">
              <AiFillGithub className="mr-3 text-3xl transition-all duration-100 rounded-lg cursor-pointer text-primary-blue hover:text-primary-blue-hover hover:transform hover:scale-105 " />
            </a>
          )}
          {link.websiteUrl && (
            <a href={link.websiteUrl} target="_blank">
              <TbWorldWww className="mr-3 text-3xl transition-all duration-100 rounded-lg cursor-pointer text-primary-blue hover:text-primary-blue-hover hover:transform hover:scale-105 " />
            </a>
          )}
          {link.youtubeLink && (
            <a href={link.youtubeLink} target="_blank">
              <BsYoutube className="mr-3 text-3xl transition-all duration-100 rounded-lg cursor-pointer text-primary-blue hover:text-primary-blue-hover hover:transform hover:scale-105 " />
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectLinks;
