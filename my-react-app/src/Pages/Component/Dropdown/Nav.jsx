import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown  >
      <Dropdown.Toggle variant="light" id="dropdown-basic" className="text-navbar">
        GIAO THÔNG & HÓA CẢNH
      </Dropdown.Toggle>

      <Dropdown.Menu className="text-navbar">
        <Dropdown.Item href="TrafficEvents" className="text-navbar">THÔNG ĐIỆP GIAO THÔNG</Dropdown.Item>
        <Dropdown.Item href="UrgentEvents" className="text-navbar">SỰ KIỆN KHẨN CẤP</Dropdown.Item>
        <Dropdown.Item href="TransitEvents" className="text-navbar">SỰ KIỆN QUÁ CẢNH</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;