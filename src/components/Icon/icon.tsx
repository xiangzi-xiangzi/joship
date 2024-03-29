/*
 * @Author: xiangzi xiagnzipapa@qq.com
 * @Date: 2022-11-03 23:30:45
 * @LastEditors: xiangzi xiagnzipapa@qq.com
 * @LastEditTime: 2022-11-04 11:17:03
 * @Description:
 *
 * Copyright (c) 2022 by xiangzi xiagnzipapa@qq.com, All Rights Reserved.
 */
import React from 'react';
import classNames from 'classNames';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps;
}

const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, ...resetProps } = props;
  const classes = classNames('jo-iocn', className, {
    [`icon-${theme}`]: theme,
  });
  return <FontAwesomeIcon className={classes} {...resetProps} />;
};

export default Icon;
