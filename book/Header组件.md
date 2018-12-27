### 1.Styled-Components与Reset.css的结合使用

- 使用 `styled-components` 统一管理组件样式，做到组件样式之间解耦。使用后，我们在组件中就不能直接引入`index.css`文件，而是新建文件 `style.js`来保存css

- 使用 `Reset.css` 统一不同浏览器内核渲染时出现的不一致问题
>在本人做该项目的时候，最新版的 styled-components v4 已经将原有的 injectGlobal() 方法替换成了 createGlobalStyle() ，而且用法也和之前的 injectGlobal 方法不同了。
具体改变 指南 [styled-components组件升级v4版本的全局样式踩坑](https://www.jianshu.com/p/4c69abc91971)

### 2.使用styled-components完成Header组件布局

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

###  4.使用iconfont嵌入头部图标

在网站选好图标后，只需要 `.eot` `.css` `.svg` `.ttf` `.woff` 文件引入项目，修改 `.css` 为 js 文件，然后使用 `import { injectGlobal } from 'styled-components'` 全局注入项目样式中。其中还需要修改 `url()` 的路径，以便方便webpack打包。

使用icon时，先拿到图标唯一的 `unicode` 名称，然后直接 `<i className="iconfont">&#xe636;</i>` 使用即可

###  5.搜索框动画效果实现
```javascript
<CSSTransition in={this.props.focused} timeout={330}
    classNames="slide"
>
    <NavSearch
        className={this.props.focused ? "focused" : ""}
        onFocus={this.props.handleFocus}
        onBlur={this.props.handleBlur}
    >
    </NavSearch>
</CSSTransition>
```
`CSSTransition`组件其实会帮你在内部组件被挂载到页面前，会把外层的组件上挂载一堆css样式，样式名就是你自定义的`classNames`，款式如：`.slide-enter` `.slide-enter-active` `.slide-exit` `.slide-exit-active`等等，此时就可以在这些样式内写自己的动画代码
>和vue中的transition 差不多

###  6.使用 React-Redux 进行应用数据的管理

`sotre` 好比一个实例仓库管理，但它不知道如何管理货物进出，得招聘一个 `reducer` 仓管员给仓库才行！

`reducer` 导出的必须是一个纯函数：给定一个固定的输入，必须返回一个固定的输出

使用redux的dispatch出action改变reduc中的state

### 7.使用combineReducers完成对数据的拆分管理

>reducer如果存放过多数据，可能会造成代码的不可维护，那么我们把一个reducer拆分成很多个子reducer，最终再做一个整合即可。

src/store/reducer.js
```javascript
import { combineReducers } from 'redux' ;
import {reducer as headerReducer} from '../common/header/store'

const reducer = combineReducers({
    header:headerReducer
})

export default reducer
```
将原来 src/store/reducer 的内容剪切出去，在header中创建一个store/reducer 

**注意**拆分过后，state多了一层，所以mapStateToProps中需要做相应修改
![](https://upload-images.jianshu.io/upload_images/9249356-ef5864980f52d6f2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


```javascript
const mapStateToProps = (state) => {
    return {
      focused : state.header.focused
    }
}
```

### 8.actionCreators与constants的拆分
首先在header组件的store里创建 `actionCreators.js`，用于返回action函数
再创建 `actionTypes.js`，用于存储action type的常量


```javascript

//为了能快速定位到bug
export const SEARCH_ON_FOCUS = 'header/search-on-focus' // 'header' 表示命名空间，防止命名冲突
export const SEARCH_ON_BLUR = 'header/search-on-blur'

```

在header组件的store里统一对外导出 `index.js` 文件，方便导出变量管理。这样我们就把一个组件展示的代码和数据管理的代码统一放到了一个文件夹下，这样以后管理组件就很方便迭代了


### 9.使用Immutable.js来管理store中的数据
`immutable.js`这个库是Facebook开发的一个库，它可以帮助我们生成一个 `immutable` 对象，这个对象是不可改变的。假设 reducer 中的 state 是一个 immutable 对象，那么 state 就不可以被改变，那么reducer就不会出问题

使用：
```javascript
//reducer.js
import { fromJS } from 'immutable' //不可修改  生成的immutable对象 不可改变
//转化成immutable对象
const defaultState = fromJS({
    focused : false,
    list:[]
})

...

if(action.type === actionTypes.SEARCH_ON_FOCUS){
    //immutable对象的set方法，会结合之前immutable对象的值
    // 和设置的值，返回一个全新的对象
       return state.set('focused', true)
    }
//业务组件中
const mapStateToProps = (state) => {
    return {
        /* 这种写法不太统一，state.是JS对象获取，
        state.header.是按immutable对象获取 */
        focused: state.header.get('focused') 
    }
}
```
 >immutable对象的set方法，会结合之前 immutable 对象的值和设置的值，返回一个 [全新的对象]，set方法并不会去改变原先对象里的值！

### 10.使用redux-immutable统一数据格式
>在之前的代码中
`state.header.get('focused')` 这段代码，这种写法不太统一，state.是JS对象获取，
state.header.是按immutable对象获取
>安装redux-immutable 
**最外层的store/reducer.js中**
原来这样获取`import { combineReducers } from 'redux'`，现在这样获取`import { combineReducers } from 'redux-immutable'`，用redux-immutable导出的combineReducers函数返回的就是一个immutable对象
```javascript
const mapStateToProps = (state) => {
    return {
        //这种写法不太统一，state.是JS对象获取，
        //state.header.是按immutable对象获取
        // focused: state.header.get('focused') 
        focused: state.get('header').get('focused'),
        //与上面效果一样
        // focused : state.getIn(['header','focused'])
    }
}

```

### 11.热门搜索样式布局
    1.使用CSS样式控制热门搜索框的显示
![](https://upload-images.jianshu.io/upload_images/9249356-6bb39ad81009513e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    2.使用JS控制
    

### 12.Ajax获取推荐数据

### 13.代码优化
- 解构赋值
- if 改为 switch
### 14.热门搜索换页功能实现

### 15.换页旋转动画效果的实现

### 16.避免无意义的Ajax请求

```javascript
<NavSearch
    className={focused ? "focused" : ""}
    onFocus={() => handleFocus(list)}
    onBlur={handleBlur}
>
...
 handleFocus(list) {
    // 注意：这里的list是immutable-array，没有length的
    if (list.size === 0) {
        dispatch(actionCreators.getList())   //只在list为空时获取异步数据
    }
    dispatch(actionCreators.searchFocus()) //搜索框变化
}
```