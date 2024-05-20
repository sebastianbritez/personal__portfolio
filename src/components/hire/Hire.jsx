
import { HeaderSocialsMedia } from './HeaderSocials'
import './hire.css'


export const Hire = () => {
  return (
    <section className="contact container section" id='hire'>
      <h2 className="section__title">Contratame</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Contactate conmigo!</h3>
          <p className="contact__details">Puedes mandarme un E-Mail.</p>
          
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Escribe tu nombre aqui.'/>
            </div>


            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Escribe tu e-mail.'/>
            </div>

            </div>

            <div className="contact__form-div contact__form-area">
              <textarea name="" id="" className='contact__form-input' cols="30" rows={10} placeholder='Escribe tu mensaje.'></textarea>
            </div>

            <button className="btn">Enviar Mensaje</button>
            
          


        </form>
      </div>


      <div className="social__media">
        <h3 className='social__title'>No te gustan los E-Mails?</h3>
        <p className='social__description'>Puedes contactarme en mis redes sociales!</p>
      </div>

      <HeaderSocialsMedia></HeaderSocialsMedia>


    </section>
  )
}
