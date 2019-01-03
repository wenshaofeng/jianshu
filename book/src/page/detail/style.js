import styled from 'styled-components'

export const DetailWrapper = styled.div`
  overflow: hidden;
  width: 620px;
  margin: 0 auto;
  padding-bottom: 100px;
  margin: 0 auto;
  
`

export const Header = styled.div`
  margin: 50px 0 20px 0;
  font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  font-size: 34px;
  font-weight: 700;
  line-hight: 1.3;
  color: #333;
`

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