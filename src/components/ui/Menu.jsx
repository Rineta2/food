import { useState } from "react";

import { menuHeading, menuData } from "../data/Data"

import '../scss/Menu.scss'

import { FaWhatsapp } from 'react-icons/fa'

import { Fade, Zoom } from 'react-awesome-reveal'

export default function Menu() {

  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const [visibleItems, setVisibleItems] = useState(4);
  const loadMoreItems = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 4);
  };

  const filteredImages = selectedCategory === 'all'
    ? menuData
    : menuData.filter(img => img.category === selectedCategory);
  return (
    <section className="menu" id="menu">
      <div className="menu__container container grid">

        {
          menuHeading.map((item) => (
            <div className="heading">
              <Fade triggerOnce duration={1000} delay={500} direction='down'>
                <h1>{item.title}</h1>
              </Fade>
              <Fade triggerOnce duration={1000} delay={500} direction='up'>
                <p>{item.text}</p>
              </Fade>
            </div>
          ))
        }

        <div className='filter__button'>
          <Zoom triggerOnce duration={1000} delay={500}>
            <button className={selectedCategory === 'all' ? 'active' : ""} onClick={() => handleFilter('all')}>All</button>
            <button className={selectedCategory === 'food' ? 'active' : ""} onClick={() => handleFilter('food')}>FOOD</button>
            <button className={selectedCategory === 'drink' ? 'active' : ""} onClick={() => handleFilter('drink')}>DRINK</button>
            <button className={selectedCategory === 'coffe' ? 'active' : ""} onClick={() => handleFilter('coffe')}>COFFE</button>
          </Zoom>
        </div>

        <div className="content">
          {
            filteredImages.slice(0, visibleItems).map((item) => (
              <div className="data" key={item.id}>
                <div className="img">
                  <Zoom triggerOnce duration={1000} delay={500}>
                    <img src={item.img} alt="" />
                  </Zoom>
                </div>

                <div className="text">
                  <Fade triggerOnce duration={1000} delay={500} direction='down'>
                    <h2>{item.title}</h2>
                  </Fade>

                  <Zoom triggerOnce duration={1000} delay={500}>
                    <h3>{item.price}</h3>
                  </Zoom>

                  <Fade triggerOnce duration={1000} delay={500} direction='up'>
                    <a href={item.path} target='_blank'><FaWhatsapp className="icons" />{item.button}</a>
                  </Fade>
                </div>
              </div>
            ))
          }

          {filteredImages.length > visibleItems && (
            <div className="btn">
              <button onClick={loadMoreItems}>Lihat Lebih Banyak</button>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
