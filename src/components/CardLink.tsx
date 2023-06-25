import styled from 'styled-components';

interface CardLinkProps {
  link: string[]
}

function CardLink({link}: CardLinkProps) {
  return (
    <Link href={link[1]} target='_blank'>🔗 {link[0]}</Link>
  );
}

const Link = styled.a`
  color: black;
  font-weight: 300;
  font-size: 16px;
  margin-top: 24px;
`;

export default CardLink;