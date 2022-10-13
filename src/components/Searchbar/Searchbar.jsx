import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { AiFillForward } from 'react-icons/ai';
import { Search, FormEl, Input, Btn } from './Searchbar.styled';

export default function SearchBar({ onSubmit }) {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
  };
  return (
    <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Search>
          <FormEl>
            <Btn type="submit" disabled={isSubmitting}>
              <AiFillForward size={35} />
            </Btn>
            <Input
              name="searchQuery"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </FormEl>
        </Search>
      )}
    </Formik>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

