import React from 'react';

import '../assets/style/loading.css';

export default ({ active }) => {
  return active && (
    <div className="loading"></div>
  );
};
