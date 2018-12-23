### Styled-Components与Reset.css的结合使用

- 使用 `styled-components` 统一管理组件样式，做到组件样式之间解耦。使用后，我们在组件中就不能直接引入`index.css`文件，而是新建文件 `style.js`来保存css

- 使用 `Reset.css` 统一不同浏览器内核渲染时出现的不一致问题
>在本人做该项目的时候，最新版的 styled-components v4 已经将原有的 injectGlobal() 方法替换成了 createGlobalStyle() ，而且用法也和之前的 injectGlobal 方法不同了。
具体改变 指南 [styled-components组件升级v4版本的全局样式踩坑](https://www.jianshu.com/p/4c69abc91971)

### 使用styled-components完成Header组件布局

header/index.js 就好像一个聚合组件，把header/style.js 中的每个小组件组合在一起

header/index.js
```javascript
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <HeaderWrapper>
                <Logo />
                <Nav></Nav>
            </HeaderWrapper>
         );
    }
}

```
header/style.js
```javascript

export const HeaderWrapper = styled.div`
    z-index: 1;
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0; 
`

export const Logo = styled.a.attrs({
    href: '/'
  })`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    background: green;
`
```


>这节课主要使用了 `styled-components` 第三方模块实现了一些带样式的组件，这些组件的样式是独享的，他们之间不会产生任何的相互影响，这就有效的避免了多个组件可能产生的css样式冲突的问题，所以非常建议以后开发时时候使用 `styled-components` 进行项目布局

###  使用iconfont嵌入头部图标

在网站选好图标后，只需要 `.eot` `.css` `.svg` `.ttf` `.woff` 文件引入项目，修改 `.css` 为 js 文件，然后使用 `import { injectGlobal } from 'styled-components'` 全局注入项目样式中。其中还需要修改 `url()` 的路径，以便方便webpack打包。

使用icon时，先拿到图标唯一的 `unicode` 名称，然后直接 `<i className="iconfont">&#xe636;</i>` 使用即可