

## storybook报错
### 解决pnpm storybook报错 ERR! Error: Cannot find module ‘/node_modules/config/webpack.config‘

https://blog.csdn.net/qq_41614928/article/details/125410288

```bash
rm -rf node_modules
pnpm i
pnpm run storybook
```

## 解决方法：

修改 `.storybook/main.js` 文件

```js
addons: [
   "@storybook/addon-links",
   "@storybook/addon-essentials",
   "@storybook/addon-interactions",
 ]
```

ts支持 

```bash
npx -p @storybook/cli sb init --type react_scripts
```

https://github.com/Luchanso/storybook-cra-ts-example/tree/master/.storybook

Storybook + react + ts 配置全局样式

https://blog.csdn.net/weixin_38303684/article/details/113921118