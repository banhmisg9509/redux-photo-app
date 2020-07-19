import React from 'react';
import Banner from '../../../../components/Banner';
import PhotoForm from '../../components/PhotoForm';
import './styles.scss';

function AddEditPage(props) {
  return (
    <div className='photo-edit'>
      <Banner title='Pick your amazing photo :D' />
      <div className="photo-edit__form">
        <PhotoForm onSubmit={value => console.log('Form submit: ', value)} />
      </div>
    </div>
  );
}

AddEditPage.propTypes = {};

export default AddEditPage;
