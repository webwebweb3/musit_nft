import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
.LoadingContainer{
    padding: 80px ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #000;
    
}
.LoadingWrapper{
   padding: 100px;
   width: 500px;
   height: 500px;
   margin: auto;
   display: flex;
   padding-top: 10px;
   padding-bottom: -20px;
}
.LoadingTypo{
    color: #fff;
    margin: auto;
}
.LoadingBtn{
display: flex;
flex-direction: row;
margin: auto;

}
`;
