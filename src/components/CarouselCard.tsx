import './CarouselCard.css';

function CarouselCard(props: { content: number; }) {
  const { content } = props;
  return (
    <p>{content}</p>
  );
}

export default CarouselCard;