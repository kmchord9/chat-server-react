import React from 'react';
import styled from 'styled-components';


type Props = {
    username?: string; // ポイント１(React.ReactNode などでもOK）
    msg?: string;
}

const LineLike = styled.div`
  .kaiwa.line {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 10px 0;
    background: #769ece;
    font-family: "ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro","Helvetica Neue", "Lucida Sans Unicode", "Arial";
    font-size: 16px;
    color: #333;
    line-height: 1.4;
    flex: 1;
  }
  /*フキダシ共通*/
  .kaiwa.line .fukidasi {
    position: relative;
    display: inline-block;
    max-width: 600px;
    margin: 8px 0 0;
    padding: 9px 14px;
    border-radius: 19px;
    overflow-wrap: break-word;
    clear: both;
    box-sizing: content-box;/*はてな用*/
    white-space: pre-wrap;
  }
  /*フキダシ左*/
  .kaiwa.line .fukidasi.left {
    margin-left: 62px;
    background: white;
  }
  /*グループのときのフキダシ*/
  .kaiwa.line .name + .fukidasi.left {
    margin-top: 5px;
  }
  /*フキダシ右*/
  .kaiwa.line .fukidasi.right {
    float: right;
    margin-right: 12px;
    background: #7adc40;
  }
  /*相手の名前*/
  .kaiwa.line .name {
    clear: right;
    margin-left: 62px;
    color: white;
    clear:both;
  }
  /*ユーザアイコン*/
  .kaiwa.line .icon {
    position: absolute;
    width: 40px;
    height: 40px;
    left: -54px;
    top: -2px;
    border-radius: 20px;
  }
  /*グループのときのユーザアイコン*/
  .kaiwa.line .name + .left .icon {
    top: -1.8em;
  }
  /*しっぽ共通*/
  .kaiwa.line .fukidasi::after {
    position: absolute;
    content: "";
    width: 24px;
    height: 36px;
    top: -21px;
  }
  /*しっぽ左*/
  .kaiwa.line .fukidasi.left:after {
    left: -10px;
    border-radius: 18px 0 6px 18px/18px 0 1px 18px;
    box-shadow: -3px -15px 0 -5px white inset;
  }
  /*しっぽ右*/
  .kaiwa.line .fukidasi.right::after {
    right: -10px;
    border-radius: 0 18px 18px 6px/0 18px 18px 1px;
    box-shadow: inset 3px -15px 0 -5px #7adc40;
  }
  /*フキダシが続いてしっぽがないとき*/
  .kaiwa.line .left + .left::after,
  .kaiwa.line .right + .right::after {
    content: none;
  }
`;

const LineLikeMessage = (props: Props) => {
  return (
    <>
    <LineLike>
      <div className="kaiwa line">
        <div className="name">{props.username}</div>
        <div className="fukidasi left">{props.msg}</div>
      </div>
    </LineLike>
    </>
  );
};

export default LineLikeMessage;

