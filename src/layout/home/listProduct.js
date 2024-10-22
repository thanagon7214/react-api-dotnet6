import React, { Component,useEffect } from 'react';
import { Card ,CardGroup } from 'react-bootstrap';
import styles from '../../vendor/css/frontStore/home/listProduct.module.css'; 
const ListProduct =()=>{
    return (
        <CardGroup>
          <Card style={{margin:'10px'}}>
            <Card.Img className={styles['image-Ratio']} variant="top" src="/upload/image/product/2004.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
          <Card style={{margin:'10px',borderLeft: '1px solid #D3D3D3'}}>
            <Card.Img className={styles['image-Ratio']}  variant="top" src="/upload/image/product/bag3-1.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
          <Card style={{margin:'10px',borderLeft: '1px solid #D3D3D3'}}>
            <Card.Img className={styles['image-Ratio']}  variant="top" src="/upload/image/product/shoe6-1.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{margin:'10px',borderLeft: '1px solid #D3D3D3'}}>
            <Card.Img className={styles['image-Ratio']}  variant="top" src="/upload/image/product/shoe6-1.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{margin:'10px',borderLeft: '1px solid #D3D3D3'}}>
            <Card.Img className={styles['image-Ratio']}  variant="top" src="/upload/image/product/shoe6-1.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      );
}
export default ListProduct;