import { NextResponse } from "next/server";

export default async function handler() {
  return NextResponse.json({ message: "Hello Edge!" });
}

export const config = {
  runtime: "experimental-edge",
};