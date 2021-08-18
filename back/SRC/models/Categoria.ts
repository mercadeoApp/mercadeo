import { Schema, model, Document } from "mongoose";

//agregar precio
const schema = new Schema({
  codigo: Number,
  tipo: String,
  producto_categoria: { type: Schema.Types.ObjectId, ref: "Producto" },


});

interface IPedido extends Document {
  codigo: number;
  tipo:string;
  producto_categoria: object;
}
export default model<IPedido>("Categoria", schema);
