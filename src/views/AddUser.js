import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { UserShape } from 'types';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';

const AddUser = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <ViewWrapper as="form" onSubmit={handleAddUser}>
      <Title>Dodaj nowego studenta</Title>
      <FormField label="Imię" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Obecność" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Średnia" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <Button type="submit">Dodaj</Button>
    </ViewWrapper>
  );
};

AddUser.propTypes = {
  handleAddUser: PropTypes.func.isRequired,
  formValues: PropTypes.shape(UserShape),
  handleInputChange: PropTypes.func.isRequired,
};

export default AddUser;
