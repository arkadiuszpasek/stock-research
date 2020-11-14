import React from 'react';
import styled from 'styled-components';
import { StockProfile } from '../../reducers/stockReducer';
import * as styles from '../../styles/vars';

interface Props {
  profile: StockProfile;
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

const StockProfileComponent = ({ profile }: Props) => {
  return (
    <Container>
      <DataRow>
        <p>Ticker</p>
        <p>{profile.symbol}</p>
      </DataRow>
      <DataRow>
        <p>Name</p>
        <p>{profile.companyName}</p>
      </DataRow>
      <DataRow>
        <p>Describtion</p>
        <p>{profile.description.substr(0, 50) + '...'}</p>
      </DataRow>
      <DataRow>
        <p>Price</p>
        <p>{profile.price}</p>
      </DataRow>
      <DataRow>
        <p>Market cap</p>
        <p>{profile.mktCap}</p>
      </DataRow>
      <DataRow>
        <p>DCF</p>
        <p>{profile.dcf}</p>
      </DataRow>
      <DataRow>
        <p>DCF difference</p>
        <p>{profile.dcfDiff}</p>
      </DataRow>
    </Container>
  );
};

export default StockProfileComponent;