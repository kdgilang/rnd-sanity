'use client'

import { BasePropsType } from "src/app/types/BasePropsType"
import Card from "src/app/components/Card"
import Grid from "src/app/components/Grid"
import CardTeam from "src/app/components/CardTeam"
import classNames from "src/app/helpers/classNames"
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

export type CardPropsType = BasePropsType & {
  data: any
}

export default function Cards({ data, className }: CardPropsType) {
  const { cards, view, link } = data

  const len = cards?.length < 5 ? cards?.length : 4
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    responsive: [{
      breakpoint: 1999,
      settings: {
        slidesToShow: len,
        slidesToScroll: 1,
        centerMode: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }
    }],
    prevArrow: <button className="nav-carousel nav-carousel-prev"><AiOutlineArrowLeft/></button>,
    nextArrow: <button className="nav-carousel nav-carousel-next"><AiOutlineArrowRight/></button>
  };

  if (view === 'carousel') {
    return(
      <Slider className="carousel" {...settings}>
        { cards?.map((item: any, i: number) => {
          item.delay = (i+1) * 180
            return (<div key={item._id} className="p-2">
              {
                item._type === 'teamComponent' ?
                  <CardTeam data={item} /> :
                  <Card key={item._id} data={item} />
              }
            </div>)
        }) }
      </Slider>
    )
  } else {
    return (
     <Grid items={cards} link={link} />
    )
  }
}