import PropTypes from 'prop-types';
import { Component } from 'react';
import { ModalStyle, ModalWindow, Img } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  handleClikOnBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.props.toggleModal();
    }
  };

  render() {
    return (
      <ModalStyle onClick={this.handleBackdropClick}>
        <ModalWindow>
          <Img src={this.props.image.largeImageURL} alt={this.props.image.tags} />
        </ModalWindow>
      </ModalStyle>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.object({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  toggleModal: PropTypes.func.isRequired,
};