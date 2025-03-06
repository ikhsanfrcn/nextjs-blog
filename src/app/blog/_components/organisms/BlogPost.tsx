import { format } from "date-fns";
import { ImageWrapper } from "../atoms/ImageWraper";
import { ShareButtons } from "../molecules/ShareButtons";
import { AuthorProfile } from "../atoms/AuthorProfile";
import { iBlog } from "@/type";
import Wrapper from "@/components/wrapper";

const formatDate = (date: string | number) => format(new Date(date), "MMMM dd, yyyy");

interface BlogPostProps {
  data: iBlog;
  currentUrl: string;
  shareLinks: {
    whatsapp: string;
    facebook: string;
    twitter: string;
    linkedin: string;
  };
}

export const BlogPost = ({ data, currentUrl, shareLinks }: BlogPostProps) => (
    <Wrapper >
  <div className="flex flex-col">
    {/* IMAGE */}
    <section>
      <ImageWrapper src={data.thumbnail} alt={data.title} />
    </section>
    {/* CONTENT */}
    <section className="flex md:w-[70%] lg:w-[50%] mx-auto">
      <div className="flex flex-col pt-10">
        <h1 className="text-3xl font-bold text-center">{data.title}</h1>
        <p className="text-center text-sm text-gray-500 pt-5">
          {data.author.name} <span className="px-2">•</span> {formatDate(data.created)}
        </p>
        <div dangerouslySetInnerHTML={{ __html: data.content }} className="pt-5" />
        <ShareButtons shareLinks={shareLinks} currentUrl={currentUrl} />
      </div>
    </section>
    {/* AUTHOR PROFILE */}
    <div className="container">
      <h4 className="text-gray-500 text-3xl">ABOUT THE AUTHOR</h4>
      <AuthorProfile
        name={data.author.name}
        email={data.author.email}
        avatar="https://res.cloudinary.com/dn6uglajh/image/upload/v1733990935/blank-image_yfczs3.jpg"
      />
    </div>
  </div>
  </Wrapper>
);
