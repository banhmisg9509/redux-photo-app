import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Label } from 'reactstrap';
import Select from 'react-select';

function SelectField(props) {
  const { field, form, options, label, placeholder, disabled } = props;
  const { name, value } = field;
  const selectedOption = options.find((option) => option.value === value);

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    form.setFieldValue(name, selectedValue);
  };

  return (
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}
        <Select
          id={name}
          {...field}
          value={selectedOption}
          onChange={handleSelectedOptionChange}
          placeholder={placeholder}
          isDisabled={disabled}
          options={options}
        />
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
