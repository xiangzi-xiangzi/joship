/*
 * @Author: xiangzi xiagnzipapa@qq.com
 * @Date: 2022-10-21 14:20:43
 * @LastEditors: xiangzi xiagnzipapa@qq.com
<<<<<<< HEAD
 * @LastEditTime: 2022-11-07 13:49:41
=======
 * @LastEditTime: 2022-12-07 15:19:55
>>>>>>> dev
 * @Description:
 *
 * Copyright (c) 2022 by xiangzi xiagnzipapa@qq.com, All Rights Reserved.
 */

<<<<<<< HEAD
import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
=======
import React, { useState } from 'react';
import Button, {
  ButtonSizeEnum,
  ButtonTypeEnum,
} from './components/Button/button';
>>>>>>> dev
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';
<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
=======
import Transition from './components/Transition/transition';
>>>>>>> dev

//build libary方式引入 icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const App: React.FC = () => {
<<<<<<< HEAD
=======
  const [show, setShow] = useState(false);
>>>>>>> dev
  return (
    <div className="App">
      <main className="main">
        <Icon icon="arrow-down" theme="danger" size="10x"></Icon>
        {/* <FontAwesomeIcon icon={faCoffee} size="lg" /> */}
        <Menu
          defaultIndex="0"
          mode="horizontal"
          defaultOpenSubMenus={['1']}
          onSelect={(index) => {
            // alert(index);
          }}
        >
          <MenuItem>link</MenuItem>
          <SubMenu title="title">
            <MenuItem>link2</MenuItem>
            <MenuItem>link2</MenuItem>
            <MenuItem>link2</MenuItem>
          </SubMenu>
          <MenuItem>link</MenuItem>
          <MenuItem disabled>link3</MenuItem>
        </Menu>

        <Button disabled> Button default </Button>
<<<<<<< HEAD
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Button Primary Large
        </Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Large}>
          Default
        </Button>
        <Button autoFocus> autoFocus </Button>
        <Button btnType={ButtonType.Link} href="http//www.bilibili.com">
=======
        <Button btnType={ButtonTypeEnum.Primary} size={ButtonSizeEnum.Large}>
          Button Primary Large
        </Button>
        <Button btnType={ButtonTypeEnum.Default} size={ButtonSizeEnum.Large}>
          Default
        </Button>
        <Button autoFocus> autoFocus </Button>
        <Button btnType={ButtonTypeEnum.Link} href="http//www.bilibili.com">
>>>>>>> dev
          link of bilibili
        </Button>
      </main>
    </div>
  );
};

export default App;
