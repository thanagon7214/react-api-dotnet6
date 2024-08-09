import React, { Component } from 'react';

const TableDataLayout  = (props) => {
    
        return (
            <div>
                    <table>
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
                    </table>
               
            </div>
        );
    
}

export default TableDataLayout;