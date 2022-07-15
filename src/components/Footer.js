import React from 'react';

const styles = {
  div: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    background: '#A9C5A0',
  },
  h3: {
    color: '#020402',
  }
}

function Footer() {
  return (
    <div style={styles.div}>
      <h3 style={styles.h3}>footer-content-placeholder-thing</h3>
      
    </div>
  );
}

export default Footer;