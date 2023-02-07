import { Table } from 'antd';
import React, { useState } from 'react'


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
};


const TableComponent = (props) => {
    
    const {columns, data} = props
    const [selectionType, setSelectionType] = useState('checkbox');

    return (
            <div>
                <Table
                    rowSelection={{
                        type: selectionType,
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={data}
                    {...props}
                />
            </div>
     
    )
}

export default TableComponent