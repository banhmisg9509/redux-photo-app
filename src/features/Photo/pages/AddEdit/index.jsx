import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto, editPhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './styles.scss';

function AddEditPage({ addPhoto, editPhoto }) {
  const history = useHistory();
  const { photoId } = useParams();
  const isAddMode = !photoId;

  const editedPhoto = useSelector((state) =>
    state.photos.find((p) => p.id === photoId)
  );

  const getIdFromUrl = (url) => {
    const re = /id\/(\d+)\//g;
    return +re.exec(url)[1];
  };

  const handleAddPhoto = (values) => {
    const newPhoto = {
      ...values,
      id: getIdFromUrl(values.photo),
    };

    addPhoto(newPhoto);
  };

  const handleEditPhoto = (values) => {
    editPhoto(values);
  };

  const handleSubmit = (values) => {
    isAddMode ? handleAddPhoto(values) : handleEditPhoto(values);
    history.push('/photos');
  };

  const initialValues = isAddMode
    ? {
        title: '',
        category: null,
        photo: '',
      }
    : editedPhoto;

  return (
    <div className='photo-edit'>
      <Banner title='Pick your amazing photo 😎' />
      <div className='photo-edit__form'>
        <PhotoForm
          initialValues={initialValues}
          isAddMode={isAddMode}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

AddEditPage.propTypes = {};

const mapDispatchToProps = { addPhoto, editPhoto };

export default connect(null, mapDispatchToProps)(AddEditPage);
