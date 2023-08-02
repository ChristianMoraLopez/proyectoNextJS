import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

import { PosMeColoreo } from '@components/SVGIcons'

const ModalHeaderContent = () => {
  return (
    <div className="container  md:container md:mx-auto ">
      <Grid columns={2}>
        <Grid.Row verticalAlign={'middle'}>
          <Grid.Column width="5" >
          <div className="container  min-h-full">
            <PosMeColoreo  className='w-32 h-32  sm:w-36 md:h-36 md:w-48 md:h-48 object-contain' />

          </div>
          </Grid.Column>
          <Grid.Column width="11">
            <Header as="h2">Coloreaste la C</Header> 
            <p>La tocaste tanto que se coloreo</p>
            <p>
              ¡Eres una persona curiosa, te gusta explorar!
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default ModalHeaderContent
