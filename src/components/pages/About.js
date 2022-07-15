import React from 'react';

const styles = {
  h1: {
    color: '#020402',
  },
  p: {
    color: '#020402',
  },
}

export default function About() {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>about-page</h1>
      <p style={styles.p}>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}
