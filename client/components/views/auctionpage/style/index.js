import styled from '@emotion/styled';
import { Box } from '@mui/system';
import {
  Button,
  Divider,
  FormControl,
  FormHelperText,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { createGlobalStyle } from 'styled-components';

export const AuctionAllContainer = styled(Box)`
  width: 100%;
`;

export const AuctionHeader = styled(Box)`
  color: white;
  line-height: 72px;
  padding-top: 53px;
  padding-bottom: 100px;
  flex: 0 1 auto;
  font-size: 30px;
  font-weight: 700;
  margin: 0 80px;
`;

export const AuctionMainContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  color: white;
  flex: 0 1 auto;
  margin: 146px 0px;
`;

export const AuctionContainer = styled(Box)`
  width: 100%;
  min-width: 1200px;
  max-width: 1200px;
  height: 100%;
  display: flex;
  color: white;
  margin: 0 auto;
`;

export const AuctionLeftSideBar = styled(Box)`
  flex: 0 1 auto;
`;

export const AuctionWrapper = styled(Box)`
  flex: 0 2 auto;
  padding-right: 100px;
`;

export const StyledButton = styled(Button)`
  width: 500px;
  display: block;
  margin: 20px auto;
  background-color: transparent;
  color: #dada;
  padding: 6px 12px;
  &:hover {
    color: #111;
    background-color: #dada;
  }
`;

export const StyledNewAuctionButton = styled(StyledButton)`
  width: auto;
  margin: 0 0 0 auto;
  &:hover {
    color: #fff;
    background-color: transparent;
  }
`;

export const StyledTextField = styled(TextField)`
  background-color: transparent;
  margin: 1px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 0;
  margin-top: 0;
  font-weight: 500;
`;

export const AuctionContentImg = styled.div`
  flex: 2;
`;

export const AuctionContents = styled.div`
  margin-left: 60px;
  flex: 10;
`;

export const AuctionContentsContainer = styled(AuctionContainer)`
  margin: 145px auto 0;
`;

export const AuctionMainContentsContainer = styled(AuctionContentsContainer)`
  display: flex;
  color: white;
  margin: 0 auto;
`;

export const AuctionDivider = styled(Divider)`
  min-width: 160px;
  max-width: 600px;
  margin: 15px 0 20px 0;
  background-color: #dada;
`;

export const AuctionBox = styled(Box)`
  display: inline-block;
  width: 100%;
  font-size: 50px;
  margin-bottom: 20px;
`;

export const AuctionGray = styled(AuctionBox)`
  color: #dada;
  font-size: 20px;
`;

export const AuctionTime = styled(AuctionBox)`
  font-size: 40px;
`;

export const AuctionStyledButton = styled(StyledButton)`
  background-color: transparent;
  color: #fff;
  width: 100%;
  padding: 6px 12px;
  &:hover {
    color: #000;
    background-color: #fff;
  }
`;

export const EthereumImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const StyledCancelButton = styled(Button)`
  background-color: transparent;
  color: #dada;
  padding: 6px 12px;
  margin-left: 220px;
  &:hover {
    color: #000;
    background-color: #dada;
  }
`;

export const StyledOutlinedInput = styled(OutlinedInput)`
  width: 500px;
`;

export const StyledFormControl = styled(FormControl)`
  display: block;
  width: 100%;
  margin: 25px auto;
  text-align: center;
`;

export const StyledFormHelperText = styled(FormHelperText)`
  text-align: center;
  color: #dada;
  font-size: 15px;
  margin-bottom: 7px;
  margin-right: 430px;
`;

export const StyledMyNFTText = styled(StyledFormHelperText)`
  margin-top: 30px;
  margin-left: 80px;
  margin-bottom: 10px;
`;

export const GlobalAppointment = createGlobalStyle`
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root{
    color: #dada
  }
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline{
    border-color: #dada;
  }
  input[type="datetime-local" i]::-webkit-calendar-picker-indicator {
    background-color: #dada;
    padding: 5px;
    border-radius: 50%;
    &:hover {
      background-color: #fff;
    }
  }
`;

export const GlobalTextField = createGlobalStyle`
  .css-as3o9j-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline{
    border-color: #dada;
  }
`;
