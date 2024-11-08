import React, { Component,useEffect } from 'react';
import { Card ,CardGroup,Row,Col,Container,Button} from 'react-bootstrap';
import styles from '../../vendor/css/frontStore/home/listProduct.module.css'; 
import { CartFill } from 'react-bootstrap-icons';
// ใช้ Redux hooks
import {  useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../../actions';
const ListProduct =()=>{
   const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart); 
    const handleToCart = async(id) => {
     console.log(id);
     try {
      // ใช้ URL ที่รวม id เข้าไปเพื่อดึงข้อมูลเฉพาะแถวที่ต้องการ
      const response = await fetch(`https://localhost:7136/api/products/${id}`);
      
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      
      const result = await response.json();
     
    if (!cart || cart.length === 0) {
         // ถ้า cart ว่าง ให้เพิ่ม result เป็น item แรก พร้อม count = 1
      dispatch(addToCart({ ...result, count: 1 }));
    } else {
            // ถ้า cart มีสินค้าอยู่แล้ว ให้ทำการเช็คและเพิ่มได้ตามเงื่อนไข
          // ตัวอย่าง: ตรวจสอบว่ามีสินค้าที่ id ตรงกันอยู่ใน cart แล้วหรือไม่
            const existingItem = cart.find((item) => item.id === id);

            if (existingItem) {
                console.log("Item already in cart");
                // ที่นี่สามารถเขียนโค้ดเพื่อเพิ่ม count ของสินค้าที่มีอยู่แล้วได้
                dispatch(addToCart({ ...existingItem, count: existingItem.count + 1 }));
            } else {
                // ถ้าเป็นสินค้าที่ใหม่สำหรับ cart ก็เพิ่มเข้าไปพร้อม count = 1
                dispatch(addToCart({ ...result, count: 1 }));
            }
    }
    console.log(cart)
      // dispatch(addToCart(result)); 
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log(false);
    }
    };
    return (
        <CardGroup>
        <Container fluid="md">
           <Row className={styles['row-margin-top-bottom-custom']}>
            <p className="text-th-cus ml-2 text-xl inline-block" lang="th">สินค้าแนะนำ เสื้อ</p>
            
           </Row>
           <Row className={styles['row-justify-content-custom']}>
            <Col className={styles['col-width-max-min']}>
           
                <Card style={{margin:'10px',border:'0px',height: '100%'}}>
                  <Card.Img className={styles['image-Ratio']} variant="top" src="/upload/image/product/2004.png" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer style={{ marginTop: 'auto !important'}}>
                    <div className={styles['flex-layout-button-cart-custom']}><span className="text-muted" style={{paddingTop: '6px'}}>Add Cart</span><Button onClick={() => handleToCart(4)}  className={styles['button-cart']}><CartFill size={24} /></Button></div>
                  </Card.Footer>
                </Card>
          
            </Col>
            <Col className={styles['col-width-max-min']}>
           
                <Card style={{margin:'10px',borderLeft: '1px solid #D3D3D3',border:'0px',height: '100%'}}>
                  <Card.Img className={styles['image-Ratio']}  variant="top" src="/upload/image/product/2006.png" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to
                      additional content.{' '}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer style={{ marginTop: 'auto !important'}}>
                    <div className={styles['flex-layout-button-cart-custom']}><span className="text-muted" style={{paddingTop: '6px'}}>Add Cart</span><Button onClick={() => handleToCart(54)}  className={styles['button-cart']}><CartFill size={24} /></Button></div>
                  </Card.Footer>
                </Card>
             
            </Col>
            <Col className={styles['col-width-max-min']}>
              
                <Card style={{margin:'10px',borderLeft: '1px solid #D3D3D3',border:'0px',height: '100%'}}>
                  <Card.Img className={styles['image-Ratio']}  variant="top" src="/upload/image/product/2008.png" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This card has even longer content than the
                      first to show that equal height action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer style={{ marginTop: 'auto !important'}}>
                    <div className={styles['flex-layout-button-cart-custom']}><span className="text-muted" style={{paddingTop: '6px'}}>Add Cart</span><Button onClick={() => handleToCart(55)}  className={styles['button-cart']}><CartFill size={24} /></Button></div>
                  </Card.Footer>
                </Card>
             
            </Col>
            <Col className={styles['col-width-max-min']}>
          
                <Card style={{margin:'10px',borderLeft: '1px solid #D3D3D3',border:'0px',height: '100%'}}>
                  <Card.Img className={styles['image-Ratio']}  variant="top" src="/upload/image/product/2009.png" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This card has even longer content than the
                      first to show that equal height action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer style={{ marginTop: 'auto !important'}}>
                    <div className={styles['flex-layout-button-cart-custom']}><span className="text-muted" style={{paddingTop: '6px'}}>Add Cart</span><Button onClick={() => handleToCart(56)}  className={styles['button-cart']}><CartFill size={24} /></Button></div>
                  </Card.Footer>
                </Card>
             
            </Col>
        
           
          </Row>
          <Row className={styles['row-margin-top-bottom-custom']}>
            <p className="text-th-cus ml-2 text-xl inline-block" lang="th">สินค้าแนะนำ รองเท้า</p>
            
          </Row>
          <Row className={styles['row-justify-content-custom']}>
            <Col className={styles['col-width-max-min']}>
          
                <Card style={{margin:'10px',border:'0px',height: '100%'}}>
                  <Card.Img className={styles['image-Ratio']} variant="top" src="/upload/image/product/shoe3-1.png" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer style={{ marginTop: 'auto !important'}}>
                    <div className={styles['flex-layout-button-cart-custom']}><span className="text-muted" style={{paddingTop: '6px'}}>Add Cart</span><Button onClick={() => handleToCart(57)}  className={styles['button-cart']}><CartFill size={24} /></Button></div>
                  </Card.Footer>
                </Card>
          
            </Col>
            <Col className={styles['col-width-max-min']}>
          
                <Card style={{margin:'10px',borderLeft: '1px solid #D3D3D3',border:'0px',height: '100%'}}>
                  <Card.Img className={styles['image-Ratio']}  variant="top" src="/upload/image/product/shoe4-1.png" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to
                      additional content.{' '}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer style={{ marginTop: 'auto !important'}}>
                    <div className={styles['flex-layout-button-cart-custom']}><span className="text-muted" style={{paddingTop: '6px'}}>Add Cart</span><Button onClick={() => handleToCart(58)}  className={styles['button-cart']}><CartFill size={24} /></Button></div>
                  </Card.Footer>
                </Card>
            
            </Col>
            <Col className={styles['col-width-max-min']}>
              
                <Card style={{margin:'10px',borderLeft: '1px solid #D3D3D3',border:'0px',height: '100%'}}>
                  <Card.Img className={styles['image-Ratio']}  variant="top" src="/upload/image/product/shoe7-1.png" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This card has even longer content than the
                      first to show that equal height action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer style={{ marginTop: 'auto !important'}}>
                    <div className={styles['flex-layout-button-cart-custom']}><span className="text-muted" style={{paddingTop: '6px'}}>Add Cart</span><Button onClick={() => handleToCart(59)}  className={styles['button-cart']}><CartFill size={24} /></Button></div>
                  </Card.Footer>
                </Card>
            
            </Col>
            <Col className={styles['col-width-max-min']}>
          
                <Card style={{margin:'10px',borderLeft: '1px solid #D3D3D3',border:'0px',height: '100%'}}>
                  <Card.Img className={styles['image-Ratio']}  variant="top" src="/upload/image/product/shoe8-1.png" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This card has even longer content than the
                      first to show that equal height action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer style={{ marginTop: 'auto !important'}}>
                    <div className={styles['flex-layout-button-cart-custom']}><span className="text-muted" style={{paddingTop: '6px'}}>Add Cart</span><Button onClick={() => handleToCart(60)}  className={styles['button-cart']}><CartFill size={24} /></Button></div>
                  </Card.Footer>
                </Card>
            
            </Col>
        
          
          </Row>
          <Row className={styles['row-margin-top-bottom-custom']}>
            <p className="text-th-cus ml-2 text-xl inline-block" lang="th">สินค้าแนะนำ สินค้าอื่นๆ</p>
            
          </Row>
          <Row className={styles['row-justify-content-custom']}>
            <Col className={styles['col-width-max-min']}>
          
                <Card style={{margin:'10px',border:'0px',height: '100%'}}>
                  <Card.Img className={styles['image-Ratio']} variant="top" src="/upload/image/product/bag3-1.png" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer style={{ marginTop: 'auto !important'}}>
                    <div className={styles['flex-layout-button-cart-custom']}><span className="text-muted" style={{paddingTop: '6px'}}>Add Cart</span><Button onClick={() => handleToCart(61)}  className={styles['button-cart']}><CartFill size={24} /></Button></div>
                  </Card.Footer>
                </Card>
          
            </Col>
            <Col className={styles['col-width-max-min']}>
          
                <Card style={{margin:'10px',borderLeft: '1px solid #D3D3D3',border:'0px',height: '100%'}}>
                  <Card.Img className={styles['image-Ratio']}  variant="top" src="/upload/image/product/bag7-1.png" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to
                      additional content.{' '}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer style={{ marginTop: 'auto !important'}}>
                    <div className={styles['flex-layout-button-cart-custom']}><span className="text-muted" style={{paddingTop: '6px'}}>Add Cart</span><Button onClick={() => handleToCart(62)}  className={styles['button-cart']}><CartFill size={24} /></Button></div>
                  </Card.Footer>
                </Card>
            
            </Col>
            <Col className={styles['col-width-max-min']}>
              
                <Card style={{margin:'10px',borderLeft: '1px solid #D3D3D3',border:'0px',height: '100%'}}>
                  <Card.Img className={styles['image-Ratio']}  variant="top" src="/upload/image/product/bag5-1.png" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This card has even longer content than the
                      first to show that equal height action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer style={{ marginTop: 'auto !important'}}>
                    <div className={styles['flex-layout-button-cart-custom']}><span className="text-muted" style={{paddingTop: '6px'}}>Add Cart</span><Button onClick={() => handleToCart(63)}  className={styles['button-cart']}><CartFill size={24} /></Button></div>
                  </Card.Footer>
                </Card>
            
            </Col>
            <Col className={styles['col-width-max-min']}>
          
                <Card style={{margin:'10px',borderLeft: '1px solid #D3D3D3',border:'0px',height: '100%'}}>
                  <Card.Img className={styles['image-Ratio']}  variant="top" src="/upload/image/product/bag10-1.png" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This card has even longer content than the
                      first to show that equal height action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer style={{ marginTop: 'auto !important'}}>
                    <div className={styles['flex-layout-button-cart-custom']}><span className="text-muted" style={{paddingTop: '6px'}}>Add Cart</span><Button onClick={() => handleToCart(64)}  className={styles['button-cart']}><CartFill size={24} /></Button></div>
                  </Card.Footer>
                </Card>
            
            </Col>
        
          
          </Row>
        
        </Container>
        </CardGroup>
      );
}
export default ListProduct;