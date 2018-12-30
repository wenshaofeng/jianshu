import React, { Component } from "react";
import { DownloadArea } from "../styled";
import { Icon } from "antd";
class DownloadApp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <DownloadArea>
                <img
                    src="//raw.githubusercontent.com/Toxicfy/Jianshu-React/master/src/statics/image/Qrcode.png"
                    alt="qrcode"
                />
                <div className="info">
                    <div>
                        <span className="title">下载简书手机App  </span>
                        <Icon type="right" />
                    </div>
                    <span className="desc">随时随地发现和创作内容</span>
                </div>
            </DownloadArea>
        );
    }
}

export default DownloadApp;