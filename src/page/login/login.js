import React, { Component,useState,useEffect } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../../vendor/css/login.css'
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Stack,Table,Button,Container, Row, Col, Card,Form } from 'react-bootstrap';
import {XCircleFill} from 'react-bootstrap-icons';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { BrowserRouter as Router, Routes, Route, Link ,useNavigate} from "react-router-dom";

const MySwal = withReactContent(Swal);

const Login  = (props) => {
    const [formData, setFormData] = useState({
      user_name: '',
      user_pass: '',
    });
    const  [errors, setErrors] = useState({
        user: 0,
        pass: 0,
    });
    const navigateLinkFormAddProducts = useNavigate();
    const [checkClickSubmit, setCheckClickSubmit] = useState(false); 
    useEffect(() => {
        if (checkClickSubmit) {
          handleValidation(formData);
        }
    }, [checkClickSubmit]);
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData((prevFormData) => {
            const updatedFormData = {
              ...prevFormData,
              [name]: value
            };
        
            // เรียก handleValidation หลังจากอัปเดตข้อมูลเสร็จ
            handleValidation(updatedFormData);
        
            return updatedFormData;
        });
    }
    const handleValidation=(formData) =>{
        let errorName=0;
        let errorPass=0; 
        let formIsValid = false;
        if(!formData.user_name.trim() && checkClickSubmit){
            errorName=1;
        }else{
            errorName=0;
        }
        if(!formData.user_pass.trim() &&checkClickSubmit){
            errorPass=1;
        }else{
            errorPass=0;
        }
       
        if(formData.user_name.trim()&&formData.user_pass.trim()){
          formIsValid = true;
        }else{
          formIsValid = false;
        }
  
        setErrors({
        user:errorName,
        pass:errorPass
        });
        return formIsValid; 
    }
    const handleSubmit = async (event) => {
      setCheckClickSubmit(true);
      event.preventDefault();
      
      if (!handleValidation(formData)) {
          MySwal.fire({
            title: 'กรุณากรอกข้อมูล',
            icon: 'error',
            confirmButtonText: 'OK'
          });
      } else {
          try {
              MySwal.fire({
                title: 'กำลังโหลด...',
                allowOutsideClick: false,
                didOpen: () => {
                  MySwal.showLoading();
                }
              });
 
              const response = await fetch('https://localhost:7136/api/user/checkuserpass', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
              });
 
              if (!response.ok) {
                // หากมีปัญหาในการติดต่อ API
                throw new Error(`HTTP error! status: ${response.status}`);
              }
 
              const data = await response.json(); // รับค่าตอบกลับจาก API (ถ้ามี)
 
              // สมมติว่าค่าที่ได้จาก API คือ true หรือ false (กรณีเช็ค user/pass)
              if (data.result==0) {
                MySwal.fire({
                  title: 'เข้าสู่ระบบสำเร็จ',
                  icon: 'success',
                  confirmButtonText: 'OK'
                }).then(() => {
                  navigateLinkFormAddProducts('/'); // นำผู้ใช้ไปยังหน้าหลักเมื่อสำเร็จ
                });
              } else if(data.result==1) {
                MySwal.fire({
                  title: 'ไม่พบชื่อผู้ใช้นี้',
                  icon: 'error',
                  confirmButtonText: 'OK'
                });
                setErrors({
                  user:2,
                });
              }else if(data.result==2) {
                MySwal.fire({
                  title: 'รหัสผ่านไม่ถูกต้อง',
                  icon: 'error',
                  confirmButtonText: 'OK'
                });
                setErrors({
                  pass:2,
                });
              }
          } catch (error) {
              console.error('There was an error with the login process:', error);
              MySwal.fire({
                title: 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ',
                icon: 'error',
                confirmButtonText: 'OK'
              });
          }
      }
    };

 return (
            <>
                       <MDBContainer fluid className="p-3 my-5 h-custom contain-logi">
                        <Form onSubmit={handleSubmit}>

                        <MDBRow>

                        <MDBCol col='10' md='6'>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
                        </MDBCol>

                        <MDBCol col='4' md='6'>

                            <div className="d-flex flex-row align-items-center justify-content-center">

                            <p className="lead fw-normal mb-0 me-3">Sign in</p>

                            {/* <MDBBtn floating size='md' tag='a' className='me-2'>
                                <MDBIcon fab icon='facebook-f' />
                            </MDBBtn>

                            <MDBBtn floating size='md' tag='a'  className='me-2'>
                                <MDBIcon fab icon='twitter' />
                            </MDBBtn>

                            <MDBBtn floating size='md' tag='a'  className='me-2'>
                                <MDBIcon fab icon='linkedin-in' />
                            </MDBBtn> */}

                            </div>

                            <div className="divider d-flex align-items-center my-4">
                            {/* <p className="text-center fw-bold mx-3 mb-0">Or</p> */}
                            </div>

                            <MDBInput wrapperClass='mb-3' label='Username' id='formControlLg' type='text' size="lg" name="user_name" value={formData.user} onChange={handleChange}/>
                            {errors.user == 1? <p className="text-th-cus text-danger" lang="th"><XCircleFill className="inline-block"/> <span className="inline-block">กรุณากรอกชื่อ user</span></p> 
                                  : errors.user == 2?<p className="text-th-cus text-danger" lang="th"><XCircleFill className="inline-block"/> <span className="inline-block">ไม่พบ usernaem นี้</span> </p> 
                                  :<p className="text-th-cus text-danger" lang="th"> </p>}
                            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" name="user_pass" value={formData.pass} onChange={handleChange}/>
                            {errors.pass == 1? <p className="text-th-cus text-danger" lang="th"><XCircleFill className="inline-block"/> <span className="inline-block">กรุณากรอก password</span></p> 
                                  : errors.pass == 2?<p className="text-th-cus text-danger" lang="th"><XCircleFill className="inline-block"/> <span className="inline-block">password ไม่ถูกต้อง</span></p> 
                                  :<p className="text-th-cus text-danger" lang="th"> </p>}

                            <div className="d-flex justify-content-between mb-4">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            <a href="!#">Forgot password?</a>
                            </div>

                            <div className='text-center text-md-start mt-4 pt-2'>
                            <MDBBtn className="mb-0 px-5" size='lg' >Login</MDBBtn>
                           
                            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
                            </div>

                        </MDBCol>

                        </MDBRow>

                        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

                        <div className="text-white mb-3 mb-md-0">
                            Copyright © 2020. All rights reserved.
                        </div>

                        <div>

                            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                            <MDBIcon fab icon='facebook-f' size="md"/>
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
                            <MDBIcon fab icon='twitter' size="md"/>
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
                            <MDBIcon fab icon='google' size="md"/>
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
                            <MDBIcon fab icon='linkedin-in' size="md"/>
                            </MDBBtn>

                        </div>

                        </div>
                        </Form>
                        </MDBContainer>
            </>
        );
    
}

export default Login;