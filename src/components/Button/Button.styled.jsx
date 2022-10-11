import styled from 'styled-components';

export const LoadMore = styled.button`
 font-weight: 400;
  min-width: 200px;  
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: green;
  transition: 250ms cubic-bezier(0.5, 0, 0.5, 1);
  text-align: center;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  line-height: 24px;
  font-style: normal;
  border-radius: 10xp;
  
  &:hover,
  :focus {
    background-color: orange;
    border: 5px solid #fff;
  }
`;