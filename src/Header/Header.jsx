import "./Header.css"
import {Button} from 'react-bootstrap';

function Header() {
  return (
    <div className="Header">
      <Button variant="primary">Button</Button>
      <p>Изменил надпись в Header</p>
    </div>
  );
}

export default Header;
