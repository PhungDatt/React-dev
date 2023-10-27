import Dropdown from 'react-bootstrap/Dropdown';

function Custommer() {
    return (
      <Dropdown  >
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="text-navbar">
          ĐỐI TÁC
        </Dropdown.Toggle>
  
        <Dropdown.Menu className="text-navbar">
          <Dropdown.Item href="Car" className="text-navbar">ĐƠN VỊ VẬN TẢI & LỮ HÀNH</Dropdown.Item>
          <Dropdown.Item href="Hotel" className="text-navbar">ĐƠN VỊ CƯ TRÚ</Dropdown.Item>
          <Dropdown.Item href="Food" className="text-navbar">ĐƠN VỊ ẨM THỰC</Dropdown.Item>
          <Dropdown.Item href="LTD" className="text-navbar">ĐƠN VỊ DOANH NGHIỆP</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  
  export default Custommer;