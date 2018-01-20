import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
    position: 'relative',

  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const RefreshIndicatorExampleLoading = () => (
  <div style={style.container}>
    <RefreshIndicator
      size={40}
      left={50}
      top={50}
      status="loading"
      style={style.refresh}
    />
  </div>
);

export default RefreshIndicatorExampleLoading;
