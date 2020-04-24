import React, { useState, useEffect } from 'react';
import {
  Col,
  Row
} from 'reactstrap';
import {
  MdTrendingFlat
} from 'react-icons/md';
import PropTypes from 'utils/propTypes';
import DatePicker from 'react-datepicker';

const RangePicker = ({ pickType = 'month', dateRange, startLabel = null, endLabel = null, onRangeChanged }) => {
  let _start = new Date();
  let _end = new Date();
  const [rangeStartDate, setRangeStartDate] = useState((() => { _start.setMonth(_start.getMonth() - 7); return _start; })());
  const [rangeEndDate, setRangeEndDate] = useState((() => { _end.setMonth(_end.getMonth() - 1); return _end; })());

  useEffect(() => {
    if (dateRange !== undefined) {
      setRangeStartDate((dateRange && dateRange.startDate) || new Date('9999-12-31'));

      if(dateRange && dateRange.endDate) {
        if (pickType === 'month') {
          dateRange.endDate = new Date(dateRange.endDate.getFullYear(), dateRange.endDate.getMonth()+1, 0);
        }
        setRangeEndDate(dateRange.endDate);
      } else {
        setRangeEndDate(new Date('9999-12-31'));
      }
    }
  }, [dateRange]);

  return (
    <div className="kepco-range-picker">
      <Row>
        <Col lg={5}>
          {startLabel ? <span className="w-100 d-block text-center"><strong>{startLabel}</strong></span> : ''}
          <DatePicker
            selected={rangeStartDate}
            onChange={date => {
              setRangeStartDate(date);
              onRangeChanged({ startDate: date, endDate: rangeEndDate });
            }}
            selectsStart
            startDate={rangeStartDate}
            endDate={rangeEndDate}
            dateFormat={pickType === 'month' ? "yyyy/MM" : "yyyy/MM/dd"}
            showMonthYearPicker={pickType === 'month'}
          />
        </Col>
        <Col className="w-100 text-center arrow" lg={2}>
          <MdTrendingFlat />
        </Col>
        <Col lg={5}>
          {endLabel ? <span className="w-100 d-block text-center"><strong>{endLabel}</strong></span> : ''}
          <DatePicker
            selected={rangeEndDate}
            onChange={date => {
              if (pickType === 'month') {
                date = new Date(date.getFullYear(), date.getMonth()+1, 0);
              }
              setRangeEndDate(date);
              onRangeChanged({ startDate: rangeStartDate, endDate: date });
            }}
            selectsEnd
            startDate={rangeStartDate}
            endDate={rangeEndDate}
            dateFormat={pickType === 'month' ? "yyyy/MM" : "yyyy/MM/dd"}
            showMonthYearPicker={pickType === 'month'}
          />
        </Col>
      </Row>
    </div>
  );
};

RangePicker.propTypes = {
  pickType: PropTypes.string,
  dateRange: PropTypes.shape({
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
  }),
  startLabel: PropTypes.string,
  endLabel: PropTypes.string,
  onRangeChanged: PropTypes.func
};

export default RangePicker;