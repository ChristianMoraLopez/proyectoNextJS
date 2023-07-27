import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

import { PosMeColoreo } from '@components/SVGIcons'

const ModalHeaderContent = () => {
  return (
    <div className="container">
      <Grid columns={2}>
        <Grid.Row verticalAlign={'middle'}>
          <Grid.Column width="5">
            <PosMeColoreo size="154px" />
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

      <style jsx>{`
        .container {
          padding: 2rem;
        }
      `}</style>
    </div>
  )
}

export default ModalHeaderContent
