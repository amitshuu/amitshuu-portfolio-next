import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface IService {
  serviceName: string;
  serviceIcon: string;
  serviceDescription: string;
}

export interface IProject {
  projectName: string;
  projectImage: StaticImageData;
  projectDesc: string;
  projectSubImages?: StaticImageData[];
  projectCategory: string;
  usefulLinks?: IUsefulLinks[];
}

export interface IUsefulLinks {
  websiteUrl?: string;
  gitRepo?: string;
  youtubeLink?: string;
}
