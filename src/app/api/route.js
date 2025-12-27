import { connect } from "@/app/lib/dbConnect";

export async function GET(request) {
    const feedbackCollection = await connect("feedbacks");
    const result = await feedbackCollection.find().toArray();
    return Response.json(result);
}

export async function POST(request) {
    const body = await request.json();
    const feedbackCollection = await connect("feedbacks");
    const result = await feedbackCollection.insertOne(body);
    return Response.json(result);
}

