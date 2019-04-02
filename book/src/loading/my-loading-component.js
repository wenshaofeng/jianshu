import React from 'react';
import { Loading, Overlay } from './style'


const LoadingComponent = (props) => {
    return (
        <div className="ajax-loading" id="ajaxLoading" >
            <Overlay></Overlay>
            <Loading>
                <img src="https://media.number-7.cn/ebike-h5/static/images/common/loading.gif" alt="" />
                <span>加载中，请稍后...</span>
            </Loading>
        </div>
    )
}

export default LoadingComponent;