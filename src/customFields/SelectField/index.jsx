import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { FormGroup, Label, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';

function SelectField(props) {
  const { field, form, options, label, placeholder, disabled } = props;
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const selectedOption = options.find((option) => option.value === value);

  const handleSelectedOptionChange = (selectedOption) => {
    form.setFieldValue(name, selectedOption.value);
  };

  const handleBlur = () => {
    form.setFieldTouched(name, true);
  };

  return (
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}
        <Select
          id={name}
          {...field}
          value={selectedOption}
          onChange={handleSelectedOptionChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          isDisabled={disabled}
          options={options}
          className={showError ? 'is-invalid' : ''}
        />
         <ErrorMessage name={name} component={FormFeedback} />
      </FormGroup>
  );
}

SelectField.propTypes = {
  field: PropTypes.object.isRequired, // belong to formik
  form: PropTypes.object.isRequired, // belong to formik

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
  options: [],
};

export default SelectField;
