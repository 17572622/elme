import React from 'react';
import style from '../css/center.css';
 class Center extends React.Component{
     render(){
         return (
            <div>
                <header className="ba">
                   <h1>我的</h1>
                   <span className="ico">&lt;</span>
                </header>
                <section className="Top">
                    <div className="login">
                        <img src="./src/images/login.png" alt=""/>
                        <div>
                            <p>登录/注册</p>
                            <p>登录后享受更多特权</p>
                        </div>
                        <span>&gt;</span>
                    </div>
                </section>
                <div className="nav">
                    <a href="javascript:;">
                        <p>
                            <i></i>
                        </p>
                        <p>余额</p>
                    </a>
                    <a href="javascript:;">
                         <p>
                            <i></i>
                        </p>
                        <p>优惠</p>
                    </a>
                    <a href="javascript:;">
                         <p>
                            <i></i>
                        </p>
                        <p>积分</p>
                    </a>
                </div>
                <section className="profile">
                    <a href="javascript:;">
                        <aside></aside>
                        <div>我的订单<span>&gt;</span></div>
                    </a>
                    <a href="javascript:;">
                        <aside></aside>
                        <div>积分商城<span>&gt;</span></div>
                    </a>
                    <a href="javascript:;">
                        <aside></aside>
                        <div>俄了么会员卡<span>&gt;</span></div>
                    </a>
                </section>
                <section className="profile">
                    <a href="javascript:;">
                        <aside></aside>
                        <div>服务中心<span>&gt;</span></div>
                    </a>
                    <a href="javascript:;">
                        <aside></aside>
                        <div>下载饿了么APP<span>&gt;</span></div>
                    </a>
                </section>
            </div>
         )
     }
 }

 export default Center;