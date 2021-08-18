import {Request,Response} from 'express'
import path from 'path'
import fs from 'fs-extra'
import Producto from '../models/Producto'

export async function getProductos(req:Request,res:Response):Promise <Response>{
  const productos= await Producto.find()
  return res.json(productos)
}
export async function getProducto(req:Request,res:Response):Promise <Response>{
  console.log(req.params.id)
  const producto = await Producto.findById(req.params.id)
  return res.json(producto)
}
export async function createProducto(req:Request,res:Response):Promise <Response>{
  const {articulo,descripcion,precio,habilitado,empresa_producto,
    pedido_producto,categoria_producto}=req.body
  console.log(req.body)
  const newProducto = {
    articulo:articulo,
    descripcion:descripcion,
    precio:precio,
    habilitado:habilitado,
    empresa_producto:empresa_producto,
    pedido_producto:pedido_producto,
    categoria_producto:categoria_producto,
  }
  const producto = new Producto(newProducto)
  await producto.save()

  return res.json({message:'Producto successfully saved',producto})
}

export async function deleteProducto(req:Request,res:Response):Promise <Response>{
  const {id} = req.params
  const producto = await Producto.findByIdAndRemove(id)
  return res.json({message:'Delete producto',producto})
}

export async function updateProducto(req:Request,res:Response):Promise <Response>{
  console.log(req.params.id)
  const {id} = req.params
  const {articulo,descripcion,precio,habilitado,empresa_producto,
    pedido_producto,categoria_producto}=req.body
  const updateProducto = await Producto.findByIdAndUpdate(id,{articulo,descripcion,precio,
    habilitado,empresa_producto,pedido_producto,categoria_producto},{new:true})
  return res.json({message:'Updated producto',updateProducto})

}
