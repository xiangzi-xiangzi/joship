/*
 * @Author: xiangzi xiagnzipapa@qq.com
 * @Date: 2022-10-31 15:28:21
 * @LastEditors: xiangzi xiagnzipapa@qq.com
 * @LastEditTime: 2022-12-07 15:31:32
 * @Description:
 *
 * Copyright (c) 2022 by xiangzi xiagnzipapa@qq.com, All Rights Reserved.
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps, ButtonSizeEnum, ButtonTypeEnum } from './button';
/* eslint-disable */
// test('our firest react test case', () => {
//   //const wrapper = document.createElement(`<span> Hello World! </span>`);
//   const view = render(<Button>Nice</Button>);
//   // eslint-disable-next-line testing-library/prefer-screen-queries
//   const element = view.queryByText('Nice');
//   expect(element).toBeTruthy();
//   expect(element).toBeInTheDocument();
// });
const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: ButtonTypeEnum.Primary,
  size: ButtonSizeEnum.Large,
  className: 'klass',
};

const testPropsLink: ButtonProps = {
  btnType: ButtonTypeEnum.Link,
  href: 'www.baidu.com',
};
const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

//分类
describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}> Nice</Button>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    //确认点击事件可以被调用到
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg klass');
  });
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button {...testPropsLink}>Link</Button>);
    const element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link');
  });
  it('shouled render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>disabled</Button>);
    const element = wrapper.getByText('disabled') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
