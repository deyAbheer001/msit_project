import { NextResponse } from "next/server";

export function GET(request) {
    return NextResponse.json({name:'Anil', age:29}, {status:200})
}