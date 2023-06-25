import styled from 'styled-components';
import CardContent from '../interfaces';
import CardVideo from './CardVideo';
import CardImage from './CardImage';
import CardLink from './CardLink';

interface CardProps {
  content: CardContent,
  progress: number
}

function CarouselCard({ content, progress }: CardProps ) {
  const hue: number = Math.round(200 + progress * 100);

  return (
    <>
      <Card hue={hue} custoStyle={content.style} >
        {content.text}
        {content.video && <CardVideo src={content.video} />}
        {content.image && <CardImage src={content.image} />}
        {content.link && <CardLink  link={content.link} />}
      </Card>
    </>
  );
}

const Card = styled.div<{hue: number, custoStyle?: string}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px;
  font-size: 24px;
  background-color: hsl(${(props) => props.hue}, 50%, 60%);
  ${(props) => props.custoStyle}
`;
export default CarouselCard;