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
      'Como desarrollador web, diseño y construyo sitios y aplicaciones digitales, utilizando tecnologías como HTML, CSS y JavaScript. Mi enfoque es crear experiencias en línea atractivas y funcionales para mis clientes.'
  },

  {
    id : 2,
    image: Design,
    title: 'Diseño Grafico',
    description:
      'Como diseñador gráfico, mi objetivo es comunicar visualmente ideas y conceptos. Desde la creación de logotipos hasta el diseño de materiales impresos y digitales, utilizo mi creatividad y habilidades técnicas para producir piezas visuales impactantes que transmitan el mensaje deseado.'
  },

  {
    id : 3,
    image: Mentor,
    title: 'Mentoria',
    description:
      'Como mentor, guío y apoyo a individuos en su desarrollo profesional y personal. Comparto mi experiencia y conocimientos para ayudarles a alcanzar sus metas y superar desafíos. A través de la escucha activa, retroalimentación constructiva y el establecimiento de metas alcanzables, empoderamos juntos el crecimiento y el éxito.'
  },
]

export const Services = () => {
  return <section className="services container" id='#services'>
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
