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

                                                                  /*======================
                                                                  Team API - info
                                                                  ======================= */
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function Team() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <div className="container">
      <br/>
      <br/>
      <h3>ĐỘI NGŨ XÂY DỰNG</h3>
      <br/>
      <br/> 
      <Alert variant="filled" severity="error">
    Cảnh báo! Đây là sản phẩm nghiên cứu và phát triển khoa học không gian và địa lí bởi lập trình viên cá nhân . Không nên, dùng dữ liệu của chúng tôi để đánh giá tình trạng thực tế. Chúng tôi miễn trừ trách nhiệm đối với các hành động gây ảnh hướng đến tính mạng cong người.Chúng tôi cũng không đại diện cho các tổ chức có thẩm quyền nào.      </Alert>
    <br/>
    <Card sx={{ maxWidth: '100%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/359716523_991945882220605_8275759544468379936_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zODn0AZuINoAX_EksnA&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfCin6aW3F_Sd6vvWaiIoldoH42q5OIuOdHqarfu5sf9yA&oe=65324507">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title=" Flexible Technology"
        subheader="September 14, 2023"
      />
      <CardMedia
        component="img"
        height="500px"
        image="https://media4.giphy.com/media/8IKJxUV6PTQhq/200.webp?cid=ecf05e47l268b0i35nbftgr6gy39wrw6z35xzbuqq58t5mo6&ep=v1_gifs_related&rid=200.webp&ct=g"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Không có ai rảnh rổi cả! chỉ có cậu thanh niên này thôi .
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
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>       
           Tốt nghiệp Trường Đại Học NGUYỄN TẤT THÀNH , với đề tài khóa luận trong lĩnh vực giao thông thông minh (ITS), chuyên ngành công nghệ phần mềm. Do cảm thấy yêu thích việc nghiên cứu khoa học nên  đã cho ra đời sản phẩm. Bản đồ giao thông, cảnh báo thông tin đến người dân.
          </Typography>
          <Typography paragraph>
            Kinh nghiệm nghiên cứu:
            - Đọc và hiểu tài liệu bằng Tiếng Anh
            - R&D Công nghệ mới
          
          </Typography>
          <Typography paragraph>
            Kinh nghiệm làm việc: 
            - Triển khai thu phí không dừng Vetc
            - Nhân viên triển khai phần mềm
            - Nhân viên bán hàng phần mềm
            - Có hiểu biết về .net , asp.net core
            - Có hiểu viết vè Rect.dev
            - Có hiểu biết về cơ sở liệu sql server
            - Kiến trúc Client - Server , Resfull API.
            - Fullstack
   
          </Typography>
          <Typography>

          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    <br/>
    <br/>
    <Footer />
    </>
  
  );
}
