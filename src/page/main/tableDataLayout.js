import React, { Component ,useContext} from 'react';

import { Stack,Table,Button,Container, Row, Col, Card } from 'react-bootstrap';

import { useTable,useSortBy,usePagination, Navbar, Nav, NavDropdown, Form, FormControl    } from 'react-table';

import { PencilFill,TrashFill} from 'react-bootstrap-icons';

import { useNavigate} from "react-router-dom";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { AppContext } from '../../AppContext';

// ใช้ Redux hooks
import {  useSelector,useDispatch } from 'react-redux';
import { deleteProduct } from '../../actions';

const MySwal = withReactContent(Swal);

const TableDataLayout  = (props) => {
    const navigateLinkTableDataLayout = useNavigate();
     //Context Api
    // const { data,handleProductDeleted } = useContext(AppContext);
    //Redux
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data); 
    const handleEdit = (rowData) => {
        // ฟังก์ชันที่ถูกเรียกเมื่อคลิกที่ปุ่มแก้ไข
        console.log('แก้ไขข้อมูล: ', rowData);
        // คุณสามารถเปลี่ยนข้อมูลหรือแสดงฟอร์มการแก้ไขได้ที่นี่
        navigateLinkTableDataLayout('/FormEditProducts',{ state: { productData: rowData } });
    };

    const handleDelete =  (id) => {
     
        // ฟังก์ชันที่ถูกเรียกเมื่อคลิกที่ปุ่มลบ
        MySwal.fire({
          title: 'คุณต้องการลบข้อมูลนี้ใช่หรือไม่',
        
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ใช่,ลบข้อมูล",
          cancelButtonText: "ไม่"
        }).then(async(result) => {
          if (result.isConfirmed) {
            try {
                // ใช้ SweetAlert2 ในการแสดงกล่องโหลด
              MySwal.fire({
                title: 'กำลังโหลด...',
                allowOutsideClick: false, // ไม่ให้ปิด popup ระหว่างโหลด
                didOpen: () => {
                  MySwal.showLoading(); // แสดง icon โหลด
                }
              });
              const response = await fetch(`https://benzperformance.somee.com/api/products/${id}`, { // เปลี่ยน URL ให้เป็น API ที่ต้องการดึงข้อมูล .net core6
              // const response = await fetch(`https://localhost:7136/api/products/${id}`, {
                method: 'DELETE',
              });
          
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
             
              // if(handleProductDeleted){
              //   handleProductDeleted(id)
              // }
              dispatch(deleteProduct(id));
              MySwal.fire({
                title: 'เพิ่มข้อมูลสำเร็จ',
                // text: 'This is a SweetAlert2 popup in React!',
                icon: 'success',
                confirmButtonText: 'OK'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigateLinkTableDataLayout('/'); // ทำการ redirect เมื่อกด OK
                }
              });
            } catch (error) {
              console.error('Error deleting product:', error);
            }

         
          }
        });
        // คุณสามารถส่งคำขอลบไปที่ API หรือจัดการข้อมูลใน local ได้
    };
    const columns = React.useMemo(
        () => [
          { Header: 'Id', accessor: 'id' }, // .net
          { Header: 'Name', accessor: 'name' },
          { Header: 'Price', accessor: 'price' },
          {
             Header: 'Type product',
              accessor: 'type_product',
              Cell: ({ cell: { value } }) => {
                // ตรวจสอบค่าที่ได้รับและแปลงเป็นข้อความ
                if (value == 1) {
                  return 'เสื้อ';
                } else if (value == 2) {
                  return 'รองเท้า';
                } else if (value == 3) {
                  return 'เครื่องประดับ';
                } else {
                  return 'ไม่ระบุประเภท'; // กรณีค่าที่ไม่ตรงกับเงื่อนไข
                }
              }

          },
          {
            Header: 'Actions', // ชื่อคอลัมน์ใหม่
            Cell: ({ row }) => (
              <div style={{ display: 'flex', justifyContent:'space-evenly' }}>
                <button 
                  onClick={() => handleEdit(row.original)} 
                  style={{  }}
                >
                    <PencilFill/>
                </button>
                <button 
                  onClick={() => handleDelete(row.original.id)} 
                  style={{   }}
                >
                
                  <TrashFill/>
                </button>
              </div>
            )
          }
        //   { Header: 'Id', accessor: 'Id' }, //node js
        //   { Header: 'Name', accessor: 'Name' },
        ],
        []
    );
    const datas = React.useMemo(
        () => data,
        [data]
    );
    // const tableInstance = useTable({ columns, data }, useSortBy);

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      nextPage,
      previousPage,
      state: { pageIndex },
    } = useTable({ columns, data ,initialState: { pageIndex: 0 },}, useSortBy,usePagination);
   
    
        return (
            <>
        
                                        <Table striped bordered hover  {...getTableProps()}>
                                            <thead>
                                                {headerGroups.map(headerGroup => (
                                                <tr {...headerGroup.getHeaderGroupProps()}>
                                                    {headerGroup.headers.map(column => (
                                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                                        {column.render('Header')}
                                                        <span>
                                                        {column.isSorted
                                                            ? column.isSortedDesc
                                                            ? ' 🔽'
                                                            : ' 🔼'
                                                            : ''}
                                                        </span>
                                                    </th>
                                                    ))}
                                                </tr>
                                                ))}
                                            </thead>
                                            <tbody {...getTableBodyProps()}>
                                                {page.map(row => {
                                                prepareRow(row);
                                                return (
                                                    <tr {...row.getRowProps()}>
                                                    {row.cells.map(cell => (
                                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                    ))}
                                                    </tr>
                                                );
                                                })}
                                            </tbody>
                                        </Table>
                                        <div>
                                            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                                            Previous
                                            </button>
                                            <span>
                                            Page{' '}
                                            <strong>
                                                {pageIndex + 1} of {pageOptions.length}
                                            </strong>
                                            </span>
                                            <button onClick={() => nextPage()} disabled={!canNextPage}>
                                            Next
                                            </button>
                                        </div>
                     
            </>
        );
    
}

export default TableDataLayout;