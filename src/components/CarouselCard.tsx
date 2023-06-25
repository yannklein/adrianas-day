import styled from 'styled-components';

function CarouselCard(props: { content: number; progress: number }) {
  const { content, progress } = props;
  const hue: number = Math.round(200 + progress * 100);

  return (
    <Card hue={hue} >{content}</Card>
  );
}

const Card = styled.p<{hue: number}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(${(props) => props.hue}, 50%, 60%);
`;
export default CarouselCard;