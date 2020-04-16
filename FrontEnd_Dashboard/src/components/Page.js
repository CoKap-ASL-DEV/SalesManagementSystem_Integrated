import React, { useEffect, useReducer } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'utils/propTypes';

import ReactLoading from 'react-loading';

import bn from 'utils/bemnames';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import Typography from './Typography';
import { MdNoEncryption } from 'react-icons/md';

const bem = bn.create('page');

const Page = inject('spinner')(observer(({
  title,
  breadcrumbs,
  tag: Tag,
  className,
  children,
  spinner,
  ...restProps
}) => {
  const classes = bem.b('px-3', className);
  
  useEffect(() => {
    // dispatchSpinner({type: SHOW_PAGE_SPINNER});
  }, []);

  return (
    <Tag className={classes} {...restProps}>
      <div className={bem.e('header')}>
        {title && typeof title === 'string' ? (
          <Typography type="h1" className={bem.e('title')}>
            <span className="title-square" >a</span>
            {' '}
            {/* <span style={{background: '#0070c0', color: '#ffffff', fill: 'solid', width: '5px', height: '100%'}} >{title}</span> */}
            {title}
          </Typography>
        ) : (
            title
          )}
        {breadcrumbs && (
          <Breadcrumb className={bem.e('breadcrumb')}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            {breadcrumbs.length &&
              breadcrumbs.map(({ name, active }, index) => (
                <BreadcrumbItem key={index} active={active}>
                  {name}
                </BreadcrumbItem>
              ))}
          </Breadcrumb>
        )}
      </div>
      <div className="kepco-page-wrapper">
        {children}
        {spinner.isShowSpinner ? (
            <div className="kepco-page-loading-wrapper">
              <ReactLoading className="loading-ani w-100" type="spokes" color="#ffffff" />
            </div>
          ) : (spinner.isShowTraining ? (
            <div className="kepco-page-loading-wrapper">
              <ReactLoading className="loading-ani w-100" type="cubes" color="#ffffff" />
              <h3 className="loading-text w-100 text-center">Training...</h3>
            </div>
          ) : null)}
        
      </div>
    </Tag>
  );
}));

Page.propTypes = {
  tag: PropTypes.component,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  children: PropTypes.node,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      active: PropTypes.bool,
    })
  ),
};

Page.defaultProps = {
  tag: 'div',
  title: '',
};

export default Page;
