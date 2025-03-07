import { iBlog } from "@/type";
import { BlogPost } from "../_components/organisms/BlogPost";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://nextjs-loremipsum.vercel.app";

async function getBlogData(id: string): Promise<iBlog> {
  const res = await fetch(
    `https://gainfulnoise-us.backendless.app/api/data/blogdata/${id}?loadRelations=author`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog data");
  }

  return res.json();
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getBlogData(id);

  const currentUrl = `${siteUrl}/blog/${id}`;

  return {
    title: data.title || "Blog",
    description: data.content?.substring(0, 150) || "No description available",
    openGraph: {
      title: data.title || "Blog",
      description: data.content?.substring(0, 150) || "No description available",
      url: currentUrl,
      images: [
        {
          url: data.thumbnail || "/default-thumbnail.jpg",
          width: 1200,
          height: 630,
          alt: data.title || "Blog Thumbnail",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title || "Blog",
      description: data.content?.substring(0, 150) || "No description available",
      images: [data.thumbnail || "/default-thumbnail.jpg"],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getBlogData(id);

  const currentUrl = `${siteUrl}/blog/${id}`;

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(data.title)}%20${encodeURIComponent(currentUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(data.title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(data.title)}&summary=${encodeURIComponent(data.content?.substring(0, 150) || "")}&source=YourWebsite`,
  };

  return <BlogPost data={data} currentUrl={currentUrl} shareLinks={shareLinks} />;
}
