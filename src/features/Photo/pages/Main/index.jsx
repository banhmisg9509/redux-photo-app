import Banner from 'components/Banner';
import Images from 'constants/Images';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { useSelector } from 'react-redux';

function MainPage() {
  const photos = useSelector((state) => state.photos);

  return (
    <div className='photo-main'>
      <Banner title='Your awsome photos' backgroundUrl={Images.PINK_BG} />
      <Container className='text-center'>
        <Link to='/photos/add'>Add new photo</Link>
      </Container>
      <div className='container'>
        {photos.map((photo) => {
          return (
            <div>
              <pre>{JSON.stringify(photo)}</pre>
            </div>
          );
        })}
      </div>
    </div>
  );
}

MainPage.propTypes = {};

export default MainPage;
