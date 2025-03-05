import axios from "@/lib/axios";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { title, category, thumbnail, content, userId } = await req.json();
    const userToken = req.cookies.get("user-token")?.value;

    if (!userToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { data } = await axios.post(
      "/data/blogdata",
      {
        title,
        category,
        thumbnail,
        content,
      },
      {
        headers: {
          "user-token": userToken,
        },
      }
    );
    await axios.post(`/data/blogdata/${data.objectId}/author`, [userId], {
        headers: {
          "user-token": userToken,
        },
    });
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof AxiosError) {
      return NextResponse.json(
        { error: error.response?.data || "Create Failed !" },
        { status: error.response?.status || 401 }
      );
    }
    return NextResponse.json({ error: "Something Wrong" }, { status: 500 });
  }
}
