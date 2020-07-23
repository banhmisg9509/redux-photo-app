import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

function InputField(props) {
  const { field, type, label, placeholder, disabled } = props;
  const { name } = field;
  // const { name, value, onChange, onBlur } = field;
  return (
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}
        <Input
          id={name}
          {...field}

          type={type}
          disabled={disabled}
          placeholder={placeholder}
        />
      </FormGroup>
  );
}

InputField.propTypes = {
  field: PropTypes.object.isRequired, // belong to formik
  form: PropTypes.object.isRequired, // belong to formik

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
};

export default InputField;
