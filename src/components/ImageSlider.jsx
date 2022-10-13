import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SlideData = [
  {
    description: '',
    image:
      "https://firebasestorage.googleapis.com/v0/b/e-commerce-react-e3b9d.appspot.com/o/img-1.png?alt=media&token=b757c250-89f1-4b0a-81ef-13ca8f6cde29"
  },
  {
    description: '',
    image:
      "https://firebasestorage.googleapis.com/v0/b/e-commerce-react-e3b9d.appspot.com/o/img-2.png?alt=media&token=fef8c545-c3aa-4bcf-b230-d350eb2a26a1"
  },
  {
    description: '',
    image:
      "https://firebasestorage.googleapis.com/v0/b/e-commerce-react-e3b9d.appspot.com/o/img-3.png?alt=media&token=f0a56df6-257c-43dc-a9fc-b8612d6a6d13"
  },];

export default function ImageSlider () {
  return (
    
      <Carousel showThumbs={false} infiniteLoop centerMode={true} autoPlay={true} showStatus={false}>
      {SlideData.map((slide) => {
        return <Image key={slide.image} src={slide.image} width="100px" />;
      })}
    </Carousel>
    
  );
};