import { MapContainer, TileLayer, WMSTileLayer, LayersControl, Marker, Popup, LayerGroup } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useState } from "react";
import MarkerClusterGroup from 'react-leaflet-cluster';
import LocationMarker  from '../Geoloaction/Geolocations';
import 'leaflet/dist/leaflet.css';
import ReactPlayer from 'react-player';
// import windy map 
import { useRef } from 'react' ;
import LeafletVelocity from "../Winds/LeafletVelocity";




                                                                    /*=================
                                                                    Api Data radar
                                                                    ==================*/
const RADAR_MAPS_URL = "https://api.rainviewer.com/public/weather-maps.json";

const getMostRecentWeatherMap = async () => {
  const res = await fetch(RADAR_MAPS_URL);
  const resJson = await res.json();
  return resJson.radar.nowcast[0].path;
};  


                                                            
                                                                    /*=================
                                                                    MapComponent
                                                                    ==================*/

const Map =()=> {
                                                                /*=====================
                                                                Winds - Gobal
                                                                =======================*/
            const layerControlRef = useRef();
                                                                    /*=================
                                                                    Call APi Data radar
                                                                    ==================*/
            const [mostRecentWeatherMap, setMostRecentWeatherMap] = useState(null);

                useEffect(() => {
                (async () => {
                    const path = await getMostRecentWeatherMap();
                    setMostRecentWeatherMap(path);
                })();

            }, 
            []);

                                                                     /*======================
                                                                     Call API Data Location Vn
                                                                    ========================*/
            const vn =[
                {position:[16.357359653753125, 112.43511290469482], name:'Quần đảo Hoàng Sa của Việt Nam, thuộc tỉnh Đà Nẵng'},
                {position:[10.77212057077956, 115.86010558295074],name:'Quần đảo Trường Sa của Việt Nam, thuộc tỉnh Khánh Hòa'},
                {position:[9.620913053872947, 112.99588456561405],name:'Quần đảo Trường Sa của Việt Nam, thuộc tỉnh Khánh Hòa'}

            ];

                                                                        /*====================
                                                                        Call Api Data Giao thông
                                                                        ================= */
            const markers  = [
                {  position:  [13.111550242179373, 109.30052626761565], name: 'THƯỢNG TÔN PHÁP LUẬT' , Createtime: '20-9-2023', Writetime: '10-10-2023'},
                {  position: [13.110038303150034, 109.29693523263286], name:' GIỚI HẠN TỐC ĐỘ 60 KM', Createtime: '20-9-2023', Writetime: '10-10-2023' },
                {  position: [13.110888229338364, 109.30440825566257], name: ' PHÍA TRƯỚC TAY LÁI LÀ CUỘC SỐNG' , Createtime: '20-9-2023', Writetime: '10-10-2023'},
            ];

                                                                        /*========================
                                                                        Call Api sự kiện giao thông
                                                                        =========================*/
            const Events = [
                {  position:  [13.413314037928469, 109.18417164814248], name: 'test' ,name:'TÌM NGƯỜI MẤT TÍCH', note:'Tìm anh Nguyễn Thanh Sang, bỏ nhà đi chưa về.',Createtime: '20-9-2023', Writetime: '10-10-2023'},
                {  position: [12.856801263566938, 109.15223812778478], name:'test',name:'TÌM XE VÀ NGƯỜI MẤT TÍCH',note:'Tìm anh Cường đem xe đi cầm chưa về nhad',Createtime: '20-9-2023', Writetime: '10-10-2023'},
                {  position: [13.010294886310575, 108.75148988709398], name: ' test',name:'TÌM CỨU HỘ',note:'Xe bị thủng yêu cầu cứu hộ zalo gặp huy :06437468366',Createtime: '20-9-2023', Writetime: '10-10-2023'},
            ];

                                                                            /*=====================
                                                                            Call Api Data Camera
                                                                            ======================*/
            const Camera = [
                {  position:  [13.194148572887872, 109.3014520518871], name: 'bãi xếp', video:'"https://www.youtube.com/watch?v=eltR2OyF2Ts&ab_channel=ABC7Chicago"',Createtime: '20-9-2023', Writetime: '10-10-2023' },
                {  position: [13.126935576964112, 109.30089215379766], name:'tháp nghênh phong',video:'"https://www.youtube.com/watch?v=B2FyItES2WM&ab_channel=ABC7"',Createtime: '20-9-2023', Writetime: '10-10-2023' },
                {  position: [13.076214637338506, 109.33788535982096], name: ' rêu xanh xóm rớ',video:'"https://www.youtube.com/watch?v=HRluOTrZOWE&t=134s&ab_channel=CBSMornings"',Createtime: '20-9-2023', Writetime: '10-10-2023' },
            ];

                                                                            /*=====================
                                                                            Custom icon giao thông
                                                                            ==========================*/
            const customIcon = L.icon({
                iconUrl: 'https://511ny.org/Content/Images/ic_messageSign.png',
                iconSize: [32, 32],
                iconAnchor: [16, 32],
            });

                                                                            /*===============
                                                                            Custom icon quốc kỳ 
                                                                           ================*/
            const customIconvn= L.icon({
                iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png',
                iconSize: [32, 32],
                iconAnchor: [16, 32],
            });

                                                                    /*===============
                                                                     Custom icon sự  cố
                                                                     ================*/
            const customIconsk= L.icon({
                iconUrl: 'https://511ny.org/Content/Images/ic_truckRestriction.png',
                iconSize: [32, 32],
                iconAnchor: [16, 32],
            });
                                                                    /*===============
                                                                    Custom icon Camera
                                                                        ================*/
    const customIconcamera= L.icon({
            iconUrl: 'https://511ny.org/Content/Images/ic_camera.png',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
      });
                                                                    /*============================
                                                                    Trả DATA về LayerControls Group
                                                                    ==============================*/

    return (
        <>
                                                                    {/*============================
                                                                    Tạo ra bản đồ 
                                                                    =============================*/} 
        <MapContainer animate={true}  center={[14.534234419755219, 108.77677123626921]} zoom={5 } style={{ height: '650px', width: '100%' }} >    
                                                                    {/*============================
                                                                    Quần đảo hoàng sa và trường sa
                                                                    =============================*/}          
            {vn.map((marker, index) => (
            <Marker key={index} position={marker.position}name={marker.name} icon={customIconvn} >
            <Popup>{marker.name}</Popup>
            </Marker>
            ))}


      
        <LayersControl ref={layerControlRef}>


                                                                    {/*============================
                                                                    Khởi tạo bản đồ leaflet ban ngày
                                                                    =============================*/}  
        <LayersControl.BaseLayer checked name="Sáng">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />attribution='<img src="https://react-leaflet.js.org/img/logo-name.svg" alt="react-leaflet"/>'                        
        </LayersControl.BaseLayer>




                                                                    {/*============================
                                                                    Khởi tạo bản đồ leaflet ban đêm
                                                                    =============================*/}    
        <LayersControl.BaseLayer name="Tối">
            <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />attribution='<img src="https://react-leaflet.js.org/img/logo-name.svg" alt="react-leaflet"/>'
        </LayersControl.BaseLayer >   
                                                                    
                                                                    {/*============================
                                                                    Khởi tạo bản đồ leaflet vệ tinh
                                                                    =============================*/}    
     <LayersControl.BaseLayer name="Vệ tinh">
        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />attribution='<img src="https://react-leaflet.js.org/img/logo-name.svg" alt="react-leaflet"/>'
     </LayersControl.BaseLayer >  

                                                                    {/*============================
                                                                    Khởi tạo bản đồ Topomap
                                                                    =============================*/}  

     <LayersControl.BaseLayer name=" Địa hình và độ cao">
        <TileLayer url='https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png' />attribution='<img src="https://react-leaflet.js.org/img/logo-name.svg" alt="react-leaflet"/>'
     </LayersControl.BaseLayer >      
                                                                    
                   

                                                                    {/*============================
                                                                      Check box sự cố giao thông
                                                                    =============================*/}  

     <LayersControl.Overlay checked name="Giao thông">                           
        <LayerGroup  >
            <MarkerClusterGroup >
                {markers.map((marker, index) => (
                <Marker key={index} position={marker.position} name={marker.name} icon={customIcon}>
                <Popup><h2><img src="https://511ny.org/Content/Images/ic_messageSign.svg" /> Thông Tin Giao Thông</h2><br/><p>Tọa độ cho biết:"<br/><b>{marker.position}</b>".  </p><h3 className='title-content'>{marker.name}</h3><br/><p> Thời gian tạo:<b>{marker.Createtime}</b> Thời gian sửa: <b>{marker.Writetime}</b></p></Popup>
                </Marker>
                ))}
            </MarkerClusterGroup>
        </LayerGroup>                            
     </LayersControl.Overlay >      

                                                                     {/*============================
                                                                      Check box  Cứu hộ
                                                                    =============================*/}  
     <LayersControl.Overlay checked name="Cứu hộ">                           
        <LayerGroup>                      
            <MarkerClusterGroup >
                {Events.map((marker, index) => (
                <Marker key={index} position={marker.position}name={marker.name} icon={customIconsk} >
                <Popup><h2><img src="https://511ny.org/Content/Images/ic_truckRestriction.png" /> Thông Tin Cứu Hộ</h2><br/><p>Tọa độ cho biết:"<br/><b>{marker.position}</b>". <br/> Mô tả: {marker.note} </p><h3 className='title-content'>{marker.name}</h3><br/><p> Thời gian tạo:<b>{marker.Createtime}</b> Thời gian sửa: <b>{marker.Writetime}</b></p></Popup>
                </Marker>
                ))}
            </MarkerClusterGroup>
        </LayerGroup>    
     </LayersControl.Overlay > 



                                                                     {/*============================
                                                                      Check box  Camera
                                                                    =============================*/}  

     <LayersControl.Overlay checked name="Camera">                           
        <LayerGroup>                      
            <MarkerClusterGroup >
                {Camera.map((marker, index) => (
                <Marker key={index} position={marker.position}name={marker.name} icon={customIconcamera} >
                <Popup><h2>
                <img src="https://511ny.org/Content/Images/ic_camera.png" 
                />
                    Thông Tin Camera
                    </h2>
                    <br/>
                    <p>Tọa độ cho biết:"<br/><b>{marker.position}</b>".</p> 
                    <ReactPlayer className='video-content' url={marker.video} />
                    <br/>
                    <p> Thời gian tạo:<b>{marker.Createtime}</b> Thời gian sửa: <b>{marker.Writetime}</b> 
                    </p>
                    </Popup>
                </Marker>
                ))}
            </MarkerClusterGroup>
        </LayerGroup>    
     </LayersControl.Overlay > 

      
                                                                     {/*============================
                                                                      Check box  Radar mây mù
                                                                    =============================*/}  
        <LayersControl.Overlay  name="Radar Đám mây">
            <LayerGroup>              
                <TileLayer   attribution="RainViewer.com" url={`https://tilecache.rainviewer.com${mostRecentWeatherMap}/512/{z}/{x}/{y}/6/1_0.png`} opacity={5} zIndex={20}  sx={{    display: "flex",flexDirection: "column",flexGrow: 2000}}/>        
            </LayerGroup>
         </LayersControl.Overlay >  
         <LeafletVelocity ref={layerControlRef} />  
       

     
                                                                     {/*============================
                                                                      Check box  geolocation
                                                                    =============================*/}  
       <LayersControl.Overlay name=" Vị trí của bạn ">  
            <LayerGroup>
                <LocationMarker/>                     
            </LayerGroup>                         
        </LayersControl.Overlay >  


       </LayersControl>
      
     


   </MapContainer>
        </>
    )
}

export default Map;