import Carousel from '../components/Crousel';
import Card from "./Card/Card";

const Slider = (props) => {
  let cards = props.project.images.map((img) => ({
    key: img?.id,
    content: <Card imagen={img?.path} />,
  }));
  return (
    <div className='flex flex-col gap-5 relative grid-container object-contain'>
          <Carousel
            cards={cards}
            height="500px"
            width="65%"
            margin="0 auto"
            offset={2}
            showArrows={false}
          />
        </div>
  )
}

export default Slider
