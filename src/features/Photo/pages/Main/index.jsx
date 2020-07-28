import Banner from 'components/Banner';
import Images from 'constants/Images';
import PhotoList from 'features/Photo/components/PhotoList';
import { fetchPhotos, removePhoto } from 'features/Photo/photoSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';

function MainPage() {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePhotoEditClick = (photo) => {
    history.push(`/photos/${photo.id}`);
  };

  const handlePhotoRemovceClick = (photo) => {
    dispatch(removePhoto(photo));
  };

  useEffect(() => {
      dispatch(fetchPhotos());
  }, [dispatch])

  return (
    <div className='photo-main'>
      <Banner title='Your awsome photos 🎉' backgroundUrl={Images.PINK_BG} />
      <Container className='text-center'>
        <div className='py-5'>
          <Link to='/photos/add'>Add new photo</Link>
        </div>
        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemovceClick={handlePhotoRemovceClick}
        />
      </Container>
    </div>
  );
}

MainPage.propTypes = {};

export default MainPage;
