import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
  
export default function Apps() {
  return (
    <div style={{ display: 'block', padding: 30 }}>
      <h4>How to use Pagination Component in ReactJS?</h4>
      <Pagination count={10} />
    </div>
  );
}
