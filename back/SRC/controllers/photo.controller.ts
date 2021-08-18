import {Request,Response} from 'express'
import path from 'path'
import fs from 'fs-extra'
import Photo from '../models/Photo'
import Empresa from '../models/Empresa'
import Cliente from '../models/Cliente'
import Producto from '../models/Producto'

export async function getPhotos(req:Request,res:Response):Promise <Response>{
  const photos= await Photo.find()
  return res.json(photos)
}
export async function getPhoto(req:Request,res:Response):Promise <Response>{
  console.log(req.params.id)
  const photo = await Photo.findById(req.params.id)
  return res.json(photo)
}
export async function createPhoto(req:Request,res:Response):Promise <Response>{
  const {titulo,descripcion}=req.body
  console.log(req.body)
  // console.log(req.file?.path)
  const newPhoto = {
    titulo:titulo,
    descripcion:descripcion,
    imagenPath:req.file?.path
  }
  const photo = new Photo(newPhoto)
  await photo.save()

  return res.json({message:'Photo successfully saved',photo})
}

export async function deletePhoto(req:Request,res:Response):Promise <Response>{
  const {id} = req.params
  const photo = await Photo.findByIdAndRemove(id)
  if(photo){
    await fs.unlink(path.resolve(photo.imagenPath))
  }
  return res.json({message:'Delete photo',photo})
}

export async function updatePhoto(req:Request,res:Response):Promise <Response>{
  console.log(req.params.id)
  const {id} = req.params
  const {titulo,descripcion}=req.body
  const updatedPhoto = await Photo.findByIdAndUpdate(id,{titulo,descripcion},{new:true})
  return res.json({message:'Updated photo',updatedPhoto})

}
