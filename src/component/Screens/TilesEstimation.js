import React, { useState } from 'react';
import {Button, Table }from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function TilesEstimation() {
  const [validated, setValidated] = useState(false);
  const [resultVisibility, setResultVisibility] = useState(true);

 //input variables
  const [areaLength, setAreaLength] = useState(null);
  const [areaWidth, setAreaWidth] = useState(null);
  const [tileLength, setTileLength] = useState(null);
  const [tileWidth, setTileWidth] = useState(null);
  const [labourRate, setLabourRate] = useState(null);
  const [cementBegRate, setCementRate] = useState(null);
  const [sandCubicRate, setSandCubicRate] = useState(null);

  //calculation variables
  const [baseArea, setBaseArea] = useState(null);
  const [runningArea, setRunningArea] = useState(null);
  const [totalArea, setTotalArea] = useState(null);
  const [tileArea, setTileArea] = useState(null);
  const [numberOfTile, setNumberOfTile] = useState(null);
  const [mortar, setMortar] = useState(null);
  const [cementInKg, setCementInKg] = useState(null);
  const [numberOfCementBeg, setNumberOfCementBeg] = useState(null);
  const [cementPrice, setCementPrice] = useState(null);
  const [sandInCubic, setSandInCubic] = useState(null);
  const [sandPrice, setSandPrice] = useState(null);

  //onSubmitHandle
  function calculations(){
    console.log("calculation is running...")
    let baseArea = areaLength*areaWidth
    setBaseArea(baseArea)
    let runningArea = ((2*areaLength)+(2*areaWidth))-3
    setRunningArea(runningArea)
    let totalArea = baseArea+runningArea
    setTotalArea(totalArea)
    let tilesArea = tileLength*tileWidth
    setTileArea(tilesArea)
    console.log((baseArea/tilesArea)+" " +((runningArea*0.33)/tilesArea))
    let numberOfTiles = Math.round((baseArea/tilesArea)+((runningArea*0.33)/tilesArea))
    console.log("no of tile", numberOfTiles)
    setNumberOfTile(numberOfTiles)
    let mortar = (((areaLength*areaWidth*0.33)*1.33)/36.93).toFixed(2)
    setMortar(mortar)
    let cementInKg = (((mortar*1)/7)*1440).toFixed(2)
    setCementInKg(cementInKg)
    let numberOfCementBegs = Math.round(cementInKg/50)
    setNumberOfCementBeg(numberOfCementBegs)
    let cementPrice = numberOfCementBegs*cementBegRate
    setCementPrice(cementPrice)
    let sandInCubic = (((mortar*6)/7)*35.31).toFixed(2)
    setSandInCubic(sandInCubic)
    let sandPrice = (sandInCubic*sandCubicRate).toFixed(2)
    setSandPrice(sandPrice)
    setResultVisibility(false)
  }
  
  function getAreaLength(value){
    setAreaLength(value)
  }
  function getAreaWidth(value){
    setAreaWidth(value)
  }
  function getTileLength(value){
    setTileLength(value)
  }
  function getTileWidth(value){
    setTileWidth(value)
  }
  function getLabourRate(value){
    setLabourRate(value)
  }
  function getCementRate(value){
    setCementRate(value)
  }
  function getSandRate(value){
    setSandCubicRate(value)
  }


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log("called handle submit")

     if(areaLength!=null && areaWidth!=null && tileLength!=null && tileWidth!=null && labourRate!=null && cementBegRate!=null && sandCubicRate!=null){
        if(areaLength.length!=0 && areaWidth.length!=0 && tileLength.length!=0 && tileWidth.length!=0 && labourRate!=0 && cementBegRate.length!=0 && sandCubicRate.length!=0){
            calculations()
            console.log("success")
        }
        else{
            console.log("failed")
        }
     }
     else{
        console.log("failed...")
     }

  };

  function resetHandle(){
    window.location.reload()
  }



  return (
    <>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col}  controlId="validationCustom01">
          <Form.Label>Area Length(in feet)</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Area Length"
            onChange={(event)=>getAreaLength(event.target.value)}
          />
          
        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustom02">
          <Form.Label>Area Width(in feet)</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Area Width"
            onChange={(event)=>getAreaWidth(event.target.value)}
          />
         
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}  controlId="validationCustom01">
          <Form.Label>Tile Length(in feet)</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Tile Length"
            onChange={(event)=>getTileLength(event.target.value)}
            
          />
         
        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustom02">
          <Form.Label>Tile Width(in feet)</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Tile Width"
            onChange={(event)=>getTileWidth(event.target.value)}
           
          />
          
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}  controlId="validationCustom01">
          <Form.Label>Cement Price(per beg)</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Cement Price"
            onChange={(event)=>getCementRate(event.target.value)}
           
          />
          
        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustom02">
          <Form.Label>Sand Price(in cubic)</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Sand Price"
            onChange={(event)=>getSandRate(event.target.value)}
           
          />
          
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6"  controlId="validationCustom01">
          <Form.Label>Labour Rate</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Labour Rate"
            onChange={(event)=>getLabourRate(event.target.value)}
          />
          
        </Form.Group>
       
      </Row>
     
      <Button  style={{marginRight:20}} onClick={handleSubmit}>Submit form</Button>
      <Button variant="secondary" onClick={resetHandle}>Reset</Button>
    </Form>

    <div style={{marginTop:20}} hidden={resultVisibility} >
        <h6>Calculation Result : </h6>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Values</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1.</td><td>Base Area</td><td>{baseArea} sq. feet</td></tr>
        <tr><td>2.</td><td>Total Area</td><td>{totalArea} sq. feet</td></tr>
        <tr><td>3.</td><td>Running Area</td><td>{runningArea} sq. feet</td></tr>
        <tr><td>4.</td><td>Tiles Area</td><td>{tileArea} sq. feet</td></tr>
        <tr><td>5.</td><td>No. of Tile</td><td>{numberOfTile}</td></tr>
        <tr><td>6.</td><td>Mortar</td><td>{mortar} m3</td></tr>
        <tr><td>7.</td><td>Cement Quantity</td><td>{cementInKg} KG</td></tr>
        <tr><td>8.</td><td>No. of Cement Beg</td><td>{numberOfCementBeg}</td></tr>
        <tr><td>9.</td><td>Total Cement Price</td><td>Rs. {cementPrice}</td></tr>
        <tr><td>10.</td><td>Sand In Cubic</td><td>{sandInCubic} CFT</td></tr>
        <tr><td>11.</td><td>Sand Price</td><td>Rs. {sandPrice}</td></tr>

      </tbody>
      </Table>

    </div>
    </>
  );
}

 export default TilesEstimation;