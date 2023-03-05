import useEmblaCarousel from "embla-carousel-react"
import { Container, Slider, SliderContainer } from "./styles";
import { FoodCard } from "../FoodCard";
import { meals } from "../../data/meals";

export function Meals() {
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
          {meals.map(meal => (
            <FoodCard
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              photo={meal.photo}
            />
            ))}
          </SliderContainer>
        </div>
      </Container>
    </Slider>
  )
}