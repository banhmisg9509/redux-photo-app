import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'reactstrap';
import './PhotoCard.scss';

function PhotoCard(props) {
  const { photo, onEditClick, onRemoveClick, onClick } = props;

  const handleEditClick = (e) => {
    e.stopPropagation();
    if (onEditClick) onEditClick(photo);
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    if (onRemoveClick) onRemoveClick(photo);
  };

  return (
    <div className='photo' onClick={onClick}>
      <img src={photo.photo} alt={photo.title} />
      <div className='photo__overlay'>
        <h3 className='photo__title'>{photo.title}</h3>
        <div className='photo__actions'>
          <div>
            <Button outline size='sm' color='light' onClick={handleEditClick} > Edit </Button>
          </div>
          <div>
            <Button outline size='sm' color='danger' onClick={handleRemoveClick} > Remove </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

PhotoCard.propTypes = {
  photos: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
  onClick: PropTypes.func,
};

PhotoCard.defaultProps = {
  photo: {},
  onEditClick: null,
  onRemoveClick: null,
  onClick: null,
};

export default PhotoCard;
