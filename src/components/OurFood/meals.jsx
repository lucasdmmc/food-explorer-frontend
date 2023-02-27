import useEmblaCarousel from "embla-carousel-react"
import { Container, SliderContainer } from "./styles";
import { FoodCard } from "../FoodCard";
import { meals } from "../../data/meals";

export function Meals() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    skipSnap: false,
    dragFree: true,
  })
  
  return (
    <div style={{ overflow: "hidden", width: "100"}}>
      <Container >
        <div className="embla" ref={emblaRef}>
          <SliderContainer className="embla__container container">
          {meals.map(meal => (
            <FoodCard
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              photo={meal.photo}
            />
            ))}
          </SliderContainer>
        </div>
      </Container>
    </div>
  )
}