import { StaticImageData } from "next/image";

export interface IBackground {
  image: string | StaticImageData;
  isCloseBtn: boolean;
}
