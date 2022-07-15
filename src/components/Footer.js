import React from 'react';

const styles = {
  div: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '30px'
,    background: '#A9C5A0',
  },
  h4: {
    color: '#020402',
    textAlign: 'center',
  }
}

function Footer() {
  return (
    <div style={styles.div}>
      <h4 style={styles.h4}>Made with ❤️ by Andrew McKelvey</h4>
      
    </div>
  );
}

export default Footer;