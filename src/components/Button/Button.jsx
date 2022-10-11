import PropTypes from 'prop-types';

import { LoadMore } from './Button.styled';

export default function LoadMoreBtn({ onClick }) {
  return (
    <LoadMore type="button" onClick={onClick}>
      Load more
    </LoadMore>
  );
}

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
