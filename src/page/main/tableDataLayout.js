import React, { Component } from 'react';

import { Stack,Table,Button,Container, Row, Col, Card } from 'react-bootstrap';

import { useTable,useSortBy,usePagination, Navbar, Nav, NavDropdown, Form, FormControl    } from 'react-table';



const TableDataLayout  = (props) => {
    const columns = React.useMemo(
        () => [
          { Header: 'Id', accessor: 'Id' },
          { Header: 'Name', accessor: 'Name' },
        ],
        []
    );
    const data = React.useMemo(
        () => props.data,
        []
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