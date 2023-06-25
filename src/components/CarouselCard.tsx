import styled from 'styled-components';

function CarouselCard(props: { content: number; progress: number }) {
  const { content, progress } = props;
  const hue: number = Math.round(200 + progress * 100);
  
  const Card = styled.p`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(${hue}, 50%, 60%);
  `;

  return (
    <Card>{content}</Card>
  );
}

export default CarouselCard;