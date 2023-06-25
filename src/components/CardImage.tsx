import styled from 'styled-components';

interface CardImageProps {
  src: string
}

function CardImage({src}: CardImageProps) {
  return (
    <Image src={src} />
  );
}

const Image = styled.img`
  width: 100%;
  height: 160px;
  margin-top: 24px;
  border-radius: 10px;
  object-fit: cover;
  object-position: 50% 50%;
`;

export default CardImage;