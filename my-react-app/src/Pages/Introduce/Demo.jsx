import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

                                                    /*============================
                                                    Mô tả chức năng của hệ thống
                                                    ==============================*/
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Demo() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Mô tả chức năng sự kiện giao thông</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Đây là chức năng, thông đến người dùng về các sự kiện giao thông và thông điệp đang xảy ra và có thể xảy ra. Như tình trạng lưu lượng giao thông, bị ngập , đá rơi,... Bên cạnh đó có thể kết hợp các thiết bị giám sát và cảm biến thông minh để quan sát và cảnh báo sớm. Để người dùng có thể đưa ra một kế hoạch phù hợp dựa trên nhu cầu di chuyển của bản thân.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Mô tả chức năng cứu hộ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Đây là chức năng, hiển thị thông tin yêu cầu cứu hộ và bị nạn, nhiều trường hợp và kịch bản khác nhau. Điển hình thực tế là khi xe bị gặp sự cố, cần kết nối liên lạc với đơn vị cung cấp dịch vụ cứu hộ. Thông tin người và đồ vật bị mất tích thất lạc.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Mô tả chức năng Radar </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Đây là chức năng mô tả về tình trạng thời tiết và lưu lượng độ dày của mây các vùng áp thấp, cơn bão thời gian thực . Để cảnh báo về khả năng mưu và thảm họa thời tiết có thể xảy ra.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Mô tả chức ẩm thực</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Đây là chức năng, mô tả các kinh đoanh đơn vị ẩm thực trên 1 tọa độ cụ thể, cơ sở văn hóa và ẩm thực đặc trưng cho 1 kế hoạch du lịch cụ thể.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Mô tả chức đơn vị cư trú</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Đây là chức năng, mô tả các đơn vị cung cấp dịch vụ và kinh doanh cư trú như khu nghĩ dưỡng và du lịch, khách sạn trên 1 tọa độ cụ thể.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Mô tả chức năng đường biểu đồ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Đây là chức năng, mô tả đánh gía kết quả và lọc xếp dữ liệu của chúng tôi lên biểu đồ để đánh gía hiệu quả hoạt động.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
      <Typography>Mô tả chức năng phát radios và videos </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Đây là chức năng phát dữ liệu giải trí từ các nguồn thông tin bên thứ 3.
          </Typography>
        </AccordionDetails>
      </Accordion>
            
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>Chức năng đang xây dựng </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Đường cao tốc, Xem thông tin camera, các dữ liệu nhiệt, vẽ vector,....
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography>Kế hoạch theo dõi quản lí tài sản</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Có gì trong kế hoạch này, sử dụng truy vấn từ ai để cải thiện sai số từ 1 đối tượng tài sản. Có thể theo dõi dựa trên các thiết bị được kết nối tích hợp cho đối tượng đó.
          </Typography>
        </AccordionDetails>
      </Accordion>


    </div>
  );
}