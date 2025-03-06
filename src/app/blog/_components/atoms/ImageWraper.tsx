import Image from "next/image";

interface ImageWrapperProps {
  src: string;
  alt: string;
}

export const ImageWrapper = ({ src, alt }: ImageWrapperProps) => (
  <Image
    src={src}
    alt={alt}
    width={0}
    height={0}
    sizes="100%"
    className="w-full h-[500px] object-cover"
  />
);
