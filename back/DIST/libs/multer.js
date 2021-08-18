"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const uuidv4_1 = require("uuidv4");
const storage = multer_1.default.diskStorage({
    destination: 'UPLOADS',
    filename: (req, file, cb) => {
        cb(null, uuidv4_1.uuid() + path_1.default.extname(file.originalname));
    }
});
exports.default = multer_1.default({ storage });
