import React, {PropsWithChildren} from 'react';
import Box from '@mui/material/Box';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

import Typography from '@mui/material/Typography';
import CurvedContainer from './CurvedContainer';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface Props extends PropsWithChildren{
  bg: string;
  cardHeight: number;
}

function CarouselCard(props: Props) {
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return(
    <CurvedContainer
      bg={props.bg}
      button 
      padding={2} 
      height={props.cardHeight}
    >
      <Box
        height="100%"
        component={Swiper}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{clickable: true}}
        autoplay={{delay: 2000}}
        loop
        sx={(theme) => ({
          "& .swiper-wrapper": {

          },
          "& .swiper-slide": {
            
          },
          "& .swiper-pagination": {
            bottom: 0,
            textAlign: 'left',
            zIndex: -1
          },
          "& .swiper-pagination-bullet": {
            width: 25,
            height: 8,
            borderRadius: 5,
          },
          "& .swiper-pagination-bullet-active": {
            backgroundColor: "black"
          }
        })}
      >
        {props.children}
      </Box>
    </CurvedContainer>
  )
}

export default CarouselCard;