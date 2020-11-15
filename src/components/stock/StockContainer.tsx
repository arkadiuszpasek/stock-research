import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { StockData } from '../../reducers/stockReducer';
import { State } from '../../types';
import Loader from '../Loader';
import StockKeyMetricsComponent from './StockKeyMetrics';
import StockProfileComponent from './StockProfile';
import StockRatingContainer from './StockRating';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
`;

interface Props {
  stock: StockData;
}

const StockContainer = ({ stock }: Props) => {

  const renderInner = () => {
    console.log(stock);

    return (
      <Container>
        {stock.metrics ? <StockKeyMetricsComponent metrics={stock.metrics} /> : <Loader />}
        {stock.profile ? <StockProfileComponent profile={stock.profile} /> : <Loader />}
        {stock.rating ? <StockRatingContainer rating={stock.rating} /> : <Loader />}
      </Container>
    );
  }

  return !stock.metrics && !stock.profile ? <></> : renderInner()
};

const mapStateToProps = (state: State) => ({
  stock: state.stock,
});

export default connect(mapStateToProps, null)(StockContainer);