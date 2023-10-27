import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Footer from '../Component/Footer/Footer';



export default function Lissence() {
  return (
    <>
      <div className='container'>
        <br/>
        <br/>
      <h3>NGUỒN GỐC GIẤY PHÉP TÀI LIỆU</h3>
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
    img: 'https://community.windy.com/assets/uploads/files/1556863313113-screenshot-2019-05-03-at-07.52.45.png',
    title: 'WIND API',
    author: '@winds',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://i.morioh.com/2020/01/06/565edf0fd224.jpg',
    title: 'React Leaflet API',
    author: '@reactleaflet',
  },
  {
    img: 'https://geemap.org/assets/logo.png',
    title: 'geemap API',
    author: '@geemap',
  },
  {
    img: 'https://leafletjs.com/docs/images/logo-ua.png',
    title: 'Leaflet API',
    author: '@Leaflet',
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
  }

];