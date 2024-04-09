import React, { useEffect, useState } from 'react';
import 'firebase/database';
import { get, ref } from 'firebase/database';
import { database } from './config/firebase';


function Body() {

  const [sensorData, setSensorData] = useState({ Tc: "...", ntu: "...", wqi: "...", tds: "..." });
  const [waterQuality, setWaterQuality] = useState();
  const [log, setLog] = useState(true);

  const getData = async () => {
    const sensRef = await ref(database, 'Sensor');
    get(sensRef).then((snapshot) => {
      if (snapshot.exists()) {
        setSensorData(snapshot.val());
      } else {
        console.log("No data");
      }
    }).catch((error) => {
      console.error("Error fetched data:", error);
    })

  }

  useEffect(() => {
    getData();
  }, [])

  console.log(sensorData.tds);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="quality-box">
              <h1 style={{ fontWeight: 'bold', fontSize: 'xx-large' }}>Water Quality</h1>
              <h6 style={{ fontSize: 'large' }}>Good</h6> {/* Display water quality value in words */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="quality-box">
              <h1 style={{ fontWeight: 'bold', fontSize: 'xx-large' }}>Water Quality Index (WQI)</h1>
              <h6 style={{ fontSize: 'large' }}>{sensorData.wqi}</h6> {/* Display water quality index value */}
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row" style={{ marginLeft: '12%' }}>
            <section className="section_0">
              <div className="col-sm-4 text-center">
                <div className="circle">
                  <p className="offset" style={{ fontSize: '160%', fontWeight: 'bolder', color: 'whitesmoke' }}>TEMPERATURE</p>
                  <p className="card-text" style={{ fontSize: 'small' }}>{sensorData.Tc}</p>
                </div>
              </div>
              <div className="col-sm-4 text-center">
                <div className="circle">
                  <p className="offset" style={{ fontSize: '160%', fontWeight: 'bolder', color: 'whitesmoke' }}>TDS</p>
                  <p className="card-text" style={{ fontSize: 'small' }}>{sensorData.tds}</p>
                </div>
              </div>
              <div className="col-sm-4 text-center">
                <div className="circle">
                  <p className="offset" style={{ fontSize: '160%', fontWeight: 'bolder', color: 'whitesmoke' }}>TURBIDITY</p>
                  <p className="card-text" style={{ fontSize: 'small' }}>{sensorData.ntu}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body