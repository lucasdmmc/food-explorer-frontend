import useEmblaCarousel from "embla-carousel-react"
import { Container, SliderContainer } from "./styles";
import { CardFood } from "../CardFood";
import { meals } from "../../data/meals";

export function Meals() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    skipSnap: false,
    dragFree: true,
  })
  return (
    <div style={{ overflow: "hidden", width: "100%"}}>
      <Container >
        <div className="embla" ref={emblaRef}>
          <SliderContainer className="embla__container container">
          {meals.map(meal => (
            <CardFood
              key={meal.id}
              title={meal.name}
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