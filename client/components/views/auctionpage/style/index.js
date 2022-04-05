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
  margin: 0 80px;
`;

export const AuctionHeader = styled(Box)`
  width: 100%;
  min-width: 1600px;
  max-width: 1600px;
  color: white;
  line-height: 72px;
  padding-top: 60px;
  padding-bottom: 60px;
  font-size: 30px;
  font-weight: 700;
  h1 {
    margin: 0;
  }
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
  flex: 2;
`;

export const AuctionWrapper = styled(Box)`
  flex: 10;
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
  width: 150px;
  margin: 0;
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
  margin: 150px 40px 0 40px;
  width: 100%;
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
