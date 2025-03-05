import { iBlog } from "@/type";
import Image from "next/image";
import { format } from "date-fns";
import Wrapper from "@/components/wrapper";
import { LinkCopyButton } from "../_components/LinkCopyButton";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import Head from "next/head";

// Date Format
function formatDate(date: string | number) {
  return format(new Date(date), "MMMM dd, yyyy");
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(
    `https://gainfulnoise-us.backendless.app/api/data/blogdata/${id}?loadRelations=author`
  );
  const data: iBlog = await res.json();
  return {
    title: data.title,
    description: data.content.substring(0, 150),
    openGraph: {
      images: data.thumbnail
    }
  };
}
export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const res = await fetch(
    `https://gainfulnoise-us.backendless.app/api/data/blogdata/${id}?loadRelations=author`
  );
  const data: iBlog = await res.json();

  const currentUrl = `https://localhost:3000/blog/${id}`;

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(
      data.title
    )}%20${encodeURIComponent(currentUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      currentUrl
    )}&text=${encodeURIComponent(data.title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      currentUrl
    )}&title=${encodeURIComponent(data.title)}&summary=${encodeURIComponent(
      data.content.substring(0, 150)
    )}&source=YourWebsite`,
  };

  return (
    <>
      {/* Open Graph and Twitter meta tags */}
      <Head>
        <meta property="og:title" content={data.title} />
        <meta
          property="og:description"
          content={data.content.substring(0, 150)}
        />
        <meta property="og:image" content={data.thumbnail} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:author" content={data.author.name} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.title} />
        <meta
          name="twitter:description"
          content={data.content.substring(0, 150)}
        />
        <meta name="twitter:image" content={data.thumbnail} />
        <meta name="twitter:url" content={currentUrl} />
      </Head>

      <Wrapper>
        <div className="flex flex-col">
          {/* IMAGE */}
          <section className="">
            <Image
              src={data.thumbnail}
              alt={data.title}
              width={0}
              height={0}
              sizes="100%"
              className="w-full h-[500px] object-cover"
            />
          </section>
          {/* CONTENT */}
          <section className="flex md:w-[70%] lg:w-[50%] mx-auto">
            <div className="flex flex-col pt-10">
              <h1 className="text-3xl font-bold text-center">{data.title}</h1>
              <p className="text-center text-sm text-gray-500 pt-5">
                {data.author.name} <span className="px-2">•</span>{" "}
                {formatDate(data.created)}
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: data.content }}
                className="pt-5"
              ></div>

              {/* SHARE BUTTONS */}
              <div className="flex justify-center space-x-4 pt-10 text-3xl">
                <Link
                  href={shareLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500"
                >
                  <FaWhatsapp />
                </Link>
                <Link
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href={shareLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700"
                >
                  <FaLinkedin />
                </Link>
              <LinkCopyButton url={currentUrl} />
              </div>

              {/* PROFILE */}
              <div className="py-20">
                <h4 className="text-gray-500 text-3xl">ABOUT THE AUTHOR</h4>

                <div className="flex flex-col items-center pt-5 bg-white flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <Image
                    src={
                      "https://res.cloudinary.com/dn6uglajh/image/upload/v1733990935/blank-image_yfczs3.jpg"
                    }
                    alt={data.author?.name || "author"}
                    width={0}
                    height={0}
                    sizes="100%"
                    className="object-cover w-52 h-auto rounded-full md:h-auto md:w-32 md:rounded-full"
                  />
                  <div className="flex flex-col justify-between pl-10 leading-normal max-sm:pt-5">
                    <p className="max-sm:text-2xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {data.author.name}
                    </p>
                    <p className="text-sm text-gray-600">{data.author.email}</p>
                    <p className="max-sm:text-sm mt-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Wrapper>
    </>
  );
}
