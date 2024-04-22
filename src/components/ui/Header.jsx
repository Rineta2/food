import { useEffect, useState } from "react";

import { MdOutlineRestaurantMenu } from "react-icons/md";
import { CgMenuRound } from "react-icons/cg";
import { TiTimes } from "react-icons/ti";
import { FaInfoCircle } from "react-icons/fa";

import { navbar, info } from '../data/Data'

import '../scss/Header.scss';

export default function Header() {

  const [show, setShow] = useState(false)

  const [showinfo, setShowInfo] = useState(false)

  // Fix

  const [fix, setFix] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 90) {
        setFix(true)
      } else {
        setFix(false)
      }
    })
  })

  //Active

  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - 50 &&
          scrollPosition < sectionTop + sectionHeight - 50
        ) {
          setActiveLink(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${fix ? 'fixed' : ''}`}>
        <nav className='nav container'>

          <div className="prof">
            <h1><MdOutlineRestaurantMenu className="icons" />Kuluner</h1>
          </div>

          <div className="nav__menu">
            <ul className={`nav__list ${show ? 'show' : ''}`}>
              {
                navbar.map((item) => (
                  <li className='nav__item' key={item.id}>
                    <a href={item.path} className={`nav__link ${activeLink === item.active ? 'active' : ''}`} onClick={() => setShow(false)}>{item.title}</a>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="nav__action">

            <div className="nav__info" onClick={() => setShowInfo(!showinfo)}>
              <FaInfoCircle className="info" />
            </div>

            <div className="nav__toggle" onClick={() => setShow(!show)}>
              {show ? <TiTimes className="close" /> : <CgMenuRound className="menu" />}
            </div>

          </div>

        </nav>
      </header>

      <div className={`info__box ${showinfo ? 'show' : ''}`}>
        {
          info.map((item) => (
            <div className="info__container" key={item.id}>
              <i>{item.icons}</i>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
              <a href={item.path} target="_blank">{item.button} <i>{item.arrow}</i></a>
            </div>
          ))
        }
      </div>
    </>
  )
}
