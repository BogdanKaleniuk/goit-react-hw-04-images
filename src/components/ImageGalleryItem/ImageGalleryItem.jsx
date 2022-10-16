import PropTypes from 'prop-types';

import { useState } from 'react';
import { Item, Img } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';

export default function ImageGlleryItem({ item }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };  

    return (
      <>
        <Item 
        id={item.id} >
          <Img 
          src={item.webformatURL} 
          alt={item.tags} 
          onClick={toggleModal}/>
          {showModal && <Modal image={item} toggleModal={toggleModal} />}
        </Item>
      </>
    );
  };


ImageGlleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};


// import PropTypes from 'prop-types';

// import { Component } from 'react';
// import { Item, Img } from './ImageGalleryItem.styled';
// import Modal from 'components/Modal/Modal';

// export default class ImageGlleryItem extends Component {
//   state = { showModal: false };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };  

//   render() {
//     return (
//       <>
//         <Item 
//         id={this.props.item.id} >
//           <Img 
//           src={this.props.item.webformatURL} 
//           alt={this.props.item.tags} 
//           onClick={this.toggleModal}/>
//           {this.state.showModal && <Modal image={this.props.item} toggleModal={this.toggleModal} />}
//         </Item>
//       </>
//     );
//   }
// }

// ImageGlleryItem.propTypes = {
//   item: PropTypes.shape({
//     webformatURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//   }),
// };