import styled from 'styled-components';

export const Container = styled.div`
  display:flex ;
  flex-direction:column ;
  align-items:center ;
  justify-content:center ;
  width:100% ;
  height:100vh ;
  background-color:#a6cae5 ;
  
`;
export const Calculator =styled.div`
input{
  width:100% ;
  height:30px ;
  padding-left:5px;
}

`
export const KeyboardCalculator =styled.div`
display:flex ;

`
export const Numeric =styled.div`
display:flex ;
flex-wrap:wrap ;
width:210px ;

Button{
  
  background-color:#e8e9ee ;
}
`
export const Operator =styled.div`
 Button{
    background-color:#c9d2e3 ;
 }
`