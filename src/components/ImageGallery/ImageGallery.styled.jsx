import styled from 'styled-components';
export const GalleryContainer = styled.ul`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  max-width: calc(100vw - 30px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 10px;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  padding: 0;
`;