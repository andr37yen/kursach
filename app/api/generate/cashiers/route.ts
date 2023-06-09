import { User, PrismaClient, Prisma } from "@prisma/client";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import dbClient from "@utils/dbConnect";

const prisma: PrismaClient = dbClient()!;

export async function POST(request: NextRequest) {
  const data = await request.json();

  const users: {
    [key: string]: string | object;
  }[] = (await axios.get(`https://randomuser.me/api/?results=${data.amount}`))
    .data.results;

  users.forEach(async (e: any) => {
    let user: Prisma.CashierCreateInput;
    user = {
      fname: e.name.first,
      sname: e.name.last,
    };

    const res = await prisma.cashier.create({ data: user });
  });

  return new NextResponse("", { status: 200 });
}
