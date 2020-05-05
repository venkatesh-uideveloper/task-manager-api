// const mongodb = require('mongodb');
// const mongoClient = mongodb.MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();

MongoClient.connect(
	connectionURL,
	{ useNewUrlParser: true },
	(error, client) => {
		if (error) {
			return console.log('Unable to connect to database!');
		}

		const db = client.db(databaseName);

		// create collection

		// db.collection('users').insertOne(
		// 	{
		// 		_id: id,
		// 		name: 'Raja',
		// 		age: 28,
		// 	},
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log('Unable to insert users');
		// 		}
		// 		console.log(result.ops);
		// 	}
		// );
		// db.collection('tasks').insertMany(
		// 	[
		// 		{
		// 			description: 'clean the house',
		// 			completed: true,
		// 		},
		// 		{
		// 			description: 'renew inspection',
		// 			completed: false,
		// 		},
		// 		{
		// 			description: 'Pot plants',
		// 			completed: false,
		// 		},
		// 	],
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log('Unable to insert task');
		// 		}

		// 		console.log(result.ops);
		// 	}
		// );

		// update collection

		// db.collection('users')
		// 	.updateOne(
		// 		{
		// 			_id: new ObjectID('5eac78254f1ee02d748406ec'),
		// 		},
		// 		{
		// 			$inc: {
		// 				age: 1,
		// 			},
		// 		}
		// 	)
		// 	.then((result) => {
		// 		console.log(result);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
	}
);
