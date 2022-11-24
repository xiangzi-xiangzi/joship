/*
 * @Author: xiangzi xiagnzipapa@qq.com
 * @Date: 2022-10-31 11:48:51
 * @LastEditors: xiangzi xiagnzipapa@qq.com
 * @LastEditTime: 2022-11-01 14:40:17
 * @FilePath: /mywork/joship/jest.test.js
 * @Description: unit
 * 
 * Copyright (c) 2022 by xiangzi xiagnzipapa@qq.com, All Rights Reserved. 
 */

test('test common matcher', () => {
  expect(2 + 2).toBe(4)
  expect(2 + 2).not.toBe(5)
})

test('test to be true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('test number', () => {
  //比大
  expect(4).toBeGreaterThan(3)
  expect(2).toBeLessThan(3)
})
test('test object', () => {
  // 值相同
  expect({ name: 'jo' }).toEqual({ name: 'jo' })
})