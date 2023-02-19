import mongoose from "mongoose";

class mongoDb {
    public async connectDb (mongoUrl: string) {
        
try {
    await mongoose.connect(mongoUrl);
    console.log('connected to MongoDb')
} catch (error) {
    throw new Error('MongoDB not connected')
}
        
        
    }
}

export const MongoDb = new mongoDb();