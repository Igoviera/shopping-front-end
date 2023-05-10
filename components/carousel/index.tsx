import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

export function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        fade: true,
        speed: 500,
        autoplaySpeed: 5000,
        // variableWidth: true,
        // adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <Slider {...settings}>
            <div>
                <Image width={1440} height={200} alt="banner" src="/banner2.png" />
            </div>
            <div>
                <Image width={1440} height={200} alt="banner" src="/banner5.png" />
            </div>
        </Slider>
    )
}
