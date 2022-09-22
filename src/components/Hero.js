import { Link } from 'react-router-dom';

import HeroImage from '../media/HeroImage.jpg';

export default function Hero() {
  return (
    <section className='Hero'>
      <div className='heroText'>
        {' '}
        <h2>Take a breath...</h2>
        <p>
          {' '}
          Perfume you space, change your enviorment. with Oil Essence you can
          allow yourself to be at peace anywhere.
          <span>
            <Link to='/Store'>Join Us</Link>
          </span>{' '}
          with our premium Subsciption. wether you're at home, office or
          Vacation. you can use <span>Oil Essence</span>
        </p>
      </div>
      <div className='heroImage'>
        <img className='heroImageFile' src={HeroImage} alt='ProductImage' />
      </div>
    </section>
  );
}
