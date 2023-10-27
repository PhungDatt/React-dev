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



export default function CompanyCar() {

  const [value] = React.useState(5);

  // Create api handle click
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar  src="https://saotaxi.com/upload/hinhanh/logosaotaxi-7945.jpg" >
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Sao taxi"
        subheader="September 16, 2023"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://saotaxi.com/upload/hinhanh/8730544676120970.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Thành phố Tuy Hòa, Việt Nam
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
          Sao Taxi 

          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Sao taxi là đơn vị kinh doanh dịch vụ đưa đón khách ở thành phố Tuy Hòa

          
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