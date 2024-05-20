import './services.css'
import Development from './desarrollador-de-software.png'
import Design from './diseno-grafico.png'
import Mentor from './profesor.png'

const data = [
  {
    id : 1,
    image: Development,
    title: 'Desarrollo Web',
    description:
      'Diseño y construyo sitios web y aplicaciones, utilizando diversos lenguajes y tecnologias. Con un enfoque en crear experiencias eficientes e intuitivas.'
  },

  {
    id : 2,
    image: Design,
    title: 'Marketing & Branding',
    description:
      'Desde crear un logo y flyers publicitarios, hasta idear una identidad de marca, puedo posicionar tu empresa en las redes sociales'
  },

  {
    id : 3,
    image: Mentor,
    title: 'Mentoria',
    description:
      'Comparto mi experiencia y conocimientos asesorandote para alcanzar tus metas. Dentro del ideal que la educacion puede cambiar el mundo.'
  },
]

export const Services = () => {
  return <section className="services container" id='services'>
    <h2 className="section__title">Servicios</h2>

    <div className="services__container grid">
      {data.map(({id, image, title, description}) =>{
        return (
          <div className="services__card" key={id}>
            <img src={image} alt="" className="services__img" />

            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        )
      })}
    </div>
  </section>
}
