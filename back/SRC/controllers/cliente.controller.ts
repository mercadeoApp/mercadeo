import {Request,Response} from 'express'
import path from 'path'
import fs from 'fs-extra'
import Cliente from '../models/Cliente'

export async function getClientes(req:Request,res:Response):Promise <Response>{
  const clientes= await Cliente.find()
  return res.json(clientes)
}
export async function getCliente(req:Request,res:Response):Promise <Response>{
  console.log(req.params.id)
  const cliente = await Cliente.findById(req.params.id)
  return res.json(cliente)
}
export async function createCliente(req:Request,res:Response):Promise <Response>{
  const {codigo_cliente,nombre,apellido,dni,direccion,mail,avatar}=req.body
  console.log(req.body)
  const newCliente = {
    codigo_cliente:codigo_cliente,
    nombre :nombre,
    apellido:apellido,
    dni:dni,
    direccion :direccion,
    mail:mail,
    avatar:avatar,
  }
  const cliente = new Cliente(newCliente)
  await cliente.save()

  return res.json({message:'Cliente successfully saved',cliente})
}

export async function deleteCliente(req:Request,res:Response):Promise <Response>{
  const {id} = req.params
  const cliente = await Cliente.findByIdAndRemove(id)
  return res.json({message:'Delete cliente',cliente})
}

export async function updateCliente(req:Request,res:Response):Promise <Response>{
  console.log(req.params.id)
  const {id} = req.params
  const{nombre,apellido,dni,direccion,mail,avatar}=req.body
  const updatedCliente = await Cliente.findByIdAndUpdate(id,{nombre,apellido,dni,direccion,mail,avatar},{new:true})
  return res.json({message:'Updated cliente',updatedCliente})

}
