import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Search = styled.header`
  top: 0;
  left: 0;
  z-index: 1100;
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: green;
`;

export const FormEl = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #ffffff;
  border-radius: 5px;
  overflow: hidden;
`;

export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 15px;
  border: none;
  outline: none;
`;

export const Btn = styled.button`
  width: 48px;
  height: 48px;
  display: inline-block;
  border: 0;
  opacity: 0.6;
  transition: opacity 200ms cubic-bezier(0.5, 0, 0.5, 1);
  cursor: pointer;
  outline: none;
`;
