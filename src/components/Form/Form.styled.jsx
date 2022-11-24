import styled from '@emotion/styled';

export const FormContainer = styled.div`
  padding: 10px;
  border: 1px solid rosybrown;
`;

export const InputForm = styled.form`
display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
  height: 30px;
`;

export const InputNumber = styled.input`
  height: 30px;
`;

export const Span = styled.span`
  font-size: 25px;
  margin-right: 5px;
`;

export const BtnAdd = styled.button`
  padding: 10px;
  border: none;
  border-radius: 10px;
  &:hover {
    background: cadetblue;
    cursor: pointer;
  }
`;