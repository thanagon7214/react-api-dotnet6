import React, { Component } from 'react';
import { Stack,Table } from 'react-bootstrap';

const TableDataLayout  = (props) => {
    
        return (
            <div className="div-table">
                <Stack direction="horizontal" gap={3} className="justify-content-center">
                    <div className="table-1">
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.data.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Stack>
                <Stack direction="horizontal" gap={3} className="justify-content-center">
                    <div className="table-1">
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.data.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Stack>
            </div>
        );
    
}

export default TableDataLayout;