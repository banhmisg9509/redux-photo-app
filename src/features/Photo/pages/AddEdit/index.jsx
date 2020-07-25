import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './styles.scss';

function AddEditPage({ addPhoto }) {
  const history = useHistory();
  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        addPhoto(values);
        history.push('/photos');
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className='photo-edit'>
      <Banner title='Pick your amazing photo 😎' />
      <div className='photo-edit__form'>
        <PhotoForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

AddEditPage.propTypes = {};

const mapDispatchToProps = { addPhoto };

export default connect(null, mapDispatchToProps)(AddEditPage);
