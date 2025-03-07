import Link from "next/link";

export const SidebarCategory: React.FC = () => {
  return (
    <div className="border border-black py-2">
      <div>
        <p className="text-xl font-bold text-center px-10">Category</p>
        <ul className="px-2">
          <li className="hover:font-bold">
            <Link href="/category/technology">Technology</Link>
          </li>
          <li className="hover:font-bold">
            <Link href="/category/health">Health</Link>
          </li>
          <li className="hover:font-bold">
            <Link href="/category/news">News</Link>
          </li>
          <li className="hover:font-bold">
            <Link href="/category/sports">Sports</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
