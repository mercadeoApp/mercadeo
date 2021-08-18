import multer from 'multer'
import path from 'path'
import {uuid} from 'uuidv4'


const storage = multer.diskStorage({
    destination:'UPLOADS',
    filename:(req,file,cb) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
})

export default multer({storage})