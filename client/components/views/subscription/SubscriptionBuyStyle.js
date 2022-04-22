import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
.buySection{
    padding: 100px 0 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #1c2237;
    text-align: center;
}

.buyWrapper{
    display: flex;
    width: 1200px;
    margin: 0 30px 0 0;
    padding: 0px;
}

.buyHeading{
    color: #fff;
    margin-bottom: 24px;
}

.buyContainer{
    display: flex;
    justify-content: center;
    
}

.buyContainer-card{
    background: linear-gradient(45deg, #252525 0%, #276afb 100%);
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
    width: 250px;
    height: 100%;
    
    text-decoration: none;
    border-radius: 4px;
    flex-direction: row;
}

.buyContainer-cardInfo{
    display: flex;
    
    height: 100px;
    padding: 80px;
    align-items: center;
    color: #fff;
}
.buyIcon {
    width: 194.7px;
  }

.buyFooter{
    padding: 100px ;
    display: flex;
    text-align: center;
    justify-content: center;
    color: #fff;
}

  .buyInfoContainer{
padding: 90px
  }
  .buyInfoText{
      
  }

@media screen and (max-width: 960px) {
    .pricing__container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

.buyContainer-card:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #b8c7ff;
    }


`;
