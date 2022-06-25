const { Books } = require('../database/models');
const claudinary = require('../config/cloudinary');

const imageFolder = 'images/';


const BookController = {
    async create(req, res) {

        const file = req.files[0]
        const uploadPath = await claudinary.uploads(file.path, 'livraria')

        const newBook = await Books.create({
            ...req.body,

            // forma de upload na aplicação
            // image: imageFolder + file.filename

            // forma de upload com cloudinary
            image: uploadPath.imageUrl
        })

        console.log(file);

        return res.status(201).json({dadosFinais: newBook})
    }
}

module.exports = BookController
