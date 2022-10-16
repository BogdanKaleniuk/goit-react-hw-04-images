import PropTypes from 'prop-types';
import { useEffect  } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyle, ModalWindow, Img } from './Modal.styled';

const rootModal = document.querySelector('#rootModal');

export default function Modal({image, toggleModal}) {
    useEffect(() => {
    const handleKeyDown = e => {
    if (e.code === 'Escape') {
      toggleModal();
      console.log('Нажали на ескейп')
    }
  };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
    window.removeEventListener('keydown', handleKeyDown);
      };
    }, [toggleModal]);
    
  const handleClickOnBackdrop = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
      console.log('Нажали на бекдроп но не робе')
    }
    }
    
  return createPortal(
      <ModalStyle onClick={handleClickOnBackdrop}>
        <ModalWindow>
          <Img src={image.largeImageURL} alt={image.tags} />
        </ModalWindow>
      </ModalStyle>,
      rootModal,
    );
  }

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  toggleModal: PropTypes.func.isRequired,
};



// import PropTypes from 'prop-types';
// import { Component } from 'react';
// import { createPortal } from 'react-dom';
// import { ModalStyle, ModalWindow, Img } from './Modal.styled';

// const rootModal = document.querySelector('#rootModal');

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.toggleModal();
//       console.log('Нажали на ескейп')
//     }
//   };

//   handleClickOnBackdrop = e => {
//     if (e.currentTarget === e.target) {
//       this.props.toggleModal();
//       console.log('Нажали на бекдроп но не робе')
//     }
//   };

//   render() {
//     const { image } = this.props;
//     return createPortal(
//       <ModalStyle onClick={this.handleClickOnBackdrop}>
//         <ModalWindow onClick={this.handleKeyDown}>
//           <Img src={image.largeImageURL} alt={image.tags} />
//         </ModalWindow>
//       </ModalStyle>,
//       rootModal,
//     );
//   }
// }

// Modal.propTypes = {
//   image: PropTypes.shape({
//     largeImageURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//   }),
//   toggleModal: PropTypes.func.isRequired,
// };