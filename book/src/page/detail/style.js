import styled from 'styled-components'

export const DetailWrapper = styled.div`
  overflow: hidden;
  width: 620px;
  margin: 0 auto;
  padding-bottom: 100px;
  margin: 0 auto;
  
`
//文章标题
export const Header = styled.div`
  margin: 50px 0 20px 0;
  font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  font-size: 34px;
  font-weight: 700;
  line-hight: 1.3;
  color: #333;
`
//作者信息
export const DetailAuthorWrapper = styled.div`
  margin: 30px 0 40px;
  & div {
    vertical-align: middle;
  }
  .avatar {
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
`;

export const AuthorInfo = styled.div`
  display: inline-block;
  margin-left: 16px;
  .name {
    display: block;
    font-size: 16px;
    color: #333;
  }
  .meta {
    display: block;
    margin-top: 5px;
    font-size: 12px;
    color: #969696;
  }
`;

//文章内容
export const Content = styled.div`
  color: #2f2f2f;
  img {
    width: 100%;
    margin:0 auto;
  }
  p {
    margin: 25px 0;
    font-size: 16px;
    line-height: 30px;
  }
  b {
    font-weight:bold;
  }
`
//广告
export const AdPart = styled.div`
  position: fixed;
  top: 80px;
  right: 50%;
  margin-right: -560px;
  width: 180px;
  height: 260px;
  background-image: url(//raw.githubusercontent.com/Toxicfy/Jianshu-React/master/src/statics/adImg.png);
  // background-image: url(//cdn2.jianshu.io/assets/web/web-note-ad-side-banner-22096669b4c4b91c3b9266894e951aef.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
`;
//回到顶部
export const BackTop = styled.div`
  position: fixed;
  right: 60px;
  bottom: 100px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  border: 1px solid #ccc;
  cursor: pointer;
`

// detail 底部 
export const DetailFooterWrapper = styled.div`
  text-align: center;
`;

export const FooterReward = styled.div`
  margin-top: 20px;
  h3 {
    padding: 0 30px;
    margin-bottom: 20px;
    min-height: 24px;
    font-size: 17px;
    font-weight: 700;
    color: #969696;
  }
  .btn-pay {
    margin: 0 auto;
    width: 120px;
    margin-bottom: 20px;
    padding: 8px 25px;
    font-size: 16px;
    color: #fff;
    background-color: #ea6f5a;
    border-radius: 20px;
  }
`;

export const FooterNotebook = styled.div`
  display: inline-block;
  width: 100%;
  font-size: 12px;
  color: #c8c8c8;
  padding: 30px;
  .left {
    float: left;
    span {
      margin-left: 5px;
    }
  }
  .right {
    float: right;
  }
`;

export const FooterDetail = styled.div`
  padding: 20px;
  background-color: hsla(0, 0%, 71%, 0.1);
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-size: 12px;
  overflow: hidden;
`;

export const FooterDetailInfo = styled.div`
  text-align: left;
  width: 100%;
  min-height: 47px;
  img {
    float: left;
    margin-right: 10px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  .name {
    display: block;
    margin-right: 3px;
    font-size: 17px;
    line-height: 1.8;
    vertical-align: middle;
  }
  .info {
    color: #969696;
  }
  .icon-attention {
    float: right;
    margin-top: -20px;
    padding: 8px 0;
    width: 100px;
    text-align: center;
    vertical-align: middle;
    border-radius: 40px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    background-color: #42c02e;
    border-color: #42c02e;
    span {
      margin-left: 5px;
    }
  }
`;
export const Signature = styled.div`
  text-align: left;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e1e1e1;
  color: #969696;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;