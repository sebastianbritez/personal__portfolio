import './sidebar.css'
import Logo from './logo__icono-2.png'

export const Sidebar = () => {
  return (
    <div>
        <aside className='aside'>
          <a href="" className="nav__logo"><img src= {Logo} alt="" /></a>
          
          <nav className="nav">
            <div className="nav__menu">
              <ul className="nav__list">
                <li className="nav__item"><a href="#home" className="nav__link"><i className="icon-home"></i></a></li>
                <li className="nav__item"><a href="#about" className="nav__link"><i className="icon-user"></i></a></li>
                <li className="nav__item"><a href="#services" className="nav__link"><i className="icon-briefcase"></i></a></li>
                <li className="nav__item"><a href="#hire" className="nav__link"><i className="icon-phone"></i></a></li>
              </ul>
            </div>
          </nav>

          <div className="nav__footer"><span className="copyright">&copy; 2024-</span></div>
        </aside>
    </div>
  )
}
