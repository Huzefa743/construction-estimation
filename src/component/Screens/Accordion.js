import Accordion from 'react-bootstrap/Accordion';
import './accordion.css'
import TilesEstimation from './TilesEstimation';
function AccordionTag() {
  return (
    <Accordion className='mainContainer'>
      <Accordion.Item eventKey="0">

        <Accordion.Header><span >Tiles Estimation</span></Accordion.Header>
        <Accordion.Body>
         <TilesEstimation/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><span >Slab Estimation</span></Accordion.Header>
        <Accordion.Body>
         Coming soon....
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><span >Column Estimation</span></Accordion.Header>
        <Accordion.Body>
         Coming soon....
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionTag;