'use client';

import { iBlog } from "@/type";
import { format } from "date-fns";
import Card from "@/components/card";

// Fungsi format tanggal
function formatDate(date: string | number) {
  return format(new Date(date), "MMMM dd, yyyy");
}

export default function BlogCard({ blog }: { blog: iBlog }) {
  return (
    <div>
      <Card
        category={blog.category}
        title={blog.title}
        thumbnail={blog.thumbnail}
        content={blog.content}
        created={formatDate(blog.created)}
        name={blog.author.name}
        email={blog.author.email}
        objectId={blog.objectId}
      />
    </div>
  );
}
