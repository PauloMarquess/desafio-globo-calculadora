import styled from 'styled-components';

export const Container = styled.div`
  display:flex ;
  flex-direction:column ;
  align-items:center ;
  justify-content:center ;
  width:100% ;
  height:100vh ;
  background-image:url('https://img.freepik.com/fotos-gratis/negocio-de-tecnologia-globo-com-papel-de-parede-gradiente_53876-97642.jpg?w=2000') ;
  background-position:center right ;
  
`;
export const Calculator =styled.div`
header {
  display:flex ;
}
input{
  width:211px ;
  height:60px ;
  padding-left:10px;
  border:1px solid #dadada ;
  outline:none ;
  font-size:16px ;
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