/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{     //variables de entorno
    customKey:'customValue',  
  },
  basePath: '/dist',  //ruta donde se genera el proyecto
  compress: true, //comprecion para el proyecto medainte gzip
  async redirects(){   //en esta funcion definimos redirecciones
    return[
      {
        source: '/hola',  //ruta desde donde redirigimos
        destination: '/hello', //tuta a donde redirigimos
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
