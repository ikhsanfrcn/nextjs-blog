import axios from "@/lib/axios";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const userToken = req.cookies.get("user-token")?.value;
    if (!userToken) {
      console.log("Unauthorized");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data } = await axios.get("/services/Auth/current", {
      headers: {
        "user-token": userToken,
      },
    });

    return NextResponse.json(data);
  } catch (err) {
    if (err instanceof AxiosError) {
      return NextResponse.json(
        { error: err.response?.data || "Login Failed !" },
        { status: err.response?.status || 401 }
      );
    }
    return NextResponse.json({ error: "Terjadi kesalahan" }, { status: 500 });
  }
}
