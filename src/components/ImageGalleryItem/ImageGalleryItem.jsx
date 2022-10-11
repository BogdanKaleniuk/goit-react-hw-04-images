import PropTypes from 'prop-types';

import { Component } from 'react';
import { Item, Img } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';

export default class ImageGlleryItem extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };  

  render() {
    return (
      <>
        <Item id={this.props.item.id} onClick={this.toggleModal}>
          <Img src={this.props.item.webformatURL} alt={this.props.item.tags} />
          {this.state.showModal && <Modal image={this.props.item} toggleModal={this.toggleModal} />}
        </Item>
      </>
    );
  }
}

ImageGlleryItem.propTypes = {
  item: PropTypes.object.isRequired,
};