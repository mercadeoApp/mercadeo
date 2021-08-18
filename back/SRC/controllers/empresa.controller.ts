import {Request,Response} from 'express'
import path from 'path'
import fs from 'fs-extra'
import Empresa from '../models/Empresa'
import Cliente from '../models/Cliente'
import Photo from '../models/Photo'
import Pedido from '../models/Pedido'
import Producto from '../models/Producto'




export async function getEmpresas(req:Request,res:Response):Promise <Response>{
  const empresas= await Empresa.find()
  return res.json(empresas)
}
export async function getEmpresa(req:Request,res:Response):Promise <Response>{
  console.log(req.params.id)
  const empresa = await Empresa.findById(req.params.id)
  return res.json(empresa)
}
export async function createEmpresa(req:Request,res:Response):Promise <Response>{
  const {codigo_empresa,nombre,cuit,direccion,mail}=req.body
  console.log(req.body)
  const newEmpresa = {
    codigo_empresa:codigo_empresa,
    nombre :nombre,
    cuit:cuit,
    direccion :direccion,
    mail:mail,
    clientes_empresa:[],
    logos_empresa:[],
    pedidos_empresa:[],
    productos_empresa:[],
  }
  const empresa = new Empresa(newEmpresa)
  await empresa.save()

  return res.json({message:'Empresa successfully saved',empresa})
}

export async function deleteEmpresa(req:Request,res:Response):Promise <Response>{
  const {id} = req.params
  const empresa = await Empresa.findByIdAndRemove(id)
  return res.json({message:'Delete empresa',empresa})
}

export async function updateEmpresa(req:Request,res:Response):Promise <Response>{
  console.log(req.params.id)
  const {id} = req.params
  const{codigo_empresa,nombre,cuit,direccion,mail}=req.body
  const updateEmpresa = await Empresa.findByIdAndUpdate(id,{codigo_empresa,nombre,cuit,direccion,mail},{new:true})
  return res.json({message:'Updated empresa',updateEmpresa})

}

export async function getClientesDeEmpresaId(req: Request, res: Response): Promise<Response> {  
  const empresa:any = await Empresa.findById(req.params.id);
  var clientes = await  Promise.all(empresa.clientes_empresa.map(async (x:number) => {
   return {cliente: await Cliente.findById(x)}
  }))
  console.log("clientes",clientes)
  return res.json({
      message: 'clientes encontrados',
      clientes
  });
}
export async function getLogosDeEmpresaId(req: Request, res: Response): Promise<Response> {   
  const empresa:any = await Empresa.findById(req.params.id);
  var logos = await  Promise.all(empresa.logos_empresa.map(async (x:number) => {
   return {logo: await Photo.findById(x)}
  }))
  console.log("logos",logos)
  return res.json({
      message: 'Logos encontrados',
      logos
  });
}
export async function getPedidosDeEmpresaId(req: Request, res: Response): Promise<Response> {   
  const empresa:any = await Empresa.findById(req.params.id);
  var pedidos = await  Promise.all(empresa.pedidos_empresa.map(async (x:number) => {
   return {pedido: await Pedido.findById(x)}
  }))
  console.log("pedidos",pedidos)
  return res.json({
      message: 'Pedidos encontrados',
      pedidos
  });
}

export async function getProductosDeEmpresaId(req: Request, res: Response): Promise<Response> {   
  const empresa:any = await Empresa.findById(req.params.id);
  var productos = await  Promise.all(empresa.productos_empresa.map(async (x:number) => {
   return {producto: await Producto.findById(x)}
  }))
  console.log("productos",productos)
  return res.json({
      message: 'Productos encontrados',
      productos
  });
}


