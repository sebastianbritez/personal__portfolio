import './about.css'
import pic from './avataaars.png'
export const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Sobre mi</h2>

      <div className="about__container grid">
        <img src={pic} alt="" className='about__img'/>

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde officiis labore corrupti quos libero eum et ea provident repellat pariatur vel, doloremque quis, ex voluptates?</p>
            <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde officiis labore corrupti quos libero eum et ea provident repellat pariatur vel, doloremque quis, ex voluptates?</p>
            <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde officiis labore corrupti quos libero eum et ea provident repellat pariatur vel, doloremque quis, ex voluptates?</p>

            <a href="" className="btn">Descargar CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Desarrollo</h3>
                <span className="skills__number ">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>



            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Diseño Grafico</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage design"></span>
              </div>
            </div>



            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Marketing & Branding</h3>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage branding"></span>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
