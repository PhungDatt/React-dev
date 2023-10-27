import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';



      
const Maptraffic= () => {

    
                                                                            /*=====================
                                                                            Call Api Data Camera
                                                                            ======================*/
           const markers  = [
                {  position:  [13.111550242179373, 109.30052626761565], name: 'THƯỢNG TÔN PHÁP LUẬT' , Createtime: '20-9-2023', Writetime: '10-10-2023'},
                {  position: [13.110038303150034, 109.29693523263286], name:' GIỚI HẠN TỐC ĐỘ 60 KM', Createtime: '20-9-2023', Writetime: '10-10-2023' },
                {  position: [13.110888229338364, 109.30440825566257], name: ' PHÍA TRƯỚC TAY LÁI LÀ CUỘC SỐNG' , Createtime: '20-9-2023', Writetime: '10-10-2023'},
            ];


        // Create data maping events traffic
        const customIcon = L.icon({
            iconUrl: 'https://511ny.org/Content/Images/ic_messageSign.png',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
        });

    return (
        <div>
        <MapContainer center={[14.534234419755219, 108.77677123626921]} zoom={5} style={{ height: '300px', width: '100%' }}>
        <TileLayer
            attribution='Flexible &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
             <MarkerClusterGroup >
                {markers.map((marker, index) => (
                <Marker key={index} position={marker.position} name={marker.name} icon={customIcon}>
                <Popup><h2><img src="https://511ny.org/Content/Images/ic_messageSign.svg" /> Thông Tin Giao Thông</h2><br/><p>Tọa độ cho biết:"<br/><b>{marker.position}</b>".  </p><h3 className='title-content'>{marker.name}</h3><br/><p> Thời gian tạo:<b>{marker.Createtime}</b> Thời gian sửa: <b>{marker.Writetime}</b></p></Popup>
                </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
        </div>


    )
};

export default Maptraffic;