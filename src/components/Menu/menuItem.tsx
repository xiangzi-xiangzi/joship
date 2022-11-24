/*
 * @Author: xiangzi xiagnzipapa@qq.com
 * @Date: 2022-11-01 14:47:14
 * @LastEditors: xiangzi xiagnzipapa@qq.com
 * @LastEditTime: 2022-11-04 11:30:24
 * @Description:
 *
 * Copyright (c) 2022 by xiangzi xiagnzipapa@qq.com, All Rights Reserved.
 */
import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;
  const context = useContext(MenuContext);

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index,
  });
  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index);
    }
  };
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};
//静态类型
MenuItem.displayName = 'MenuItem';
export default MenuItem;
