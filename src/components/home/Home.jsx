import { HeaderSocials } from './HeaderSocials'
import { ScrollDown } from './ScrollDown'
import './home.css'
import Me from './avataaars.png'


export const Home = () => {
  return (
    <div>
        <section className="home container" id="home">
          <div className="intro">
            <img src={Me} alt="" className="home__img" />
            <h1 className="home__name">Hola! Soy Sebastian Britez</h1>
            <span className="home__education">Y soy un desarrollador fullstack, disenador grafico & mentor!</span>
            
            <HeaderSocials></HeaderSocials>

            <a href="#hire" className="btn">Contratame!</a>


            <ScrollDown></ScrollDown>


            
          </div>
        </section>
    </div>
  )
}
