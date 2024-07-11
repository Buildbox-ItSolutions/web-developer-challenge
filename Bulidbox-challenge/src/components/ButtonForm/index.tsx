import styled from 'styled-components';

const ButtonForm = () => {
  return (
    <ButtonContainer>
      <ButtonCreate type="submit">
        publicar
      </ButtonCreate>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  
`;

const ButtonCreate = styled.button`
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #22c55e;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1rem;
  border-radius: 0.75rem;
  color: white;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #16a34a;
  }
`;

export default ButtonForm;
