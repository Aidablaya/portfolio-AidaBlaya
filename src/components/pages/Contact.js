import '../../styles/pages/Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import iconRow from '../../images/icono-flecha.svg';

function Contact() {
    return(
        <div>
        <div className='boxContact'>
            <header className='boxContact__header'>
                <p className='boxContact__header--title'>🌩️</p>
            </header>
            <main className='boxContact__main'>
                <div className='boxContact__main--box'>
                    <div className='boxContact__main--boxTwo'>
                        <h1 className='title'>Aida Blaya Balaguer</h1>
                        <ul>
                            <Link to="https://www.linkedin.com/in/aidabla/" className='Link'>
                                <li>Linkedin <FontAwesomeIcon icon={faLinkedin} style={{ color: '#3676a1' }} className='icon'/></li>
                            </Link>
                            
                            <Link to="https://github.com/Aidablaya" className='Link'>
                                <li>Git Hub <FontAwesomeIcon icon={faGithub} style={{color: "#3676a1",}} className='icon' /></li>
                            </Link>

                            <Link to="https://twitter.com/AidaBlaya" className='Link'>
                                <li>
                                    <div className='twitter'>Twitter <FontAwesomeIcon icon={faTwitter} style={{color: "#3676a1",}} className='icon' />
                                    <p>/</p>
                                    <FontAwesomeIcon icon={faXTwitter} style={{color: "#3676a1",}} className='icon' />
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
        <footer className='footer'>
            <Link className='boxFooter__link' to="/">
              <li className='boxFooter__link--li'> <img  src={iconRow} alt="" />🌩️</li>
            </Link>
            </footer>
        </div>
    )
}
export default Contact;