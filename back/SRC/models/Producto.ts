import {Schema,model,Document} from 'mongoose'

//agregar precio
const schema = new Schema({
    articulo:Number,
    descripcion:String,
    precio:Number,
    habilitado:Boolean,
    empresa_producto: { type: Schema.Types.ObjectId, ref: "Empresa"},
    pedido_producto: { type: Schema.Types.ObjectId, ref: "Pedido"},
    categoria_producto: { type: Schema.Types.ObjectId, ref: "Producto" },
    photo_producto :{type: Schema.Types.ObjectId, ref: "Photo" },

})
interface IProducto extends Document{
    articulo:number,
    descripcion:string,
    precio:number,
    habilitado:boolean,
    empresa_producto:object
    pedido_producto:object
    categoria_producto:object
    photo_producto:object

    
}
export default model<IProducto>('Producto',schema)