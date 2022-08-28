
import Image from "next/image";
import imageLoader from "../imageLoader";

export const LoadingWave = () => {
  return (
    <div>
      <Image src="loading-wave.svg" alt="loading animation" loader={imageLoader} width="100%" height="100%" />
    </div>
  );
};



