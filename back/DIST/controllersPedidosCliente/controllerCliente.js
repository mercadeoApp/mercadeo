"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCliente = exports.deleteCliente = exports.createCliente = exports.getCliente = exports.getClientes = void 0;
const Cliente_1 = __importDefault(require("../models/Cliente"));
async function getClientes(req, res) {
    const clientes = await Cliente_1.default.find();
    return res.json(clientes);
}
exports.getClientes = getClientes;
async function getCliente(req, res) {
    console.log(req.params.id);
    const cliente = await Cliente_1.default.findById(req.params.id);
    return res.json(cliente);
}
exports.getCliente = getCliente;
async function createCliente(req, res) {
    const { nombre, cuit, direccion, mail } = req.body;
    console.log(req.body);
    const newCliente = {
        nombre: nombre,
        cuit: cuit,
        direccion: direccion,
        mail: mail
    };
    const cliente = new Cliente_1.default(newCliente);
    await cliente.save();
    return res.json({ message: 'Cliente successfully saved', cliente });
}
exports.createCliente = createCliente;
async function deleteCliente(req, res) {
    const { id } = req.params;
    const cliente = await Cliente_1.default.findByIdAndRemove(id);
    return res.json({ message: 'Delete cliente', cliente });
}
exports.deleteCliente = deleteCliente;
async function updateCliente(req, res) {
    console.log(req.params.id);
    const { id } = req.params;
    const { nombre, cuit, direccion, mail } = req.body;
    const updatedCliente = await Cliente_1.default.findByIdAndUpdate(id, { nombre, cuit, direccion, mail }, { new: true });
    return res.json({ message: 'Updated cliente', updatedCliente });
}
exports.updateCliente = updateCliente;
