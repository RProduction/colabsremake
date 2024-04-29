import React, {useState} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay, Controller} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import CurvedContainer from './CurvedContainer';

interface Props {
  items: Item[];
  imgHeight: number;
}

interface Item {
  img: string;
  title: string;
  caption: string;
  description: string;
}

function DoubleCarousel(props: Props) {
  const [controller1, setController1] = useState(null);
  const [controller2, setController2] = useState(null);

  return (
    <Grid container marginY={2} columnSpacing={1}>
      <Grid xs={12} sm={7}>
        <Box
          borderRadius={3}
          position="relative"
          overflow="hidden"
          sx={(theme) => ({
            minHeight: props.imgHeight,
            height: props.imgHeight,
            [theme.breakpoints.down("sm")]: {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0
            }
          })}
        >
          <Box
            height="100%"
            component={Swiper}
            modules={[Controller]}
            slidesPerView={1}
            loop
            controller={{ control: controller1 }}
            onSwiper={setController2}
          >
            {
              props.items.map((value, i) => (
                <SwiperSlide
                  key={`${value.title}${i}`}
                >
                  <Box
                    position="absolute"
                    top={0}
                    bottom={0}
                    right={0}
                    left={0}
                    zIndex={0}
                    sx={{
                      backgroundImage: `url('${value.img}')`,
                      backgroundSize: "cover",
                    }}
                  >

                  </Box>
                </SwiperSlide>
              ))
            }
          </Box>
        </Box>
      </Grid>

      <Grid xs={12} sm={5}
        sx={(theme) => ({
          " > div": {
            [theme.breakpoints.down("sm")]: {
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0
            }
          }
        })}
      >
        <CurvedContainer
          bg="blue"
          button  
          height={props.imgHeight}
        >
          <Box
            height="100%"
            component={Swiper}
            modules={[Pagination, Autoplay, Controller]}
            slidesPerView={1}
            pagination={{clickable: true}}
            autoplay={{delay: 2000}}
            loop
            onSwiper={setController1}
            controller={{ control: controller2 }}
            sx={(theme) => ({
              "& .swiper-wrapper": {
                padding: 2
              },
              "& .swiper-slide": {
                
              },
              "& .swiper-pagination": {
                bottom: 5,
                left: 5,
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
            {
              props.items.map((value) => (
                <SwiperSlide>
                  <Box
                    width="fit-content"
                    border="solid 1px"
                    borderRadius={5}
                    borderColor="black"
                    padding={1}
                    marginBottom={2}
                  >
                    <Typography>
                      {value.caption}
                    </Typography>
                  </Box>
                  <Typography variant="h5" fontWeight={700}>
                    {value.title}
                  </Typography>
                  <Typography>
                    {value.description}
                  </Typography>
                </SwiperSlide>
              ))
            }
          </Box>
          <Typography variant="body2" color="black" position="absolute" bottom={5} right={60} zIndex={2}>
            Read More
          </Typography>
        </CurvedContainer>
      </Grid>
    </Grid>
  )
}

export default DoubleCarousel;