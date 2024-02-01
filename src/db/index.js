import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connect_DB = async function () {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected at HOST : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Mongo db connection error", error)
        process.exit(1)
    }
}

export default connect_DB