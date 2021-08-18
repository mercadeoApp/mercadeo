import { Request, Response } from "express";
import path from "path";
import fs from "fs-extra";
import Pedido from "../models/Pedido";
import Producto from "../models/Producto";

export async function getPedidos(
  req: Request,
  res: Response
): Promise<Response> {
  const pedidos = await Pedido.find();
  if (pedidos) {
    return res.status(200).json(pedidos);
  } else {
    return res.status(404).json({ message: "no hay pedidos" });
  }
}
export async function getPedido(
  req: Request,
  res: Response
): Promise<Response> {
  console.log(req.params.id);
  const pedido = await Pedido.findById(req.params.id);
  return res.json(pedido);
}
export async function createPedido(
  req: Request,
  res: Response
): Promise<Response> {
  const {
    codigo,
    observaciones,
    entregado,
    fechaDeEntrada,
    fechaDeSalida,
    empresa_pedido,
    cliente_pedido,
  } = req.body;
  console.log(req.body);
  const newPedido = {
    codigo: codigo,
    observaciones: observaciones,
    entregado: entregado,
    fechaDeEntrada: fechaDeEntrada,
    fechaDeSalida: fechaDeSalida,
    empresa_pedido: empresa_pedido,
    cliente_pedido: cliente_pedido,
    productos_pedido: [],
  };
  const pedido = new Pedido(newPedido);
  await pedido.save();

  return res.json({ message: "Pedido successfully saved", pedido });
}

export async function deletePedido(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;
  const pedido = await Pedido.findByIdAndRemove(id);
  return res.json({ message: "Delete pedido", pedido });
}

export async function updatePedido(
  req: Request,
  res: Response
): Promise<Response> {
  console.log(req.params.id);
  const { id } = req.params;
  const {
    codigo,
    observaciones,
    entregado,
    fechaDeEntrada,
    fechaDeSalida,
    empresa_pedido,
    cliente_pedido,
    productos_pedido,
  } = req.body;
  const updatedPedido = await Pedido.findByIdAndUpdate(
    id,
    {
      codigo,
      observaciones,
      entregado,
      fechaDeEntrada,
      fechaDeSalida,
      empresa_pedido,
      cliente_pedido,
      productos_pedido,
    },
    { new: true }
  );
  return res.json({ message: "Updated pedido", updatedPedido });
}
//probar
export async function crearPedidoConProducto(
  req: Request,
  res: Response
): Promise<Response> {
  const { codigo, observaciones, entregado, fechaDeEntrada, fechaDeSalida } =
    req.body;
  const { articulo, descripcion, precio, habilitado } = req.body;
  console.log("req.body",req.body)
  const newPedido = {
    codigo: codigo,
    observaciones: observaciones,
    entregado: entregado,
    fechaDeEntrada: fechaDeEntrada,
    fechaDeSalida: fechaDeSalida,
    empresa_pedido:null,
    cliente_pedido:null,
    productos_pedido: [],
  };
  const newProducto = {
    articulo,
    descripcion,
    precio,
    habilitado,
    empresa_producto:null,
    pedido_producto:null,
    categoria_producto:null,
  };

  const producto = new Producto(newProducto);
  const pedido = new Pedido(newPedido);

  producto.pedido_producto = pedido.id;
  pedido.productos_pedido.push(producto);

  console.log("pedido", pedido);
  console.log("producto", producto);
  await pedido.save();
  await producto.save();

  return res.json({
    message: "se agrego producto a pedido "
     , pedido
  });
}

export async function getProductosDePedidoId(
  req: Request,
  res: Response
): Promise<Response> {
  console.log("id", req.params.id);
  const pedido: any = await Pedido.findById(req.params.id);
  console.log("pedido", pedido);
  var productos = await Promise.all(
    pedido.productos_pedido.map(async (x: number) => {
      return { producto: await Producto.findById(x) };
    })
  );
  console.log("productos", productos);
  return res.json({
    message: "Productos encontrados",
    productos,
  });
}

//falta probar
export async function addProductoAPedido(req: Request, res: Response) {
  const pedido = await Pedido.findById(req.params.id);
  if (pedido) {
    const updatedProducto = ({ pedido_producto: pedido.id } = req.body);

    var productoUpdate = await Producto.findByIdAndUpdate(req.params.id, {
      updatedProducto,
    });
    pedido.productos_pedido.push({ productoUpdate });
    pedido.save();
    return res.status(200).json(pedido);
  } else {
    return res.status(404).json({ messagge: "pedido no encontrado" });
  }
}
