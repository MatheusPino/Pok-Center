import styled from "styled-components";

export const StyledFooter = styled.footer`
display: inline-flex;
margin: 0;
padding: 1px 110px;
width: 100%;
height: 300px;
justify-content: center;
align-items: center;
background: #D72635;

  @media screen and (max-width: 768px) {
    flex-direction: column; 
    justify-content: center; 
    padding: 16px; 
    height: auto; 
  }
`
export const StyledConteudo = styled.p`
display: flex;
align-items: center;
gap: 80px;
@media screen and (max-width: 768px) {
  flex-direction: column;
  gap: 16px; 
}
`
export const StyledLogo2 = styled.img`
width: 300px;
height: 300px;

@media screen and (max-width: 768px) {
  width: 200px; 
  height: 200px;
}
`


export const LineFooter = styled.div`
width: 8px;
height: 265px;
background: #FFF;
@media screen and (max-width: 768px) {
  display: none; 
`

export const DivList = styled.div`
color: #FFF;
  font-size: 20px;
  font-style: normal;
  line-height: normal;
  width: 100%;  
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }


`
export const StyledH2Container = styled.div`
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
`;
export const StyledH2 = styled.h3`
width: 100%;
margin: 0;
white-space: nowrap;
text-align: left;
@media screen and (max-width: 768px) {
  font-size: 18px; 
}
`
export const StyledUl = styled.ul`
padding: 0;
margin: 0;
// margin-bottom: 50px;
list-style: none;
white-space: nowrap;
@media screen and (max-width: 768px) {
  margin-bottom: 30px; 

`
export const StyledLi = styled.li`
  margin-bottom: 20px;
  text-align: left;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;