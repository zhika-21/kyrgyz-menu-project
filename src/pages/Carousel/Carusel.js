import React from 'react'
import "./Carusel.css"
import AVTR1 from "./img/m.jpeg"
import AVTR2 from "./img/f1.jpeg"
import AVTR3 from "./img/m.jpeg"
import AVTR4 from "./img/f1.jpeg"
import AVTR5 from "./img/m.jpeg"
import AVTR6 from "./img/f1.jpeg"
import AVTR7 from "./img/f1.jpeg"

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: "Azake",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, quo quae? Minima tenetur earum aspernatur impedit alias nemo, amet id."
    },
    {
        avatar: AVTR2,
        name: "Zhyldyz",
        review: "Lorem ipsum dolor, amet consectetur adipisicing elit. A, quo quae? Minima tenetur earum aspernatur impedit alias nemo, amet id."
    },
    {
        avatar: AVTR3,
        name: "Baktybek",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, quo quae? Minima tenetur earum aspernatur impedit alias nemo, amet id."
    },
    {
        avatar: AVTR4,
        name: "Millana",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, quo quae? Minima tenetur earum aspernatur impedit alias nemo, amet id."
    },
    {
        avatar: AVTR5,
        name: "Kalmyrza",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, quo quae? Minima tenetur earum aspernatur impedit alias nemo, amet id."
    },
    {
        avatar: AVTR6,
        name: "Zhibek",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, quo quae? Minima tenetur earum aspernatur impedit alias nemo, amet id."
    },
    {
        avatar: AVTR7,
        name: "Ainura",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, quo quae? Minima tenetur earum aspernatur impedit alias nemo, amet id."
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials">

            <h2>Our Team</h2>
            <Swiper className="container testimonial__container"
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >

                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className="client__avatar">
                                    <img src={avatar} alt="Avatar One" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    )
}

export default Testimonials