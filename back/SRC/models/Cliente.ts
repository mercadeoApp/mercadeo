import { Schema, model, Document } from "mongoose";

const schema = new Schema({
  codigo_cliente: Number,
  nombre: {
    type: String,
    // unique: true,
    // lowercase:true,
  },
  apellido: String,
  dni: Number,
  direccion: String,
  mail: String,
  avatar: String,
  empresa: { type: Schema.Types.ObjectId, ref: "Empresa" },
  pedidos_cliente: [{ type: Schema.Types.ObjectId, ref: "Pedido" }],
});
interface ICliente extends Document {
  codigo_cliente: number;
  nombre: string;
  apellido: string;
  cuit: number;
  direccion: string;
  mail: string;
  avatar: string;
  empresa: object;
  pedidos_cliente: Array<object>;
}
export default model<ICliente>("Cliente", schema);
