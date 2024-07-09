import React from 'react';

import { Carousel } from 'flowbite-react';

export default function CarouselImages() {
  return (
    <div>

    <Carousel className= 'mb-8'style={{ height: '600px' }}>
      <img
        alt="..."
        src="/images/Designer.jpeg"
      />
      <img
        alt="..."
        src="/images/Designer1.jpeg"
      />
      <img
        alt="..."
        src="/images/Designer2.jpeg"
      />
      <img
        alt="..."
        src="/images/Designer3.jpeg"
      />
      <img
        alt="..."
        src="/images/Designer4.jpeg"
      />
    </Carousel>
<section className= 'mb-14'>
<div className="mb-14">
  <p>
    Conozca algunas de nuestras instalaciones en el Barrio <a href="https://goo.gl/maps/BPDnv1T7HurnYsAD8" target="_blank">Galerías</a>.
  </p>
</div>
</section>
    </div>
  )
}