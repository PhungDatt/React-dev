import React from 'react'
import CompanyFood  from './CompanyFood';
import Footer from '../Component/Footer/Footer';
import Alert from '@mui/material/Alert';
// import stack, pângititon
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const Company = () => {
    return (
        <>
        
        <div className='container'>
            <br/>
            <br/>
            <h5>ĐƠN VỊ ẨM THỰC</h5>
            <br/>
            <br/>   
             <Alert variant="filled" severity="error">
    Cảnh báo! Đây là sản phẩm nghiên cứu và phát triển bởi lập trình viên cá nhân. Không nên, dùng dữ liệu của chúng tôi để đánh giá tình trạng thực tế. Chúng tôi miễn trừ trách nhiệm đối với các hành động gây ảnh hướng đến tính mạng cong người.Chúng tôi cũng không đại diện cho các tổ chức có thẩm quyền nào.      </Alert>
    <br/>
            <CompanyFood />
            <br/>
            <br/>
            <Stack spacing={1} style={{ marginLeft:'35%'}}>
            <Pagination count={10} color="primary" />
            </Stack>
            <br/>
        </div>
        <Footer />

        </>

    )
}
export default Company;