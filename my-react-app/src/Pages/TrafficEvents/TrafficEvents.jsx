import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Footer from '../Component/Footer/Footer';
import Maptraffic from '../Component/Leaflet/Map/MapTraffic';
import Alert from '@mui/material/Alert';






                                                             /*===========================
                                                                    Traffic Events Products
                                                            ============================*/



const columns = [


  { id:'id',label:'Thứ tự', minWidth:5, background: '#3E59D9' , color:'#fff' },
  { id: 'name', label: 'Tên sự kiện', minWidth: 200, background: '#3E59D9' , color:'#fff' },
  { id: 'note', label: 'Mô tả', minWidth: 200, background: '#3E59D9' , color:'#fff'  },
  { id: 'location', label: 'Địa chỉ', minWidth: 120, align: 'right', background: '#3E59D9' , color:'#fff' },
  { id: 'position', label: 'Tọa độ ', minWidth: 80,align: 'right', background: '#3E59D9' , color:'#fff' },
  { id: 'image', label: 'Hình ảnh ', minWidth: 80,align: 'right', background: '#3E59D9' , color:'#fff' },
  { id: 'video', label: 'Video ', minWidth: 80,align: 'right', background: '#3E59D9' , color:'#fff' },
  { id: 'drive', label: 'Lái xe', minWidth: 80,align: 'right', background: '#3E59D9' , color:'#fff' },
  { id: 'createtime', label: 'Thời gian tạo ', minWidth: 120,align: 'right', background: '#3E59D9' , color:'#fff' },
  { id: 'writetime', label: 'Thời gian sửa ', minWidth: 120,align: 'right', background: '#3E59D9' , color:'#fff' },



];



                                                           /*===========================
                                                            Traffic Events Products - Fetch Api
                                                            ============================*/


function createData(id, name, note , location , position,drive,image,video,createtime,writetime) {





  return {
    id,
    note,
    name,
    location, 
    position,
    drive,
    image,
    video,
    createtime,
    writetime
  };


}

const rows = [
  createData('1','NHẮM MẮT 1 GIÂY TAI NẠN XẢY RA', 'Tuyên truyền về thượng tôn pháp luật','Thành Phố Tuy Hòa, Phú Yên','13.111550242179373, 109.30052626761565','Bắt đầu','https://daily.jstor.org/wp-content/uploads/2017/12/traffic_jam_1050x700.jpg','https://www.youtube.com/watch?v=3Ed04ZwasLQ','10-14-2023','10-14-2023'),
  createData('2','ĐÃ LÁI XE THÌ KHÔNG UỐNG RƯỢU BIA', 'Tuyên truyền về thượng tôn pháp luật','Thành Phố Tuy Hòa, Phú Yên','13.110038303150034, 109.29693523263286','Bắt đầu','https://daily.jstor.org/wp-content/uploads/2017/12/traffic_jam_1050x700.jpg','https://www.youtube.com/watch?v=3Ed04ZwasLQ','10-14-2023','10-14-2023'),
  createData('3','ĐANG CÓ SỰ THI CÔNG', ' Đang có sự cố hư hỏng, và thi công trên đường','Thành Phố Tuy Hòa, Phú Yên','13.111550242179373, 109.30052626761565','Bắt đầu','https://daily.jstor.org/wp-content/uploads/2017/12/traffic_jam_1050x700.jpg','https://www.youtube.com/watch?v=3Ed04ZwasLQ','10-14-2023','10-14-2023'),
  createData('4','ĐANG CÓ SỰ THI CÔNG', ' Đang có sự cố hư hỏng, và thi công trên đường','Thành Phố Tuy Hòa, Phú Yên','13.111550242179373, 109.30052626761565','Bắt đầu','https://daily.jstor.org/wp-content/uploads/2017/12/traffic_jam_1050x700.jpg','https://www.youtube.com/watch?v=3Ed04ZwasLQ','10-14-2023','10-14-2023'),
  createData('5','ĐANG CÓ SỰ THI CÔNG', ' Đang có sự cố hư hỏng, và thi công trên đường','Thành Phố Tuy Hòa, Phú Yên','13.111550242179373, 109.30052626761565','Bắt đầu','https://daily.jstor.org/wp-content/uploads/2017/12/traffic_jam_1050x700.jpg','https://www.youtube.com/watch?v=3Ed04ZwasLQ','10-14-2023','10-14-2023'),
  createData('6','ĐANG CÓ SỰ THI CÔNG', ' Đang có sự cố hư hỏng, và thi công trên đường','Thành Phố Tuy Hòa, Phú Yên','13.111550242179373, 109.30052626761565','Bắt đầu','https://daily.jstor.org/wp-content/uploads/2017/12/traffic_jam_1050x700.jpg','https://www.youtube.com/watch?v=3Ed04ZwasLQ','10-14-2023','10-14-2023'),

];


                                                                /*===========================
                                                                Call api Traffic Events - HOOK
                                                                ============================*/


export default function TrafficEvents() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
                                                                 /*===========================
                                                                     Show Data List 
                                                                ============================*/
  return (
    <>
    <div className="container">
        <br/>
    <h5>SỰ KIỆN GIAO THÔNG</h5>
    <br/>
    <Alert variant="filled" severity="error">
    Cảnh báo! Đây là sản phẩm nghiên cứu và phát triển khoa học không gian và địa lí bởi lập trình viên cá nhân . Không nên, dùng dữ liệu của chúng tôi để đánh giá tình trạng thực tế. Chúng tôi miễn trừ trách nhiệm đối với các hành động gây ảnh hướng đến tính mạng cong người.Chúng tôi cũng không đại diện cho các tổ chức có thẩm quyền nào.      </Alert>
    <br/>
<br/>

    <Paper sx={{ width: '100%', overflow: 'hidden'}}   >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead >           
            <TableRow >
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth , background: column.background, color: column.color }} >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
            
          </TableHead>


          {/*produce page*/}
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                    {columns.map((column) => {
                      const value = row[column.id ];
                      return (
                        
                        <TableCell key={column.id} align={column.align}   >    

                           {column.format && typeof value === 'number'? column.format(value): value }
                      </TableCell>
                      
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>

        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[4,8,10,100,1000]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

    </Paper>
    <br/>
    

    <br/>
    <h5>TỌA ĐỘ SỰ KIỆN TƯƠNG ỨNG</h5>
    <br/>
    <Maptraffic />
     </div>
    
     <br/>
     <br/>
     <Footer />
    </>
    
  );
}