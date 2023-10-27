import Dropdown from 'react-bootstrap/Dropdown';

function Warning() {
  return (
    <Dropdown  >
      <Dropdown.Toggle variant="light" id="dropdown-basic" className="text-navbar">
        CẢNH BÁO BỔ SUNG
      </Dropdown.Toggle>

      <Dropdown.Menu className="text-navbar">
        <Dropdown.Item href="#/action-1" className="text-navbar">CẢNH BÁO TỪ CHÚNG TÔI</Dropdown.Item>
        <Dropdown.Item href="Lisence" className="text-navbar">GIẤY PHÉP</Dropdown.Item>
        <Dropdown.Item href="Source" className="text-navbar">NGUỒN GỐC</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Warning;