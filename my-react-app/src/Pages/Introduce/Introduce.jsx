import Carousels from '../Component/Carousels/Carousels';
import Footer from '../Component/Footer/Footer';
import Demo from './Demo';
import Alert from '@mui/material/Alert';

const Introduce = () => {
    
    return (
            
            <>
            <div className="container">
            <br/>
            <Alert variant="filled" severity="error">
    Cảnh báo! Đây là sản phẩm nghiên cứu và phát triển khoa học không gian và địa lí bởi lập trình viên cá nhân . Không nên, dùng dữ liệu của chúng tôi để đánh giá tình trạng thực tế. Chúng tôi miễn trừ trách nhiệm đối với các hành động gây ảnh hướng đến tính mạng cong người.Chúng tôi cũng không đại diện cho các tổ chức có thẩm quyền nào.      </Alert>
    <br/>
            <Carousels />
            <br/>
            <br/>
            <h5>MÔ TẢ ĐẦY ĐỦ VỀ CÁC CHỨC NĂNG TRÊN HỆ THỐNG</h5>
            <Demo />
            </div>
            <br/>
            <br/>
            <Footer />
            </>

                        

    )
}

export default Introduce;