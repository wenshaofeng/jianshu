import React, { Component } from "react";
import { AuthorInfo, DetailAuthorWrapper } from "../style";

class DetailAuthor extends Component {
  render() {
    const { currentData, content } = this.props;
    return (
      <DetailAuthorWrapper>
        <img className="avatar" src={currentData.avator} alt="" />
        <AuthorInfo>
          <span className="name">{currentData.author}</span>
          <span className="meta">{content}</span>
        </AuthorInfo>
      </DetailAuthorWrapper>
    );
  }
}

export default DetailAuthor;
