import Dropdown from 'react-bootstrap/Dropdown';

function Aboutus() {
    return (
      <Dropdown  >
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="text-navbar">
          VỀ CHÚNG TÔI
        </Dropdown.Toggle>
  
        <Dropdown.Menu   className="text-navbar" >
          <Dropdown.Item href="Introduce" className="text-navbar">GIỚI THIỆU</Dropdown.Item>
          <Dropdown.Item href="Blogs" className="text-navbar">BÀI VIẾT</Dropdown.Item>
          <Dropdown.Item href="Maintenance" className="text-navbar">BẢO TRÌ</Dropdown.Item>

          <Dropdown.Item href="Team" className="text-navbar">ĐỘI NGŨ</Dropdown.Item>


          <Dropdown.Item href="Contact" className="text-navbar">LIÊN HỆ</Dropdown.Item>
        </Dropdown.Menu>

      </Dropdown>
    );
  }
  
  export default Aboutus;