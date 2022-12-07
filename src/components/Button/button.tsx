/*
 * @Author: xiangzi xiagnzipapa@qq.com
 * @Date: 2022-10-21 15:45:56
 * @LastEditors: xiangzi xiagnzipapa@qq.com
 * @LastEditTime: 2022-12-07 15:32:01
 * @Description:Button
 *
 * Copyright (c) 2022 by xiangzi xiagnzipapa@qq.com, All Rights Reserved.
 */

import React from 'react';
import classNames from 'classNames';
export enum ButtonSizeEnum {
  Large = 'lg',
  Small = 'sm',
}

export enum ButtonTypeEnum {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}
type ButtonSize = 'lg' | 'sm';

type ButtonType = 'primary' | 'default' | 'danger' | 'link';

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
    disabled: btnType === ButtonTypeEnum.Link && disabled,
  });

  if (btnType === ButtonTypeEnum.Link && href) {
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
  btnType: ButtonTypeEnum.Default,
};

export default Button;
