import { desserts } from "../../data/desserts";
import { Container, SliderContainer } from "./styles";
import { CardFood } from "../CardFood";
import useEmblaCarousel from "embla-carousel-react"

const OPTIONS = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export function Desserts() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    skipSnap: false,
    dragFree: true,
  })
  return (
    <div style={{ overflow: "hidden", width: "100%"}}>
      <Container >
        <div className="embla" ref={emblaRef}>
          <SliderContainer className="embla__slide__number container">
          {desserts.map(dessert => (
            <CardFood
              key={dessert.id}
              title={dessert.name}
              description={dessert.description}
              price={dessert.price}
              photo={dessert.photo}
            />
            ))}
          </SliderContainer>
        </div>
      </Container>
    </div>
  )
}