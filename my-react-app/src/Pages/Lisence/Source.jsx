import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Footer from '../Component/Footer/Footer';



export default function TitlebarImageList() {
  return (
    <>
      <div className='container'>
        <br/>
        <br/>
      <h3>THÀNH PHẦN SỬ DỤNG </h3>
      <br/>
      <br/>

      <ImageList className='Source-img'>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div"></ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>

    </div>
    <br/>
    <br/>
    <Footer />

    </>


    
  );
}

const itemData = [
  {
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png',
    title: 'Khung React.Dev',
    author: '@react.dev',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.wondershare.com/mockitt/ui-design/material-ui-introduction.jpg',
    title: 'Giao diện người dùng Material UI',
    author: '@materialui',
  },
  {
    img: 'https://justinmahar.gallerycdn.vsassets.io/extensions/justinmahar/react-bootstrap-snippets/2.1.1/1695846856229/Microsoft.VisualStudio.Services.Icons.Default',
    title: 'Giao diện controls React Bootstrap ',
    author: '@reactbootstrap',
  },
  {
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--1T-6xjbd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/5yndhsw3a6w97wj9inrv.png',
    title: 'Thư viện React Leaflet',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://assets.website-files.com/5d3ef00c73102c436bc83996/5d3ef00c73102c1f23c83a2a_logo-reversed.png',
    title: 'Thưu viện MapBox GL JS ',
    author: '@mapboxjs',
    cols: 2,
  },
  {
    img: 'https://miro.medium.com/v2/resize:fit:814/1*53YH_jyczQiZ3s-Kz6kmIQ.png',
    title: 'Thư viện Opentreetmap',
    author: '@opentreetmap',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://www.chartjs.org/img/chartjs-logo.svg',
    title: 'Biểu đồ dữ liệuChart.js',
    author: '@chart.js',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://felixgerschau.com/static/fa651cd484a311b10490beb4c5731f92/a312f/tsx-react-cover.jpg',
    title: 'Tích hợp TypeScript React',
    author: '@chart',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://codeopinion.com/wp-content/uploads/2017/06/Bitmap-MEDIUM_ASP.NET-Core-MVC-Logo_2colors_Square_Boxed_RGB.png',
    title: 'Backend ASP.NET CORE API ',
    author: '@ASP.NETcoreapi',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://miro.medium.com/v2/resize:fit:402/1*KTDZHTVaVbvbyhIf2PmBAw.png',
    title: 'Database MICROSOFT SQL SERVER ',
    author: '@sqlserver',
    rows: 2,
    cols: 2,
    featured: true,
  },
];