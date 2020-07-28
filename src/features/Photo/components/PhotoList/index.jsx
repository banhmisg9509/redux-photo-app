import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'reactstrap';
import PhotoCard from '../PhotoCard';
import { SRLWrapper, useLightbox } from 'simple-react-lightbox';

function PhotoList(props) {
  const { photoList, onPhotoEditClick, onPhotoRemovceClick } = props;
  const { openLightbox } = useLightbox();

  return (
    <SRLWrapper>
      <Row>
        {photoList.map((photo, index) => (
          <Col key={photo.id} xs='12' md='6' lg='3'>
            <PhotoCard
              onClick={() => openLightbox(index)}
              photo={photo}
              onEditClick={onPhotoEditClick}
              onRemoveClick={onPhotoRemovceClick}
            />
          </Col>
        ))}
      </Row>
    </SRLWrapper>
  );
}

PhotoList.propTypes = {
  photoList: PropTypes.array,
  onPhotoEditClick: PropTypes.func,
  onPhotoRemovceClick: PropTypes.func,
};

PhotoList.defaultProps = {
  photoList: [],
  onPhotoEditClick: null,
  onPhotoRemovceClick: null,
};

export default PhotoList;
