import Image from "next/image";

interface AuthorProfileProps {
  name: string;
  email: string;
  avatar: string;
}

export const AuthorProfile = ({ name, email, avatar }: AuthorProfileProps) => (
  <div className="flex flex-col items-center pt-5 bg-white flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <Image
      src={avatar}
      alt={name || "author"}
      width={0}
      height={0}
      sizes="100%"
      className="object-cover w-52 h-auto rounded-full md:h-auto md:w-32 md:rounded-full"
    />
    <div className="flex flex-col justify-between pl-5 md:pl-10 leading-normal">
      <p className="max-sm:text-2xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </p>
      <p className="text-sm text-gray-600">{email}</p>
      <p className="text-sm text-gray-600 line-clamp-2 md:line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sint laboriosam fugit magni voluptatum at beatae a et consequuntur vitae.</p>
    </div>
  </div>
);
