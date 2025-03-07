"use client";
import { iBlog } from "@/type";
import { HeroSection } from "@/components/HeroSection";
import Wrapper from "@/components/wrapper";
import { MainTemplate } from "@/template/MainTemplate";
import { Suspense } from "react";
import BlogCard from "@/components/organisms/BlogCard";

import { useEffect, useState } from "react";
import { SidebarCategory } from "@/components/atoms/SidebarCategory";

export default function Home() {
  const [data, setData] = useState<iBlog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://gainfulnoise-us.backendless.app/api/data/blogdata?loadRelations=author"
      );
      const data: iBlog[] = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <MainTemplate>
      <Wrapper>
        <HeroSection />
        <section className="flex flex-col">
          <p className="text-2xl font-bold text-center">Latest Blogs</p>
          <div className="flex justify-between">
            <div className="flex mx-auto justify-center pt-10">
              <div className="flex flex-col gap-10">
                <Suspense fallback={<p>Loading...</p>}>
                  {data.map((item, idx) => (
                    <BlogCard key={idx} blog={item} />
                  ))}
                </Suspense>
              </div>
            </div>
            <div className="grid grid-rows-12">
              <SidebarCategory />
            </div>
          </div>
        </section>
      </Wrapper>
    </MainTemplate>
  );
}
