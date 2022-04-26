import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
.LoadingContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.LoadingWrapper{
   width: 400px;
   height: 400px;
   margin: auto;
   display: flex;
   padding-top: 10px;
   padding-bottom: -20px;
}
.LoadingTypo{
    color: #000;
    margin: auto;
    font-size: 60px;
}
.LoadingBtn{
    display: flex;
    flex-direction: row;
    margin: auto;
}
`;
