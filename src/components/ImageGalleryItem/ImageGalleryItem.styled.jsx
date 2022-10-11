import styled from 'styled-components';

export const Item = styled.li`
  border-radius: 5px;
`;

export const Img = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);
  &:hover {
    transform: scale(1.1);
    cursor: zoom-in;
  }
`;