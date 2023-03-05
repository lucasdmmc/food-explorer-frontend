import { desserts } from "../../data/desserts";
import { Container, SliderContainer, Slider } from "./styles";
import { FoodCard } from "../FoodCard";
import useEmblaCarousel from "embla-carousel-react"

export function Desserts() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    skipSnap: false,
    dragFree: true,
  })

  return (
    <Slider>
      <Container >
        <div className="embla" ref={emblaRef}>
          <SliderContainer className="embla__slide__number container">
          {desserts.map(dessert => (
            <FoodCard
              key={dessert.id}
              id={dessert.id}
              name={dessert.name}
              description={dessert.description}
              price={dessert.price}
              photo={dessert.photo}
            />
            ))}
          </SliderContainer>
        </div>
      </Container>
    </Slider>
  )
}