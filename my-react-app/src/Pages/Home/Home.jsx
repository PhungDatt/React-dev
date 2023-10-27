import React from 'react';
import Map from '../Component/Leaflet/Map/Map';
import Alert from '@mui/material/Alert';



const Home = () => {
    return (

        <>

<Alert variant="filled" severity="error">
    Cảnh báo! Đây là sản phẩm nghiên cứu và phát triển khoa học không gian và địa lí  bởi lập trình viên cá nhân. Không nên, dùng dữ liệu của chúng tôi để đánh giá tình trạng thực tế. Chúng tôi miễn trừ trách nhiệm đối với các hành động gây ảnh hướng đến tính mạng cong người.Chúng tôi cũng không đại diện cho các tổ chức có thẩm quyền nào.      </Alert>
 
        <Map />
        </>

    )
}

export default Home;