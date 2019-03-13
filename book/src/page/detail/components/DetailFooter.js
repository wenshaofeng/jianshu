import React, { Component } from "react";
import {
  DetailFooterWrapper,
  FooterReward,
  FooterNotebook,
  FooterDetail,
  FooterDetailInfo,
  Signature
} from "../style";
import { Icon } from "antd";

class DetailFooter extends Component {
  render() {
    let { avator, name } = this.props;
    return (
      <DetailFooterWrapper>
        {/* pannel part one */}
        <FooterReward>
          <h3>小礼物走一走，来简书关注我</h3>
          <div className="btn-pay">赞赏支持</div>
        </FooterReward>

        {/* pannel part two */}
        <FooterNotebook>
          <span className="left">
            <Icon type="book" theme="outlined" />
            <span>日记本</span>
          </span>
          <div className="right">
            <span>© 著作权归作者所有 </span>
            <span>举报文章</span>
          </div>
        </FooterNotebook>

        {/* pannel part three */}
        <FooterDetail>
          <FooterDetailInfo>
            <img src={avator} alt="avator" />
            <span className="name">{name}</span>
            <span className="achieve">
              写了 88896 字，被 81 人关注，获得了 174 个喜欢
            </span>
            <div className="icon-attention">
              <Icon type="plus" theme="outlined" />
              <span>关注</span>
            </div>
          </FooterDetailInfo>
          <Signature>
            <span>千变万变不如自己改变，花时间去修炼不完美的自己</span>
          </Signature>
        </FooterDetail>
      </DetailFooterWrapper>
    );
  }
}

export default DetailFooter;
