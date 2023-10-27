import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import modals ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';


                                                        /*=================================
                                                        Company-customer
                                                        ================================== */
  const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height:'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p:4,
  };
  // create rating 



export default function CompanyFood() {

  const [value] = React.useState(5);

  // Create api handle click
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar  src="" >
            B
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Bánh canh hẹ Phú Yên"
        subheader="September 16, 2023"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://vcdn-dulich.vnecdn.net/2022/05/24/banh-canh-he-phu-yen-01-7674-1-6754-3119-1653364396.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        16 Đ. Trần Thị Điệu, Phước Long B, Quận 9, Thành phố Hồ Chí Minh, Việt Nam
        </Typography>
      </CardContent>

      <CardActions disableSpacing>

      <Button onClick={handleOpen}>Xem thêm</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Bánh canh hẹ Phú Yên ở Sài Gòn

          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
Sợi bánh canh, hẹ, chả cá... được mang từ Phú Yên vào Sài Gòn để làm nên món ăn đúng điệu, nhưng nước dùng ít nhiều thay đổi.

Du khách đến Phú Yên có thể dễ dàng thưởng thức bánh canh hẹ ở bất kỳ một quán ven đường nào, vào bất kỳ buổi nào. Món ăn bình dị nhưng đòi hỏi sự tỉ mỉ, công phu của người làm, từ sợi bánh, nước lèo đến các loại chả cá biển ăn kèm. Món ăn gây ấn tượng bởi màu hẹ phủ xanh cả tô.

Không chỉ riêng bánh canh mới có loại hẹ này mà các món khác như bánh ướt, bánh hỏi, bánh bèo cũng có quét mỡ hẹ, bắp nướng mắm nêm cũng pha với hẹ trong khi những nơi khác thường dùng cây hành. Hẹ có mặt ở mọi nơi như một nguyên liệu không thể thiếu trong ẩm thực xứ "hoa vàng cỏ xanh".

Ở Sài Gòn có nhiều hàng quán bán bánh canh hẹ được đánh giá hương vị gần như ở Phú Yên. Bà Nguyễn Thị Năm (60 tuổi), bán bánh canh hẹ trên đường Lê Thánh Tông, quận Tân Phú, là người Phú Yên vào Sài Gòn lập nghiệp. Bà nói ở quê có nguồn hải sản phong phú, người nấu bánh canh không dùng xương heo hay thịt như ở thành phố mà nấu bằng cá biển, loại cá khi nấu nước dùng sẽ có vị ngọt tự nhiên, kèm chút dư vị biển. "Ngoài vị ngọt thanh thì nước dùng sẽ có mùi hơi tanh của cá, bỏ hẹ vào để giảm mùi tanh đó đi và món ăn sẽ thơm hơn", bà Năm giải thích lý do món bánh canh phủ xanh màu hẹ.
          </Typography>
        </Box>
      </Modal>


      <Rating name="read-only" value={value} readOnly />

        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
      
    </Card>
  );
}