import ReactDOM from 'react-dom';

function ModalMenuMobile({children}) {
  return ReactDOM.createPortal(
    children,
    document.getElementById('menu-mobile')
  )
}

export default ModalMenuMobile