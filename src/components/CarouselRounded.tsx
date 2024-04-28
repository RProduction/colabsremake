import React from 'react';
import Box from '@mui/material/Box';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

import Typography from '@mui/material/Typography';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface Props {
  items: CarouselRoundedItems[];
  bg: string;
}

interface CarouselRoundedItems {
  targetNumber: number;
  targetPostfix: string;
  content: string;
}

function CarouselRounded(props: Props) {
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return(
    <Box
      bgcolor={props.bg}
      sx={(theme) => ({
        width: "100%",
        height: "auto",
        aspectRatio: "1/1",
        borderRadius: 50,
        overflow: "hidden",
        [theme.breakpoints.down("sm")]: {
          aspectRatio: "1/0.5",
          borderRadius: 5
        }
      })}
    >
      <Box
        display='flex'
        height="100%"
        component={Swiper}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{clickable: true}}
        autoplay={{delay: 2000}}
        loop
        direction={isDownMd ? "vertical" : "horizontal"}
        sx={(theme) => ({
          "& .swiper-wrapper": {
            
          },
          "& .swiper-slide": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          },
          "& .swiper-pagination": {
            [theme.breakpoints.up("sm")]: {
              bottom: "25%",
            },
            [theme.breakpoints.down("sm")]: {
              
            }
          },
          "& .swiper-pagination-bullet": {
            width: 10,
            height: 10,
            [theme.breakpoints.down("md")]: {
              width: theme.spacing(2),
              height: theme.spacing(2)
            }
          },
          "& .swiper-pagination-bullet-active": {
            backgroundColor: "black"
          }
        })}
      >
        {
          props.items.map((value) => (
            <SwiperSlide
              key={value.content}
            >
              <Typography variant="h4" fontWeight={600} padding={2}>
                {value.targetNumber}{value.targetPostfix}
              </Typography>
              <Typography variant="body1" textAlign="center" padding={2}>
                {value.content}
              </Typography>
            </SwiperSlide>
          ))
        }
      </Box>
    </Box>
  )
}

export default CarouselRounded;