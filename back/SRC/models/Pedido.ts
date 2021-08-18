import { Schema, model, Document } from "mongoose";

//agregar precio
const schema = new Schema({
  codigo: Number,
  observaciones: String,
  entregado: Boolean,
  fechaDeEntrada: {
    type: Date,
    default: Date.now,
  },
  fechaDeSalida: {
    type: Date,
    default: new Date(),
  },
  empresa_pedido: { type: Schema.Types.ObjectId, ref: "Empresa" },
  cliente_pedido: { type: Schema.Types.ObjectId, ref: "Cliente" },
  productos_pedido: [{ type: Schema.Types.ObjectId, ref: "Producto" }],
});

interface IPedido extends Document {
  codigo: number;
  observaciones: string;
  entregado: boolean;
  fechaDeEntrada?: Date;
  fechaDeSalida?: Date;
  empresa_pedido: object;
  cliente_pedido: object;
  productos_pedido: Array<object>;
}
export default model<IPedido>("Pedido", schema);
