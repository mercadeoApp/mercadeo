"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    nombre: String,
    cuit: String,
    direccion: String,
    mail: String
});
exports.default = mongoose_1.model('Empresa', schema);
