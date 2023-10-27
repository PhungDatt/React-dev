/*=========================
        card - import 
=========================== */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Footer from '../Component/Footer/Footer';
import Alert from '@mui/material/Alert';





const ExpandMore = styled((props) => {


    const { expand, ...other } = props;
    
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

                                                                        /*================================
                                                                        Bảo trì - Maintanance
                                                                        ================================== */



const Maintenance = () => {

    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return (
        <>
        <div className="container">
            <br/>
            <h3>THÔNG BÁO VỀ VIỆC BẢO TRÌ</h3>
            <br/>
            <Alert variant="filled" severity="error">
    Cảnh báo! Đây là sản phẩm nghiên cứu và phát triển khoa học không gian và địa lí bởi lập trình viên cá nhân . Không nên, dùng dữ liệu của chúng tôi để đánh giá tình trạng thực tế. Chúng tôi miễn trừ trách nhiệm đối với các hành động gây ảnh hướng đến tính mạng cong người.Chúng tôi cũng không đại diện cho các tổ chức có thẩm quyền nào.      </Alert>
    <br/>

            <Card sx={{ maxWidth: '100%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"         src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/359716523_991945882220605_8275759544468379936_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zODn0AZuINoAX_EksnA&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfC-au2zrX9GAUVUREmVMzUQtVE8tvY0LhANPk2KyUEB-w&oe=65304AC7"
          >
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Flexible Technology"
        subheader="September 14, 2023"
      />
      <CardMedia
        component="img"
        height="450"
        image="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/391546628_166758206490486_1836229926737810293_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7mNqjRi5_zYAX81RhkH&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfDa66_H6TTwpgAzFm1Y84qcOuwxEGuL5JSTXYnnVMUp1A&oe=653022DE"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Chúng tôi rất tiếc phải thông báo rằng, do hệ thống đang trong quá trình phát triển và mở rộng nên chúng tôi! Có thể sẽ thay đổi và cập nhật bất ngờ và không có mốc thời gian rõ ràng cho việc thay đổi. Có thể bạn sẽ nhận được một cửa sổ thông báo trên hệ thống khi ghé thăm chúng tôi.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Chi tiết về việc bảo trì và nâng cấp</Typography>
          <Typography paragraph>
            Lần kế tiếp cải thiện và phát triển giao diện người dùng, các kế hoạch đẩy thông tin và dữ liệu có xác thực.
          </Typography>
          <Typography paragraph>
            Giai đoạn tiếp theo chúng tôi sẽ thiết kế và hoàn thiện Backend để dàng triển khai trên nhiều nền tảng, và theo 1 một kiến trúc nhất định đảm bảo tính toàn vẹn lẫn hiệu suất của hệ thống.
          </Typography>
          <Typography paragraph>
            Say khi hoạt động ổn định chúng tôi sẽ tích hợp Ai vào hệ thống để tự động hóa việc cập nhật dữ liệu cho chức năng mới và cũ đang tồn tại. Cốt lõi của chúng tôi
          </Typography>
          <Typography>
             Và cuối cùng, chúng tôi cam kết về việc tuân thủ pháp luật và đề cao sự thượng tôn pháp luật ở quốc gia của chúng tôi, lẫn bên ngoài. Với mục đích tạo ra giá trị và trải nghiệm mơí mẻ cho người dùng trong nhiều lĩnh vực.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
            <br/>
            <br/>
    
        </div>
        <Footer />
        </>
     
    );
}
export default Maintenance;