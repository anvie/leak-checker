import { FC } from "react";
import Image from "next/image";
import imageLoader from "../imageLoader";

interface Props {
  className: string;
}

export const Loading: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Image src="loading.svg" alt="loading animation" loader={imageLoader} width="100%" height="100%" />
    </div>
  );
};



