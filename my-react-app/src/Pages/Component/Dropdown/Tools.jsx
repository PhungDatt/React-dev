import Dropdown from 'react-bootstrap/Dropdown';
import PrintApp from '../Print/PrintApp';

function Tools() {
  return (
    <Dropdown  >
      <Dropdown.Toggle variant="light" id="dropdown-basic" className="text-navbar">
        CÔNG CỤ
      </Dropdown.Toggle>

      <Dropdown.Menu className="text-navbar">
        <Dropdown.Item href="Chart" className="text-navbar">BIỂU ĐỒ</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-navbar"><PrintApp /></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Tools;