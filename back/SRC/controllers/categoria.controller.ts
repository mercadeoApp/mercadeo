import {Request,Response} from 'express'
import path from 'path'
import fs from 'fs-extra'
import Categoria from '../models/Categoria'

export async function getCategorias(req:Request,res:Response):Promise <Response>{
  const categorias= await Categoria.find()
  return res.json(categorias)
}
export async function getCategoria(req:Request,res:Response):Promise <Response>{
  console.log(req.params.id)
  const categoria = await Categoria.findById(req.params.id)
  return res.json(categoria)
}
export async function createCategoria(req:Request,res:Response):Promise <Response>{
  const {codigo,tipo,producto_categoria}=req.body
  console.log(req.body)
  const newCategoria = {
    codigo:codigo,
    tipo:tipo,
    producto_categoria:producto_categoria
  }
  const categoria = new Categoria(newCategoria)
  await categoria.save()

  return res.json({message:'Categoria successfully saved',categoria})
}

export async function deleteCategoria(req:Request,res:Response):Promise <Response>{
  const {id} = req.params
  const categoria = await Categoria.findByIdAndRemove(id)
  return res.json({message:'Delete categoria',categoria})
}

export async function updateCategoria(req:Request,res:Response):Promise <Response>{
  console.log(req.params.id)
  const {id} = req.params
  const {codigo,tipo,producto_categoria}=req.body
  const updateProducto = await Categoria.findByIdAndUpdate(id,{codigo,tipo,producto_categoria},{new:true})
  return res.json({message:'Updated categoria',updateProducto})

}
