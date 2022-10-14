import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyle, ModalWindow, Img } from './Modal.styled';

const rootModal = document.querySelector('#rootModal');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
      console.log('Нажали на ескейп')
    }
  };

  handleClickOnBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
      console.log('Нажали на бекдроп но не робе')
    }
  };

  render() {
    const { image } = this.props;
    return createPortal(
      <ModalStyle onClick={this.handleClickOnBackdrop}>
        <ModalWindow onClick={this.handleKeyDown}>
          <Img src={image.largeImageURL} alt={image.tags} />
        </ModalWindow>
      </ModalStyle>,
      rootModal,
    );
  }
}

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  toggleModal: PropTypes.func.isRequired,
};