import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './List.scss';
import numeral from 'numeral';
import { inject, observer } from 'mobx-react';

const cx = classNames.bind(styles);

@inject('sales')
@observer
class SalesList extends Component {
    render() {
        const { prices, equityRatioPrivates, ExchangeRate, equityRatios } = this.props.sales;
        
        //판매가
        // const saleslist = originMetaData.map(
        //     sale => (
        //         <SalesItem
        //             key={sale.id}
        //             text={sale.text}
        //             value={numeral(sale.value).format('0,0')}
        //         ></SalesItem>
        //     )
        // ); 
        const saleslist = prices.map(
            sale => { return (
                <div key={sale.id}>
                    <li> M-ver : <input value={numeral(sale.priceMVer).format('0,0')} readOnly/> </li>
                    <li> S-ver : <input value={numeral(sale.priceSVer).format('0,0')} readOnly/> </li>
                    <li> SA-ver : <input value={numeral(sale.priceSAVer).format('0,0')} readOnly/> </li>
                    <li> M-Package : <input value={numeral(sale.priceMPackage).format('0,0')} readOnly/> </li>
                </div>
            )}
        );
       
        //수익자 
        const privatelist = equityRatioPrivates.map(
            private_ => { return (
                <div key={private_.id}>
                    <li> dsk : <input value={private_.dsk} readOnly/> </li>
                    <li> smkim : <input value={private_.smkim} readOnly/> </li>
                    <li> ssj : <input value={private_.ssj} readOnly/> </li>
                    <li> bsk : <input value={private_.bsk} readOnly/> </li>
                </div>
            )}
        );
        //환율적용(판매가)
        const exchangelist = prices.map(
            salewon => { return (
                <div key={salewon.id}>
                    <li> M-ver : <input value={numeral(salewon.priceMVer*ExchangeRate).format('0,0')} readOnly/> </li>
                    <li> S-ver : <input value={numeral(salewon.priceSVer*ExchangeRate).format('0,0')} readOnly/> </li>
                    <li> SA-ver : <input value={numeral(salewon.priceSAVer*ExchangeRate).format('0,0')} readOnly/> </li>
                    <li> M-Package : <input value={numeral(salewon.priceMPackage*ExchangeRate).format('0,0')} readOnly/> </li>
                </div>
            )}
        );
        //구매가    
        const purchaselist = prices.map(
            buy => { return (
                <div key={buy.id}>
                    <li> M-ver : <input value={numeral(buy.priceMVer*0.7).format('0,0')} readOnly/> </li>
                    <li> S-ver : <input value={numeral(buy.priceSVer*0.7).format('0,0')} readOnly/> </li>
                    <li> SA-ver : <input value={numeral(buy.priceSAVer*0.7).format('0,0')} readOnly/> </li>
                    <li> M-Package : <input value={numeral(buy.priceMPackage*0.7).format('0,0')} readOnly/> </li>
                </div>
            )}
        );
        //환율적용(구매가)
        const purchaselist_ex = prices.map(
            buywon => { return (
                <div key={buywon.id}>
                    <li> M-ver : <input value={numeral(buywon.priceMVer*0.7*ExchangeRate).format('0,0')} readOnly/> </li>
                    <li> S-ver : <input value={numeral(buywon.priceSVer*0.7*ExchangeRate).format('0,0')} readOnly/> </li>
                    <li> SA-ver : <input value={numeral(buywon.priceSAVer*0.7*ExchangeRate).format('0,0')} readOnly/> </li>
                    <li> M-Package : <input value={numeral(buywon.priceMPackage*0.7*ExchangeRate).format('0,0')} readOnly/> </li>
                </div>
            )}
        );

        const ratiolist = equityRatios.map(
            ratio => { return (
                <div key={ratio.id}>
                    <li> 구매가비율 : <input value={ratio.purchaseRatio} readOnly/> </li>
                    <li> 기술요율 : <input value={ratio.technicalRatio} readOnly/> </li>
                    <li> 한전지분율 : <input value={ratio.kepcoRatio} readOnly/> </li>
                    <li> 목포지분율 : <input value={ratio.mokpoRatio} readOnly/> </li>
                    <li> 보상요율 : <input value={ratio.compensationRatio} readOnly/> </li>
                </div>
            )}
        );
       
        return (
            <div>
               <div className={cx('saleslist')}>
                    <div className={cx('item')}>
                        <h5>판매가($)</h5>
                        {saleslist}
                    </div>
                    <div className={cx('item')}>
                        <h5>판매가(원화 : 환율적용)</h5>
                        {exchangelist}
                    </div>
                    <div className={cx('item')}>
                        <h5>구매가(판매가*70%, $)</h5>
                        {purchaselist}
                    </div>
                    <div className={cx('item')}>
                        <h5>구매가(원화 : 환율적용)</h5>
                        {purchaselist_ex}
                    </div>
                    <div className={cx('item')}>
                        <h5>수익자</h5>
                        {privatelist}      
                    </div>
                    <div className={cx('item')}>
                        <h5>지분율</h5>
                        {ratiolist}      
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        const { sales } = this.props;

        sales.getData();
    }
}



export default SalesList;