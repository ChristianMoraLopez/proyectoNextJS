import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  //document en nxtjs es un componente especial que se renderiza en el servidor
  //y no en el cliente
  //Sirve para agregar cosas al head del html
  render() {
    return (
      <Html lang="es">
        <Head>
          {/** FavIcon */}
          {/** WebFont */}
          {/** stylesheets */}
          {/** scripts */}
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
        
      </Html>

  

    )
  }
}

export default MyDocument
