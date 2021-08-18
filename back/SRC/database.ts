import { connect } from "mongoose";

 export async function startConnection() {
  const db= await connect('mongodb://localhost/mercadeo-db',{
    useNewUrlParser:true,
    useUnifiedTopology: true ,
    useFindAndModify:false
})
console.log('Datebase is connected')
}