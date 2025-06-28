import { NextResponse } from "next/server";
import { artists } from "@/lib/data/artists"; // keep your current data import

export async function GET() {
  return NextResponse.json(artists);
}
