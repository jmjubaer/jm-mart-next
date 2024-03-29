import DbConnect from "@/utils/DbConnect";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		const db = await DbConnect();
		const productsCollection = db.collection('products');
		const result = await productsCollection.find().toArray();
		return NextResponse.json(result);
	} catch (error) {
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
	}
};