/*
 * @Author: xiangzi xiagnzipapa@qq.com
 * @Date: 2022-10-21 15:45:56
 * @LastEditors: xiangzi xiagnzipapa@qq.com
<<<<<<< HEAD
 * @LastEditTime: 2022-11-02 14:50:03
=======
 * @LastEditTime: 2022-12-07 15:18:52
>>>>>>> dev
 * @Description:Button
 *
 * Copyright (c) 2022 by xiangzi xiagnzipapa@qq.com, All Rights Reserved.
 */

import React from 'react';
import classNames from 'classNames';
<<<<<<< HEAD
export enum ButtonSize {
=======
export enum ButtonSizeEnum {
>>>>>>> dev
  Large = 'lg',
  Small = 'sm',
}

<<<<<<< HEAD
export enum ButtonType {
=======
export enum ButtonTypeEnum {
>>>>>>> dev
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}
<<<<<<< HEAD
=======
type ButtonSize = 'lg' | 'sm';

type ButtonType = 'primary' | 'default' | 'danger' | 'link';

>>>>>>> dev
interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  href?: string;
  children: React.ReactNode;
}
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;

type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, className, disabled, size, children, href, ...restProps } =
    props;
  //btn, btn-lg ,btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
<<<<<<< HEAD
    disabled: btnType === ButtonType.Link && disabled,
  });

  if (btnType === ButtonType.Link && href) {
=======
    disabled: btnType === ButtonTypeEnum.Link && disabled,
  });

  if (btnType === ButtonTypeEnum.Link && href) {
>>>>>>> dev
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};
Button.defaultProps = {
  disabled: false,
<<<<<<< HEAD
  btnType: ButtonType.Default,
=======
  btnType: ButtonTypeEnum.Default,
>>>>>>> dev
};

export default Button;
