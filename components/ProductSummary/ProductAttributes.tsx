import React from 'react'
import { Header, Divider, Table } from 'semantic-ui-react'

const ProductAttributes = ({
  description,
  medium,
  dimensions,
  style,
}: TProductAttributes) => (
  <section className="container">
    <Header as="h3">Acerca de esta obra</Header>
    <p>{description}</p>

    <Divider />

    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="2">Attributes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell className="attr-name">Medium</Table.Cell>
          <Table.Cell>{medium}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="attr-name">Dimensions</Table.Cell>
          <Table.Cell>{dimensions}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="attr-name">Style</Table.Cell>
          <Table.Cell>{style}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

    <style jsx>{`
      .container :global(.attr-name) {
        text-transform: capitalize;
      }
    `}</style>
  </section>
)

export default ProductAttributes
