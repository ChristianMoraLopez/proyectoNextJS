import React from 'react'
import { Image, Header } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'

const artFacts = [
  {
    title: 'Art can be traced back thousands of years',
    content:
      'Artistic expression has been an essential part of human culture for millennia. Archaeologists have discovered ancient cave paintings dating back tens of thousands of years, providing valuable insights into the lives of our ancestors.',
  },
  {
    title: 'The Renaissance was a pivotal art movement',
    content:
      'The Renaissance, which originated in 14th century Italy, marked a period of significant cultural and artistic rebirth. It gave rise to legendary artists like Leonardo da Vinci, Michelangelo, and Raphael, whose masterpieces continue to inspire awe and admiration.',
  },
  {
    title: 'Modern art introduced new forms of creativity',
    content:
      'The 19th and 20th centuries witnessed a dramatic shift in artistic styles, leading to the emergence of modern art. Artists like Pablo Picasso, Vincent van Gogh, and Wassily Kandinsky challenged traditional norms, exploring new ways to depict the world through their art.',
  },
  {
    title: 'Art is subjective',
    content:
      'One of the fascinating aspects of art is its subjectivity. Different individuals can interpret a single piece of art in diverse ways, influenced by their emotions, experiences, and cultural backgrounds.',
  },
  {
    title: 'Art therapy can have powerful effects',
    content:
      'Art therapy is a form of expressive therapy that can help individuals cope with emotional and psychological challenges. Engaging in creative processes can promote self-discovery, healing, and personal growth.',
  },
]

const AboutPage = () => {
  return (
   <Layout>

     <section>
       <h1 className='text-4xl'>
         Fascinating Facts About Art
       </h1>
       <figure>
         <Image src="/images/art.jpg" alt="Art" />
         <figcaption>
           Originally from{' '}
           <a
             target="_blank"
             href="https://www.youtube.com/@AntonioGarciaVillaran"
           >
             Art Facts Source
           </a>
         </figcaption>
       </figure>
       <ol>
         {artFacts.map(({ title, content }) => (
           <li key={title}>
             <h3 className="ui header">{title}</h3>
             <p>{content}</p>
           </li>
         ))}
       </ol>
     </section>

     <style jsx>{`
       figure,
       ol {
         padding: 0;
         margin: 0;
       }

       figure {
         margin: 2rem auto 3rem;
         text-align: center;
       }
       figcaption {
         margin-top: 0.5rem;
         font-site: 0.7rem;
         color: grey;
       }

       ol {
         list-style: none;

         // Look ma! Responsive grid with no Media queries :)
         // https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
         display: grid;
         grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
         grid-gap: 4.5rem 3rem;

         // Look ma! A CSS Counter :)
         // https://moderncss.dev/totally-custom-list-styles/
         counter-reset: orderedlist;
       }
       li::before {
         counter-increment: orderedlist;
         content: counter(orderedlist);

         // Boring stuff
         position: absolute;
         top: -43px;
         left: -5px;
         color: #cecece;
         font-size: 5rem;
         font-weight: bold;
       }

       li {
         position: relative;
       }
       h3:first-child {
         // why the first-child selector you may ask...
         // to gain specificity and thus avoid using '!important' :)
         padding-left: 40px;
         margin-bottom: 2rem;
       }
     `}</style>
   </Layout>
  
  )
}

export default AboutPage
