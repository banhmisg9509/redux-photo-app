import PHOTO_CATEGORY_OPTIONS from 'constants/Global';
import Images from 'constants/Images';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function PhotoForm() {
  return (
    <Form>
      <FormGroup>
        <Label for='titleId'>Title</Label>
        <Input id='titleId' name='title' placeholder='Eg: Wow nature' />
      </FormGroup>
      <FormGroup>
        <Label for='categoryId'>Category</Label>
        <Select
          id='categoryId'
          name='category'
          placeholder="What's your photo category?"
          options={PHOTO_CATEGORY_OPTIONS}
        />
      </FormGroup>
      <FormGroup>
        <Label for='categoryId'>Photo</Label>
        <div>
          <Button type='button' outline color='primary'>
            Random a photo
          </Button>
        </div>
        <div>
          <img
            src={Images.COLORFUL_BG}
            alt='colorful-img'
            width='200px'
            height='200px'
          />
        </div>
      </FormGroup>
      <FormGroup>
        <Button color='primary'>Add to album</Button>
      </FormGroup>
    </Form>
  );
}

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.propTypes = {
  onSubmit: null,
};

export default PhotoForm;
