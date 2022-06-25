const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'viniantonello', 
    api_key: '828449335728531', 
    api_secret: 'q6IIN9p1u0_y4H2vFwKwBQV5NhE' 
  });

  // método que vai executar o upload no claudinary
  // esperar uma promessa
  // config o tipo de resultado que queromos

  exports.uploads = (file, folder) => {
    
    return new Promise(
        (resolve) => {
            cloudinary.uploader.upload(
                file,
                (cloudinaryReturn) => {
                    resolve({
                        imageUrl: cloudinaryReturn.url
                    })
                },
                {
                    folder: folder,
                    resource_type: "auto"
                }
            )
        }
    )

  }