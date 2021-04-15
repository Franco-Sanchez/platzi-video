import React from 'react';
import  '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
  <div className="carousel-item">
    <img className="carousel-item__img" src="" alt=""/>
    <div className="carousel-item__details">
      <div>
        <img className="carousel-item__details--img" src="" alt=""/>
        <img className="carousel-item__details--img" src="" alt=""/>
      </div>
      <p className="carousel-item__details--title">Título descriptivo</p>
      <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
    </div>
  </div>
)

export default CarouselItem;