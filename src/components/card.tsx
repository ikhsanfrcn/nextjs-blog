import Link from "next/link";

interface ICardBlog {
  title: string;
  thumbnail: string;
  email: string;
  name: string;
  content: string;
  created: string;
  category: string;
  objectId: string;
}

export default function Card({
  title,
  thumbnail,
  name,
  // email,
  content,
  category,
  created,
  objectId,
}: ICardBlog) {
  return (
    <section className="container mx-auto lg:w-[70%]">
      <Link href={`/blog/${objectId}`}>
        <div className="p-5 md:flex hover:shadow-md hover:scale-105 transition duration-300 ease-in-out ">
          <div
            className="h-48 md:w-70 flex-none bg-cover"
            style={{ backgroundImage: `url(${thumbnail})` }}
            title={title}
          ></div>
          <div className="max-md:pt-5 md:pl-4 flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-600 flex items-center">
                {category.toUpperCase()}
              </p>
              <h2 className="text-gray-900 font-bold text-xl mb-2 line-clamp-1">{title}</h2>
              <p className="text-gray-500 leading-none">
                {name} <span className="px-2">•</span> {created}
              </p>
              <p
                dangerouslySetInnerHTML={{ __html: content }}
                className="text-gray-700 text-base line-clamp-5 pt-1"
              />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}