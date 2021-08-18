import {Schema,model,Document} from 'mongoose'

const schema = new Schema({
    titulo : String,
    descripcion:String,
    imagenPath :String,
    empresa_logo: { type: Schema.Types.ObjectId, ref: "Empresa"},
    productos_photo:[{type :Schema.Types.ObjectId,ref:"Producto"}],   

})
interface IPhoto extends Document{
    titulo : string,
    descripcion:string,
    imagenPath :string,
    empresa_logo:object,
    productos_photo:Array <object>
}
export default model<IPhoto>('Photo',schema)