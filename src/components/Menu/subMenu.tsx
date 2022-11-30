/*
 * @Author: xiangzi xiagnzipapa@qq.com
 * @Date: 2022-11-03 14:14:36
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-11-30 15:29:21
 * @Description:
 *
 * Copyright (c) 2022 by xiangzi xiagnzipapa@qq.com, All Rights Reserved.
 */
import React, { FunctionComponentElement, useContext, useState } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import { MenuItemProps } from './menuItem';
import Icon from '../Icon/icon';
import Transition from '../Transition/transition';

export interface subMenuProps {
  index?: string;
  title: string;
  className?: string;
  children?: React.ReactNode;
}

const SubMenu: React.FC<subMenuProps> = ({
  index,
  title,
  children,
  className,
}) => {
  const { index: idx, mode, defaultOpenSubMenus } = useContext(MenuContext);
  const openedSubMenus = defaultOpenSubMenus as Array<string>;
  const isOpend =
    index && mode === 'vertical' ? openedSubMenus.includes(index) : false;
  const [menuOpen, setMenuOpen] = useState(isOpend);
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': idx.split('-')[0] === index,
    'is-opened': menuOpen,
    'is-vertical': mode === 'vertical',
  });
  const subMenuClasses = classNames('jo-submenu', { 'menu-opened': menuOpen });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };
  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setMenuOpen(toggle);
    }, 300);
  };
  const clickEvents =
    mode === 'vertical'
      ? {
          onClick: handleClick,
        }
      : {};
  const hoverEvent =
    mode !== 'vertical'
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};

  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, idx) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, { index: `${index}-${idx}` });
      } else {
        console.error(
          'Warning:menu has child which is not a MenuItem component'
        );
      }
    });
    return (
      <Transition in={menuOpen} timeout={300} classNames="zoom-in-top">
        <ul className={subMenuClasses}>{childrenComponent}</ul>
      </Transition>
    );
  };
  return (
    <li key={index} className={classes} {...hoverEvent}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';
export default SubMenu;
