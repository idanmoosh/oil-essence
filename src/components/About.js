export default function About() {
  return (
    <div className='body'>
      <section className='Hero'>
        <div className='heroText'>
          {' '}
          <h2>About Oil Essence</h2>
          <p>
            Inspired by nature and Aromatherapy.
            <br />
            Oil Essence creating perfuming solution for houses and small
            businesses. giving options for your perfuming choice every season.
          </p>
        </div>
        <div className='heroImage'>
          <img className='logo' src='./media/4-2.png' alt='ProductImage' />
        </div>
      </section>
      <section className='Hero'>
        <div className='heroText'>
          {' '}
          <h2>Our Preium Club</h2>
          <p>
            perfume your space all year round. with a seasonal flavours.
            <br />
            <br />
            Each Season we will supply our Preium members with 3 bottles of
            personal choice. with premium membership a member will receive our
            unique Essential Oil diffuser for perfect scent distribution.
            <br />
            <br />
            In Oil Essence we believe in zero waste, each perfume bottle will be
            taken back to clean the waste responsibly and to reuse.
          </p>
        </div>
        <div className='heroImage'>
          <img
            className='oilImage'
            src='./media/oilbottles.jpg'
            alt='ProductImage'
          />
        </div>
      </section>
    </div>
  );
}
