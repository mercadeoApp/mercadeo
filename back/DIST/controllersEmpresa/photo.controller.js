"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePhoto = exports.deletePhoto = exports.createPhoto = exports.getPhoto = exports.getPhotos = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const Photo_1 = __importDefault(require("../models/Photo"));
async function getPhotos(req, res) {
    const photos = await Photo_1.default.find();
    return res.json(photos);
}
exports.getPhotos = getPhotos;
async function getPhoto(req, res) {
    console.log(req.params.id);
    const photo = await Photo_1.default.findById(req.params.id);
    return res.json(photo);
}
exports.getPhoto = getPhoto;
async function createPhoto(req, res) {
    var _a, _b;
    const { titulo, descripcion } = req.body;
    console.log(req.body);
    console.log((_a = req.file) === null || _a === void 0 ? void 0 : _a.path);
    const newPhoto = {
        titulo: titulo,
        descripcion: descripcion,
        imagenPath: (_b = req.file) === null || _b === void 0 ? void 0 : _b.path
    };
    const photo = new Photo_1.default(newPhoto);
    await photo.save();
    return res.json({ message: 'Photo successfully saved', photo });
}
exports.createPhoto = createPhoto;
async function deletePhoto(req, res) {
    const { id } = req.params;
    const photo = await Photo_1.default.findByIdAndRemove(id);
    if (photo) {
        await fs_extra_1.default.unlink(path_1.default.resolve(photo.imagenPath));
    }
    return res.json({ message: 'Delete photo', photo });
}
exports.deletePhoto = deletePhoto;
async function updatePhoto(req, res) {
    console.log(req.params.id);
    const { id } = req.params;
    const { titulo, descripcion } = req.body;
    const updatedPhoto = await Photo_1.default.findByIdAndUpdate(id, { titulo, descripcion }, { new: true });
    return res.json({ message: 'Updated photo', updatePhoto });
}
exports.updatePhoto = updatePhoto;
