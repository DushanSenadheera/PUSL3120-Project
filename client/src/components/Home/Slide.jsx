import { Carousel } from '@mantine/carousel';

function Demo() {
    return (
      <div>
        <Carousel withIndicators height={200}>
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
      </div>
    );
  }