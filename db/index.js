var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://Viktor_Melnyk:12345@ds119220.mlab.com:19220/vm', function (err, db) {
    if (err) throw err;
    
    db.collection('users').find().toArray(function (err, result) {
        if (err) console.log('====================================================');
        
        console.log(result)
    });
    
    // insertDocuments(db);
    
    db.close();
});

var insertDocuments = function(db) {
    // Get the documents collection
    var collection = db.collection('users');
    // Insert some documents
    collection.insertMany([
        {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
        console.log(result);
    });
};