
import React, { Component,useEffect,useState } from 'react';


import { Navbar, Container,Button ,Form ,Nav ,NavDropdown,Offcanvas,Col,Row,Card,ListGroup,Image,InputGroup,FormControl } from 'react-bootstrap';
import { CartFill,X } from 'react-bootstrap-icons';
import Stack from 'react-bootstrap/Stack';
import styles from '../../vendor/css/frontStore/home/navbartop.module.css'; 
import {  useSelector,useDispatch } from 'react-redux';
import { editCart,removeFromCart} from '../../actions';
const NavbarMain  = (props) => {
  useEffect(() => {
    // สร้างลิสต์ของไฟล์ CSS ที่ต้องการโหลด
    const cssFiles = [
        '/css/bootstrap.min.css', 
     
    ];

    // สร้างและเพิ่ม <link> สำหรับแต่ละไฟล์ CSS
    const links = cssFiles.map(file => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = file;
        document.head.appendChild(link);
        return link;
    });

    // ลบ <link> เมื่อลองโหนดถูก Unmount
    return () => {
        links.forEach(link => {
            document.head.removeChild(link);
        });
    };
}, []);

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const dispatch = useDispatch();
const cart = useSelector((state) => state.cart); 
const min = 1;
const max = 100;
const handleIncrement = (id) => {
  const existingItem = cart.find((item) => item.id === id);

  if (existingItem) {
      console.log("Item already in cart");
      // ที่นี่สามารถเขียนโค้ดเพื่อเพิ่ม count ของสินค้าที่มีอยู่แล้วได้
      dispatch(editCart({ ...existingItem, count:  Math.min(existingItem.count + 1 ,max)}));
  }

}
const handleDecrement = (id) => {
  const existingItem = cart.find((item) => item.id === id);

  if (existingItem) {
      console.log("Item already in cart");
      // ที่นี่สามารถเขียนโค้ดเพื่อเพิ่ม count ของสินค้าที่มีอยู่แล้วได้
      dispatch(editCart({ ...existingItem, count: Math.max(existingItem.count - 1 ,min)}));
  }
  
}

const removeFormCart =(id) =>{
  dispatch(removeFromCart(id));
}
   
   
    
        return (
          <>
    <Navbar  className={styles['navbar-top']}>
      
        <Navbar.Brand href="#home"  style={{marginRight:'100px !important'}}>E-shop</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      
    </Navbar>
    <Navbar collapseOnSelect expand="lg" className={styles['navbar-top-two']}  >
      
        <Navbar.Brand href="#home" className={styles['navbar-top-two-banner']}><img src={'./image/home/logo-1.png'} alt="Logo" style={{height: '60px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className={styles['navbar-hide-one']} >
          <Nav className="me-auto justify-content-md-center" style={{width:'100%'}}>
           
              <Nav.Link href="#features" className="text-left">Features</Nav.Link>
              <Nav.Link href="#pricing" className="text-left">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown" className="text-left">
                <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
         
          </Nav>
          <Nav className={styles['div-cart']}>
          <Navbar.Brand ><Button className={styles['button-cart']}  onClick={handleShow}><CartFill size={24}  /></Button><Button className={styles['button-count-cart']}>{cart?<>{cart.reduce((sum, cart) => sum + cart.count, 0)}</>:<>0</>}</Button></Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    <Offcanvas show={show} onHide={handleClose} placement="end" className={styles['customOffcanvas']}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length>0?<div>
            {/* {cart.map((item) => (
           
            <ListGroup className={`my-2 d-flex flex-row ${styles.customListgroup}`} horizontal="sm">
            <ListGroup.Item> <Image  className={`${styles.imageRatio}`}  src={`/upload/image/product/${item.image}`} /></ListGroup.Item>
            <ListGroup.Item style={{borderTopWidth: "1px"}}>{item.name}</ListGroup.Item>
            <ListGroup.Item style={{borderTopWidth: "1px"}}>{item.price} </ListGroup.Item>
            <ListGroup.Item style={{borderTopWidth: "1px",borderRadius:"0.375rem"}}>{item.count}</ListGroup.Item>
          </ListGroup>
        ))} */}
        {cart.map((item) => (
        <Stack style={{borderTop: "1px solid #e2e8f0"}} direction="horizontal" gap={5}>
          <div className={`${styles.listCartWidthCustom}`}><Image  className={`${styles.imageRatio}`}  src={`/upload/image/product/${item.image}`} /></div>
          <div className={`${styles.listCartWidthCustom}`}>
            <Stack gap={2}>
              <div>  {item.name}</div>
              <InputGroup style={{ width: "150px" }} className="ms-auto">
                <Button variant="outline-secondary" onClick={()=>handleDecrement(item.id)}>-</Button>
                <FormControl
                    type="number"
                    value={item.count}
                    min={min}
                    max={max}
                    step="1"
                    onChange={(e) => {
                        const value = Math.max(min, Math.min(max, Number(e.target.value)));
                        dispatch(editCart({ ...item, count: e.target.value }));
                        // setQuantity(value);
                    }}
                    className="text-center"
                />
                <Button variant="outline-secondary" onClick={()=>handleIncrement(item.id)}>+</Button>
              </InputGroup>
            </Stack>
          </div>
          <div className={`${styles.listCartWidthCustom}`}></div>
          <div className={`${styles.listCartWidthCustom}`}>
      
          </div>
          <div className="p-2 ms-auto">
            <Stack gap={2} ClassName="">
              <Button className="btn btn-light ms-auto rounded-circle"  onClick={()=>removeFormCart(item.id)}><X size={24}  /></Button>
              <div className="mt-auto ms-auto">{item.price} ฿</div>
            </Stack>
          </div>
        </Stack>
        ))}
        
          </div>:<div>no</div>}
   
          
   
        </Offcanvas.Body>
        <div className="p-10 d-flex justify-content-center">
        <Button variant="outline-secondary" >VIEW CART</Button>
        </div>
      </Offcanvas>
    </>
        );
    
}

export default NavbarMain;