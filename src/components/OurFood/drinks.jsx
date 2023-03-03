import useEmblaCarousel from "embla-carousel-react"
import { Container, Slider, SliderContainer } from "./styles";
import { FoodCard } from "../FoodCard";
import { drinks } from "../../data/drinks";

export function Drinks() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    skipSnap: false,
    dragFree: true,
  })
  return (
    <Slider >
      <Container >
        <div className="embla" ref={emblaRef}>
          <SliderContainer className="embla__container container">
          {drinks.map(drink => (
            <FoodCard
              key={drink.id}
              name={drink.name}
              description={drink.description}
              price={drink.price}
              photo={drink.photo}
            />
            ))}
          </SliderContainer>
        </div>
      </Container>
    </Slider>
  )
}