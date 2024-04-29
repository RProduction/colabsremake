import React from 'react';

import ImageCard from './ImageCard';

import Box from '@mui/material/Box';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useAppear} from '../hooks/useAppear';
import Collapse from '@mui/material/Collapse';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface Props {
  content: Cards[];
}

interface Cards {
  title: string;
  img: string;
  bg: string;
}

function FullScreenCarousel(props: Props) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isUpper = useMediaQuery(theme.breakpoints.up("sm"));
  const {check, ref} = useAppear();

  let slides : number = 0;
  if(isXs) {
    slides = 1;
  } else if(isSm) {
    slides = 2;
  } else if(isUpper) {
    slides = 3
  }

  return(
    <div ref={ref}>
      <Collapse
        in={check}
        orientation='vertical'
      >
        <Box
          height={200}
          component={Swiper}
          modules={[Autoplay]}
          slidesPerView={slides}
          autoplay={{delay: 2000}}
          loop
          sx={{
            "& .swiper-slide": {
              marginX: 1
            }
          }}
        >
          {
            props.content.map((value, i) => (
              <SwiperSlide key={`${value.title}${i}`}>
                <ImageCard
                  bg={value.bg}
                  img={value.img}
                  imgSize={100}
                  title={value.title}
                  learn
                  cardHeight="inherit"
                />
              </SwiperSlide>
            ))
          }
        </Box>
      </Collapse>
    </div>
  )
}

export default FullScreenCarousel;