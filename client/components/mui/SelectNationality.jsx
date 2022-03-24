import * as React from 'react';
import PropTypes from 'prop-types';
import SelectUnstyled from '@mui/base/SelectUnstyled';
import OptionUnstyled, {
  optionUnstyledClasses,
} from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import propTypes from 'prop-types';

const StyledButton = styled('button')(
  () => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 320px;
  background: #fff;
  border: 1px solid #CDD2D7;
  border-radius: 0.4em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  padding: 10px;
  text-align: left;
  line-height: 2.5;
  color: #1A2027;

  &:hover {
    background: #E7EBF0;
    border-color: #B2BAC2;
  }

  &::after {
    content: '▾';
    float: right;
  }
  `,
);

const StyledListbox = styled('ul')(
  () => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 0;
  margin-bottom: 1px;
  min-width: 320px;
  background: #fff;
  border: 1px solid #CDD2D7;
  border-radius: 0.5em;
  color: #1A2027;
  overflow: auto;
  outline: 0px;
  `,
);

const StyledOption = styled(OptionUnstyled)(
  () => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: #DAECFF;
    color: #003A75;
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: #E7EBF0;
    color: #1A2027;
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: #DAECFF;
    color:#003A75;
  }

  &.${optionUnstyledClasses.disabled} {
    color: #B2BAC2;
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: #E7EBF0;
    color: #1A2027;
  }
  `,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = props => {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} components={components} />;
};

CustomSelect.propTypes = {
  components: PropTypes.shape({
    Listbox: PropTypes.elementType,
    Popper: PropTypes.func,
    Root: PropTypes.elementType,
  }),
};

const UnstyledSelectsMultiple = ({ value, func }) => {
  return (
    <div id="nationality" style={{ display: 'inline-block' }}>
      <CustomSelect value={value} onChange={func}>
        <StyledOption value={0}>대한민국</StyledOption>
        <StyledOption value={1}>English</StyledOption>
      </CustomSelect>
    </div>
  );
};

UnstyledSelectsMultiple.propTypes = {
  value: propTypes.number.isRequired,
  func: propTypes.func,
};

export default UnstyledSelectsMultiple;
