import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';



      
const MapUrgent = () => {

    
                                                                            /*=====================
                                                                            Call Api Data Camera
                                                                            ======================*/
            const Events = [
                {  position:  [13.413314037928469, 109.18417164814248], name: 'test' ,name:'TÌM NGƯỜI MẤT TÍCH', note:'Tìm anh Nguyễn Thanh Sang, bỏ nhà đi chưa về.',Createtime: '20-9-2023', Writetime: '10-10-2023'},
                {  position: [12.856801263566938, 109.15223812778478], name:'test',name:'TÌM XE VÀ NGƯỜI MẤT TÍCH',note:'Tìm anh Cường đem xe đi cầm chưa về nhad',Createtime: '20-9-2023', Writetime: '10-10-2023'},
                {  position: [13.010294886310575, 108.75148988709398], name: ' test',name:'TÌM CỨU HỘ',note:'Xe bị thủng yêu cầu cứu hộ zalo gặp huy :06437468366',Createtime: '20-9-2023', Writetime: '10-10-2023'},
            ];
                                                                /*===============
                                                                     Custom icon sự  cố
                                                                     ================*/
            const customIconsk= L.icon({
                iconUrl: 'https://511ny.org/Content/Images/ic_truckRestriction.png',
                iconSize: [32, 32],
                iconAnchor: [16, 32],
            });
                
    return (
        <div>
        <MapContainer center={[14.534234419755219, 108.77677123626921]} zoom={5} style={{ height: '300px', width: '100%' }}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
             <MarkerClusterGroup >
             {Events.map((marker, index) => (
                <Marker key={index} position={marker.position}name={marker.name} icon={customIconsk} >
                <Popup><h2><img src="https://511ny.org/Content/Images/ic_truckRestriction.png" /> Thông Tin Cứu Hộ</h2><br/><p>Tọa độ cho biết:"<br/><b>{marker.position}</b>". <br/> Mô tả: {marker.note} </p><h3 className='title-content'>{marker.name}</h3><br/><p> Thời gian tạo:<b>{marker.Createtime}</b> Thời gian sửa: <b>{marker.Writetime}</b></p></Popup>
                </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
        </div>


    )
};

export default MapUrgent;