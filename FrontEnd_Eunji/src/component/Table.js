import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';

const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true,
    bgColor: 'pink'
  };
          
const cellEditProp = {
mode: 'dbclick',
}; 

@inject('sales')
@observer
class Table extends Component {
    render() {
        const { InputDataList, onDelete } = this.props.sales;
        const option = {
            afterDeleteRow: onAfterDeleteRow
        };

        function onAfterDeleteRow(rowKeys) {
            alert('The rowkey you drop:'+rowKeys);
            onDelete(rowKeys);
        }

        return(
            <div>
                <BootstrapTable data={ InputDataList } deleteRow={ true } options={option}
                                selectRow={ selectRowProp } height='300' remote={true} pagination={true}
                                cellEdit={ cellEditProp }>
                    <TableHeaderColumn row='0' rowSpan='2' headerAlign='center' dataAlign='center' dataField='id' isKey 
                                       width='60' editable={ false }>
                        순번
                    </TableHeaderColumn>
                    <TableHeaderColumn row='0' colSpan='5' headerAlign='center' dataAlign='center'>주문수량(EA)</TableHeaderColumn>
                    <TableHeaderColumn row='1' headerAlign='center' dataAlign='center' dataField='value_M' width='80'>
                        M ver
                    </TableHeaderColumn>
                    <TableHeaderColumn row='1' headerAlign='center' dataAlign='center' dataField='value_S' width='80'>
                        S ver
                    </TableHeaderColumn>
                    <TableHeaderColumn row='1' headerAlign='center' dataAlign='center' dataField='value_SA' width='80'>
                        SA ver
                    </TableHeaderColumn>
                    <TableHeaderColumn row='1' headerAlign='center' dataAlign='center' dataField='value_MP' width='80'>
                        MP ver
                    </TableHeaderColumn>
                    <TableHeaderColumn row='1' headerAlign='center' dataAlign='center' dataField='value_total' width='80'>
                        총 수량
                    </TableHeaderColumn>
                    <TableHeaderColumn row='0' colSpan='2' headerAlign='center' dataAlign='center'>총 판매가</TableHeaderColumn>
                    <TableHeaderColumn row='1' headerAlign='center' dataAlign='center' editable={ false } 
                                       dataField='totalSellingPrice' width = '100'>
                        US$
                    </TableHeaderColumn>
                    <TableHeaderColumn row='1' headerAlign='center' dataAlign='center' editable={ false } 
                                       dataField='totalSellingPrice_won' width = '100'>
                        원화
                    </TableHeaderColumn>
                    <TableHeaderColumn row='0' colSpan='2' headerAlign='center' dataAlign='center'>총 구매가</TableHeaderColumn>
                    <TableHeaderColumn row='1' headerAlign='center' dataAlign='center' editable={ false }
                                       dataField='totalPurchasePrice' width = '100'>
                        US$
                    </TableHeaderColumn>
                    <TableHeaderColumn row='1' headerAlign='center' dataAlign='center' editable={ false } 
                                       dataField='totalPurchasePrice_won' width = '100'>
                        원화
                    </TableHeaderColumn>
                    <TableHeaderColumn row='0' colSpan='2' headerAlign='center' dataAlign='center'>기술료 납입(원화)</TableHeaderColumn>
                    <TableHeaderColumn row='1' headerAlign='center' dataAlign='center' dataField='technicalFeePaymentKepco' width = '100' editable={ false }>
                        한전
                    </TableHeaderColumn>
                    <TableHeaderColumn row='1' headerAlign='center' dataAlign='center' dataField='technicalFreePaymentMmu' width = '100' editable={ false }> 
                        목포해양대
                    </TableHeaderColumn>
                    <TableHeaderColumn row='0' rowSpan='2' headerAlign='center' dataAlign='center' dataField='patentDisposalCompensation' editable={ false }>
                        특허처분보상<br/> (60%, 원화)
                    </TableHeaderColumn>
                    <TableHeaderColumn row='0' colSpan='2' headerAlign='center' dataAlign='center'>순수익(원화)</TableHeaderColumn>
                    <TableHeaderColumn row='1' headerAlign='center' dataAlign='center' dataField='netIncomePP' width = '110' editable={ false }>
                        파워플러스
                    </TableHeaderColumn>
                    <TableHeaderColumn row='1' headerAlign='center' dataAlign='center' dataField='netIncomeKepco' width = '110' editable={ false }>
                        한전
                    </TableHeaderColumn>
                </BootstrapTable>
                </div>
        );
    }    
}

export default Table;