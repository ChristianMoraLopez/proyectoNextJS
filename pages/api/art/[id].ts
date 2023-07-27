import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'
import enablePublicAccess from '@cors'




const ArtDetail = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    //enablePublicAccess(request, response) sirve para que se pueda acceder a la api desde cualquier lugar
    
    await enablePublicAccess(request, response)

    const db = new DB()
    const artId = request.query.id as string

    const art = await db.getById(artId)

    // Notice: We're using Next.JS response helpers here :)
    // https://nextjs.org/docs/api-routes/response-helpers
    response.status(200).json(art)
  } catch (e) {
    console.error(e)
    response.status(404).end()
  }
}

export default ArtDetail
