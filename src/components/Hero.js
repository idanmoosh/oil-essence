import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className='Hero'>
      <div className='heroText'>
        {' '}
        <h2>Take a breath...</h2>
        <p>
          {' '}
          Perfume your space, change your enviorment. with Oil Essence you can
          allow yourself to be at peace anywhere.
          <br />
          <span>
            <Link className='HeroSpan' to='/Store'>
              Join us
            </Link>
          </span>{' '}
          with our premium subsciption.
          <br /> whether you're at home, at the office or on vacation. you can
          use <span className='HeroSpan'>Oil Essence</span>
        </p>
      </div>
      <div className='heroImage'>
        <img
          className='heroImageFile'
          src={'./media/HeroImage.jpg'}
          alt='ProductImage'
        />
      </div>
    </section>
  );
}
