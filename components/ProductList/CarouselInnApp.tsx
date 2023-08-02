import React from 'react';

import { Carousel } from 'flowbite-react';

export default function CarouselImages() {
  return (
    <div>

    <Carousel className= 'mb-8'style={{ height: '600px' }}>
      <img
        alt="..."
        src="https://media.discordapp.net/attachments/941971306004504638/1135690965932318862/MichelleGreen_In_an_art_gallery_various_paintings_and_unique_wo_d562693c-07fe-4c70-a000-33c00b6076f4.png?width=676&height=676"
      />
      <img
        alt="..."
        src="https://media.discordapp.net/attachments/941971306004504638/1135690943903834112/MichelleGreen_In_an_art_gallery_various_paintings_and_unique_wo_aab04689-38e3-4f48-8c34-ad7d6f131127.png?width=676&height=676"
      />
      <img
        alt="..."
        src="https://media.discordapp.net/attachments/945077390839787570/1135480627743961098/meebee_large_carved_block_of_melted_colorful_plastic_on_a_tabl_b777636b-96e1-4bbd-9ed5-0a0c981a0221.png?width=794&height=676"
      />
      <img
        alt="..."
        src="https://media.discordapp.net/attachments/989739710081531985/1134167946684551288/jeanguelre_a_cinematic_front_shot_of_a_cool_indoor_wide_open_ar_18ad8165-7b94-4ef8-9a22-7ed70a99a20b.png?width=1206&height=676"
      />
      <img
        alt="..."
        src="https://media.discordapp.net/attachments/1072899954525356072/1129249856519684167/storhuvud_real_life_birddragondinosaur_colorfull_pink_full_siz_35ef0f86-1352-45c6-9165-176546070603.png?width=676&height=676"
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