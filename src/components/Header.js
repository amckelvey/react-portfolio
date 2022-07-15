import React from 'react';

const styles = {
  div: {
    minHeight: '100px',
    background: '#758173',
  },
  h1: {
    paddingTop: '20px',
    paddingLeft: '20px',
    color: '#020402',
  }
}

function Header() {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>andrew-mckelvey-portfolio-title-placeholder-thing</h1>
    </div>
  );
}


export default Header;
