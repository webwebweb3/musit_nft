import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
.buySection{
    padding: 100px 0 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #1c2237;
}

.buyWrapper{
    display: flex;
    margin: 0 auto;
    padding: 30px;
}

.buyHeading{
    color: #fff;
    margin-bottom: 24px;
    margin-left: 100px
}

.buyContainer{
    display: flex;
    justify-content: center;
    
}

.buyContainer-card{
    background: linear-gradient(45deg, #252525 0%, #276afb 100%);
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
    width: 1000px;
    height: 100px;
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
.icon {
    margin: 50px 0;
    

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
