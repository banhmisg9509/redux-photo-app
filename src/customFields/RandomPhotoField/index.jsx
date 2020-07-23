import React from 'react';
import PropTypes from 'prop-types';
import { Label, FormGroup } from 'reactstrap';
import RandomPhoto from 'components/RandomPhoto';

function RandomPhotoField(props) {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;

  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl);
  };
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
      />
    </FormGroup>
  );
}

RandomPhotoField.propTypes = {
  form: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,

  label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
  label: '',
};

export default RandomPhotoField;
