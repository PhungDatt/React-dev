import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../ExampleCarouselImage/ExampleCarouselImage';
import ExampleCarouselImage2 from '../ExampleCarouselImage/ExampleCarouselImage2';
import ExampleCarouselImage3 from '../ExampleCarouselImage/ExampleCarouselImage3';

const Carousels = () => {

    return (
     <Carousel slide={false}  >
      <Carousel.Item className="Carousels-items">
      <ExampleCarouselImage text="First slide"  />
      <Carousel.Caption>
      <h3>Ý TƯỞNG TỪ BẮC MỸ VÀ NAM MỸ</h3>
      <p>Ứng dụng được nghiên cứu và học tập từ công nghệ giao thông của họ  trong lĩnh vực ITS từ Chicago và New York.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Carousels-items">
      <ExampleCarouselImage2 text="Second slide" />
      <Carousel.Caption >
      <h3>KHÔNG NGỪNG HỌC HỎI VÀ TIẾN BỘ</h3>
      <p>Ứng dụng và học tập theo mô hình giao thông đô thị của Đức và Trung Quốc đại lục vào giải pháp nhỏ này trong việc phổ biến thông tin đến người dân.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Carousels-items">
      <ExampleCarouselImage3 text="Third slide" />
      <Carousel.Caption>
      <h3>MONG MUỐN TẠO RA GIÁ TRỊ VÀ TRẢI NGHIỆM MỚI MẺ</h3>
      <p>
Với tinh thần thượng tôn pháp luật, chúng tôi sẽ không ngừng nỗ lực và vươn mình để hoàn thiện bản thân hơn.
      </p>
      </Carousel.Caption>
      </Carousel.Item>
     </Carousel> 
 
    )
}

export default Carousels;