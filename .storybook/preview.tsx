/*
 * @Author: xiangzi xiagnzipapa@qq.com
 * @Date: 2022-12-06 22:23:43
 * @LastEditors: xiangzi xiagnzipapa@qq.com
 * @LastEditTime: 2022-12-07 15:16:58
 * @Description:
 *
 * Copyright (c) 2022 by xiangzi xiagnzipapa@qq.com, All Rights Reserved.
 */
import '../src/styles/index.scss';
import React from 'react';
import { addDecorator } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
const styles: React.CSSProperties = {
  textAlign: 'center',
};
const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>;

addDecorator(CenterDecorator);
