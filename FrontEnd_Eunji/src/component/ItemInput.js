import React from 'react';
import styles from './List.scss';
import classNames from 'classnames/bind';
import { inject, observer } from 'mobx-react';

const cx = classNames.bind(styles);

@inject('sales')
@observer
class ItemInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ExchangeRate : '',    
            input_m : '',
            input_mp : '',
            input_s : '',
            input_sa : ''
        }
    }
  
    handleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      });
    }

    InsertExchangeRate = (e) => {
      const { insertExchangeRate } = this.props.sales;
      this.setState({
        [e.target.name] : e.target.value
      }) 
      insertExchangeRate(e.target.value);
    }

    handleInsert = (id, input_m, input_mp, input_s, input_sa, ExchangeRate) => {
      const { insert } = this.props.sales;

      insert(id, input_m, input_mp, input_s, input_sa, ExchangeRate);
      this.setState({
        ExchangeRate : '',    
            input_m : '',
            input_mp : '',
            input_s : '',
            input_sa : ''
      })
    }

    id = 1;

    getId = () => {
      return this.id++;
    }

    render() {
        const {ExchangeRate, input_m, input_mp, input_s, input_sa} = this.state;
        
        return (
            <div className={cx("inputlist")}>
                <div>
                    적용환율 : <input name = "ExchangeRate" onChange={this.InsertExchangeRate} value={ExchangeRate}/> 원
                </div>
                <div>
                    M-ver : <input name = "input_m" onChange={this.handleChange} value={input_m}/> EA
                </div>
                <div>
                    S-ver : <input name = "input_s" onChange={this.handleChange} value={input_s}/> EA
                </div>
                <div>
                    SA-ver : <input name = "input_sa" onChange={this.handleChange} value={input_sa}/> EA
                </div>
                <div>
                    M Package : <input name = "input_mp"onChange={this.handleChange} value={input_mp}/> EA 
                </div>
                <button type = "submit" onClick = {() => this.handleInsert(this.getId(), input_m, input_mp, input_s, input_sa, ExchangeRate)}>Submit</button>   
            </div>
        );
    }
}

export default ItemInput;
