import styled from 'styled-components';

interface CardVideoProps {
  src: string
}

function CardVideo({src}: CardVideoProps) {
  return (
    <Video src={src} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></Video>
  );
}

const Video = styled.iframe`
  width: 100%;
  margin-top: 24px;
  border-radius: 10px;
  object-fit: cover;
`;

export default CardVideo;