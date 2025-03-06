import { iBlog } from "@/type";
import { MetaTags } from "../_components/atoms/MetaTags";
import { BlogPost } from "../_components/organisms/BlogPost";

async function getBlogData(id: string): Promise<iBlog> {
  const res = await fetch(
    `https://gainfulnoise-us.backendless.app/api/data/blogdata/${id}?loadRelations=author`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog data");
  }

  return res.json();
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Menunggu Promise params selesai
  const data = await getBlogData(id);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://nuntium-phi.vercel.app";
  const currentUrl = `${siteUrl}/blog/${id}`;

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(data.title)}%20${encodeURIComponent(currentUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(data.title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(data.title)}&summary=${encodeURIComponent(data.content?.substring(0, 150) || "")}&source=YourWebsite`,
  };

  return (
    <>
      <MetaTags
        title={data.title || "Blog"}
        description={data.content?.substring(0, 150) || "No description available"}
        image={data.thumbnail || "/default-thumbnail.jpg"}
        url={currentUrl}
        author={data.author?.name || "Anonymous"}
      />
      <BlogPost data={data} currentUrl={currentUrl} shareLinks={shareLinks} />
    </>
  );
}
