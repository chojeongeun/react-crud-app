import React, { Component } from "react";
import "./ExpenseItem.css";

export default class ExpenseItem extends Component {
  render() {
    return (
      <li className="item">
        <div className="info">
          <span className="expense">빵</span>
          <span className="amount">100원</span>
        </div>
        <button className="edit-btn">수정</button>
        <button className="clear-btn">삭제</button>
      </li>
    );
  }
}
