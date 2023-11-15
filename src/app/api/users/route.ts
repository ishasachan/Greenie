import { PrismaClient } from '@prisma/client/edge'
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  try {
    const {username, email, phone} = await request.json();

    const user = await prisma.user.create({
     data: {
        username,
        email,
        phone,
    },
    });
    return new NextResponse(JSON.stringify(user), { 
     status: 201, 
     headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return new NextResponse("User with email already exists", {
        status: 409,
      });
    }
    return new NextResponse(error.message, { status: 500 });
  }
}
