import PHOTO_CATEGORY_OPTIONS from 'constants/Global';
import InputField from 'customFields/InputField';
import RandomPhotoField from 'customFields/RandomPhotoField';
import SelectField from 'customFields/SelectField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup } from 'reactstrap';

function PhotoForm(props) {
  const initialValues = {
    title: '',
    category: null,
    photo: ''
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {(formikProps) => {
        return (
          <Form>
            <FastField
              name='title'
              component={InputField}
              label='Title'
              placeholder='Eg: Wow nature ...'
            />

            <FastField
              name='category'
              component={SelectField}
              label='Category'
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name='photo'
              component={RandomPhotoField}
              label='Photo'
            />

            <FormGroup>
              <Button type='submit' color='primary'>
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

export default PhotoForm;
