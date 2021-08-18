import { Router } from "express";
import {
  createPhoto,
  deletePhoto,
  getPhoto,
  getPhotos,
  updatePhoto,
} from "../controllers/photo.controller";
import {
  createCliente,
  deleteCliente,
  getCliente,
  getClientes,
  updateCliente,
} from "../controllers/cliente.controller";
import {
  createEmpresa,
  deleteEmpresa,
  getEmpresa,
  getEmpresas,
  getClientesDeEmpresaId,
  getLogosDeEmpresaId,
  getPedidosDeEmpresaId,
  getProductosDeEmpresaId,
  updateEmpresa,
} from "../controllers/empresa.controller";
import {
  createProducto,
  deleteProducto,
  getProducto,
  getProductos,
  updateProducto,
} from "../controllers/producto.controller";
import {
  createPedido,
  deletePedido,
  getPedido,
  getPedidos,
  updatePedido,
  getProductosDePedidoId,
  crearPedidoConProducto,
} from "../controllers/pedido.controller";
import {
  createCategoria,
  deleteCategoria,
  getCategoria,
  getCategorias,
  updateCategoria,
} from "../controllers/categoria.controller";

import multer from "../libs/multer";
const router = Router();

router.route("/photo/").post(multer.single("image"), createPhoto);
router.route("/photos/").get(getPhotos);
router.route("/photo/:id").get(getPhoto).delete(deletePhoto).put(updatePhoto);

router.route("/empresa/").post(createEmpresa);
router.route("/empresas/").get(getEmpresas);
router
  .route("/empresa/:id")
  .get(getEmpresa)
  .delete(deleteEmpresa)
  .put(updateEmpresa);
router.route("/empresa/productos/:id").get(getProductosDeEmpresaId);
router.route("/empresa/clientes/:id").get(getClientesDeEmpresaId);
router.route("/empresa/pedidos/:id").get(getPedidosDeEmpresaId);
router.route("/empresa/logos/:id").get(getLogosDeEmpresaId);


router.route("/cliente/").post(createCliente);
router.route("/clientes/").get(getClientes);
router
  .route("/cliente/:id")
  .get(getCliente)
  .delete(deleteCliente)
  .put(updateCliente);

router.route("/producto/").post(createProducto);
router.route("/productos/").get(getProductos);
router
  .route("/producto/:id")
  .get(getProducto)
  .delete(deleteProducto)
  .put(updateProducto);

router.route("/pedido/").post(createPedido);
router.route("/pedidos/").get(getPedidos);
router.route("/pedido/:id")
  .get(getPedido)
  .delete(deletePedido)
  .put(updatePedido);
router.route("/pedido/producto").post(crearPedidoConProducto)
router.route("/pedido/productos/:id/").get(getProductosDePedidoId);

router.route("/categoria/").post(createCategoria);
router.route("/categorias/").get(getCategorias);
router
  .route("/categoria/:id")
  .get(getCategoria)
  .delete(deleteCategoria)
  .put(updateCategoria);

export default router;
