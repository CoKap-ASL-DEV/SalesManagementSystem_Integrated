import React from 'react';
import classNames from 'classnames/bind';
import styles from './PageTemplate.scss';
import SalesList from './SalesList';
import ItemInput from './ItemInput';
import Table from './Table';

const cx = classNames.bind(styles);

export default class PageTemplate extends React.Component{
    render() {
    return (
        <div className={cx('page')}>
            <h1>SalesManagement System</h1>
            <div>
                <ItemInput/>
                <SalesList/>
                <Table/>
            </div>
        </div>
    );
}};