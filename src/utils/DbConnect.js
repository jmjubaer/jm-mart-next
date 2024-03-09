import { MongoClient, ServerApiVersion } from 'mongodb';
/**
 * @type {import("mongodb").Db}
 */
let db;

const DbConnect = async () => {
	if (db) return db;
	try {
		const uri = `mongodb+srv://mdjubaerm16247:jubaer12islam@cluster0.wxf5f5n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
		// const uri = "mongodb+srv://mdjubaerm16247:jubaer12islam@cluster0.nxpfuui.mongodb.net/?retryWrites=true&w=majority";
		
		// Create a MongoClient with a MongoClientOptions object to set the Stable API version
		const client = new MongoClient(uri, {
			serverApi: {
				version: ServerApiVersion.v1,
				strict: true,
				deprecationErrors: true
			}
		});
		db = client.db('jm-mart');
		await client.db('admin').command({ ping: 1 });
		console.log('Pinged your deployment. You successfully connected to MongoDB!');
		return db;
	} catch (error) {
		console.log(error.message);
		throw error;
	}
};

export default DbConnect;
