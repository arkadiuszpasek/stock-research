import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { updateInput, fetchKeyMetrics, fetchProfile } from '../actions';
import * as styles from '../styles/vars';
import { State } from '../types';

const InputElement = styled.input`
  background-color: #f3f3f3;
  color: ${styles.PRIMARY_DARK};
  padding: 0.75rem 1rem;
  border-radius: ${styles.BORDER_RADIUS};
  margin: 1.5rem 0.5rem 0.5rem;
  text-align: center;
  border: none;
`;

const Button = styled.button`
  background-color: ${styles.COMPLEMENTARY_COLOR};
  padding: 0.75rem 2rem;
  border-radius: ${styles.BORDER_RADIUS};
  border: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f3f3f3;
    color: black;
    cursor: pointer;
  }
`;

interface Props {
  input: string;
  updateInput: (input: string) => void;
  fetchKeyMetrics: (ticker: string) => void;
  fetchProfile: (ticker: string) => void;
}

const Input = ({ input, updateInput, fetchKeyMetrics, fetchProfile }: Props) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateInput(e.target.value.toUpperCase());
  };

  const onButtonClick = () => {
    fetchKeyMetrics(input);
    fetchProfile(input);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) onButtonClick();
  };

  const render = () => {
    return (
      <div>
        <InputElement
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          placeholder="Enter stock ticker"
          value={input}
        />
        <Button onClick={onButtonClick}>Search</Button>
      </div>
    );
  }

  return render();
}

const mapStateToProps = (state: State) => ({
  input: state.input,
});

const mapDispatchToProps = {
  updateInput, fetchKeyMetrics, fetchProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
