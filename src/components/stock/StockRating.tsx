import React from 'react';
import styled from 'styled-components';
import { StockRating } from '../../reducers/stockReducer';
import * as styles from '../../styles/vars';

interface Props {
  rating: StockRating;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const DataRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 420px;
  padding: .5rem;
  margin: .25rem;
  border-radius: ${styles.BORDER_RADIUS};
  border-bottom: 2px solid ${styles.LIGHT_GRAY};
  background-color: ${styles.SECOND_COLOR};
`;

const StockRatingContainer = ({ rating }: Props) => {
  return (
    <Container>
      <DataRow>
        <p>Rating</p>
        <p>{rating.rating}</p>
      </DataRow>
      <DataRow>
        <p>Rating score</p>
        <p>{rating.ratingScore}</p>
      </DataRow>
      <DataRow>
        <p>Rating DCF</p>
        <p>{rating.ratingDetailsDCFScore}</p>
      </DataRow>
      <DataRow>
        <p>Rating DE</p>
        <p>{rating.ratingDetailsDEScore}</p>
      </DataRow>
      <DataRow>
        <p>Rating PB</p>
        <p>{rating.ratingDetailsPBScore}</p>
      </DataRow>
      <DataRow>
        <p>Rating PE</p>
        <p>{rating.ratingDetailsPEScore}</p>
      </DataRow>
      <DataRow>
        <p>Rating ROA</p>
        <p>{rating.ratingDetailsROAScore}</p>
      </DataRow>
      <DataRow>
        <p>Rating ROE</p>
        <p>{rating.ratingDetailsROEScore}</p>
      </DataRow>
    </Container>
  );
};

export default StockRatingContainer;