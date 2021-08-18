import {Schema,model,Document} from 'mongoose'

const schema = new Schema({
    codigo:Number,
    nombre : String,
    cuit:String,
    direccion :String,
    mail:String,
    clientes_empresa:[{type :Schema.Types.ObjectId,ref:"Cliente"}],
    logos_empresa:[{type :Schema.Types.ObjectId,ref:"Photo"}],
    pedidos_empresa:[{type :Schema.Types.ObjectId,ref:"Pedido"}],
    productos_empresa:[{type :Schema.Types.ObjectId,ref:"Producto"}]


})

interface IEmpresa extends Document{
    codigo:number,
    nombre : string,
    cuit:string,
    direccion :string,
    mail:string,
    clientes_empresa: Array <object>,
    logos_empresa: Array <object>,
    pedidos_empresa:Array <object>,
    productos_empresa:Array <object>

}
export default model<IEmpresa>('Empresa',schema)