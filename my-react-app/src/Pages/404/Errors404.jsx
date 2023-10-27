import React from 'react';
import Footer from '../Component/Footer/Footer';

const Errors404 = () => {
    return (
<>
<div className='container'>
        <section class="page_404">
          <div class="container">
            <div class="row">	
            <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
            <div class="four_zero_four_bg">
                <h1 class="text-center ">404</h1>
            </div>		
            <div class="contant_box_404">
            <h3 class="h2">
             Xin lỗi vì sự cố đã xảy ra?
            </h3>
            <p>Trang bạn đang cố gắng tìm kiếm không tồn tại</p>		
            <a href="" class="link_404">RollBack</a>
          </div>
            </div>
            </div>
            </div>
          </div>
        </section>

        </div>
<Footer />

</>
   

    )
};
export default Errors404 ;