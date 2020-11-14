import React from 'react';
import styled from 'styled-components';
import { StockKeyMetrics } from '../../reducers/stockReducer';
import * as styles from '../../styles/vars';

interface Props {
  metrics: StockKeyMetrics;
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

const StockKeyMetricsComponent = ({ metrics }: Props) => {
  return (
    <Container>
      <DataRow>
        <p>Revenue per share</p>
        <p>{metrics.revenuePerShareTTM.toFixed(3)}</p>
      </DataRow>
      <DataRow>
        <p>Net income per share</p>
        <p>{metrics.netIncomePerShareTTM.toFixed(3)}</p>
      </DataRow>
      <DataRow>
        <p>Operating cash flow per share</p>
        <p>{metrics.operatingCashFlowPerShareTTM.toFixed(3)}</p>
      </DataRow>
      <DataRow>
        <p>Free cash flow per share</p>
        <p>{metrics.freeCashFlowPerShareTTM.toFixed(3)}</p>
      </DataRow>
      <DataRow>
        <p>P/E ratio</p>
        <p>{metrics.peRatioTTM.toFixed(3)}</p>
      </DataRow>
      <DataRow>
        <p>P/S ratio</p>
        <p>{metrics.priceToSalesRatioTTM.toFixed(3)}</p>
      </DataRow>
      <DataRow>
        <p>P/FCF ratio</p>
        <p>{metrics.pfcfRatioTTM.toFixed(3)}</p>
      </DataRow>
      <DataRow>
        <p>P/B ratio</p>
        <p>{metrics.pbRatioTTM.toFixed(3)}</p>
      </DataRow>
      <DataRow>
        <p>Book value per share</p>
        <p>{metrics.bookValuePerShareTTM.toFixed(3)}</p>
      </DataRow>
      <DataRow>
        <p>Tangible book value per share</p>
        <p>{metrics.tangibleBookValuePerShareTTM.toFixed(3)}</p>
      </DataRow>
      <DataRow>
        <p>Dividend</p>
        <p>{metrics.dividendYieldTTM.toFixed(3)}</p>
      </DataRow>
      <DataRow>
        <p>Dividend %</p>
        <p>{metrics.dividendYieldPercentageTTM.toFixed(3)}</p>
      </DataRow>
    </Container>
  );
};

export default StockKeyMetricsComponent;