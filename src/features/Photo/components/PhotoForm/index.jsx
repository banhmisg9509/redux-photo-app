import PHOTO_CATEGORY_OPTIONS from 'constants/Global';
import InputField from 'customFields/InputField';
import RandomPhotoField from 'customFields/RandomPhotoField';
import SelectField from 'customFields/SelectField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';

function PhotoForm(props) {
  const { initialValues, isAddMode } = props;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required.'),

    category: Yup.number().required('This field is required.').nullable(),

    photo: Yup.string().when('category', {
      is: 1,
      then: Yup.string().required('This field is required.'),
      otherwise: Yup.string().notRequired(),
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { isSubmitting } = formikProps;
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
                {isSubmitting ? (
                  <Spinner
                    size='sm'
                    style={{ marginBottom: '3px', marginRight: '5px' }}
                  />
                ) : null}
                {isAddMode ? 'Add to Album' : 'Update your photo'}
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
