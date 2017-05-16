import React from 'react';
import style from '../css/find.css';
class Find extends React.Component{

    render (){
        return (
            <div>
                <header className="topbar">
                   <h1>发现</h1>
                   <span className="ico">&lt;</span>
                </header>
                <section className="parts">
                    <div className="top clearfix">
                        <div className="integral clearfix">
                            <a href="javascript:;">
                                <img src="./src/images/f-1.jpeg" alt=""/>
                                <p className="title">积分商城</p>
                                <p className="tips">0元好物在这里！</p>
                            </a>
                        </div>
                        <div className="right">
                            <a href="javascript:;" className="delicious">
                                <img src="./src/images/f-2.jpeg" alt=""/>
                                <p className="title">美味爆料</p>
                                <p className="tips">承包你的小饥饿！</p>
                            </a>
                            <a href="javascript:;" >
                                <img src="./src/images/f-3.jpeg" alt=""/>
                                <p className="title">推荐有奖</p>
                                <p className="tips">5元现金拿不停</p>
                            </a>
                        </div>
                    </div>
                    <div className="banner">
                        <a href="javascript:;"><img src="./src/images/f-4.jpeg" alt=""/></a>
                    </div>
                </section>
                <section className="list">
                    <div className="activity-header">
                        <span className="left"></span>    
                        大家都在吃
                        <span className="right"></span>
                        <p>总有美味在身边</p>
                    </div>
                    <div className="order">
                        <div className="owner">
                            <img src="./src/images/f-5.jpeg" alt=""/>
                        </div>
                        <div className="order-detail">
                            <div className="owner-name">
                                <span>三***哈</span>
                            </div>
                            <div className="rating">3天前吃过</div>
                            <div className="comment">
                                <p>好吃 超级好吃</p>
                            </div>
                            <div className="foods">
                                <p>
                                    <span>正新鸡排（华润万家店）</span>
                                    <span>评价4.7分/ 月售944单</span>
                                </p>
                                <a href="javascript:;">
                                    <p>（2）超值单人套餐</p>
                                    <img src="./src/images/f-6.jpeg" alt=""/>
                                </a>
                               <a href="javascript:;">
                                    <p>俄罗斯大肉串 3串</p>
                                    <img src="./src/images/f-1.jpg" alt=""/>
                                </a>
                                <a href="javascript:;">
                                    <p>烤香肠</p>
                                    <img src="./src/images/f-7.jpeg" alt=""/>
                                </a>
                            </div>
                            <div className="order-footer">
                                <p>实付<span>¥22</span></p>
                                <a href="javascript:;">跟一单</a>
                            </div>
                        </div>
                    </div>
                    <p>查看更多</p>
                </section>
                <section className="list">
                    <div className="activity-header">
                        <span className="left"></span>    
                         限时好礼
                        <span className="right"></span>
                        <p>小积分换豪礼</p>
                    </div>
                    <div className="activity-body">
                        <a href="javascript:;">
                            <img src="./src/images/f-8.jpeg" alt=""/>
                            <div>
                                <p>iPhone 7 32G</p>
                                <p><span>299积分</span><del>¥4499</del></p>
                            </div>
                            <span>抽奖活动</span>
                        </a>
                        <a href="javascript:;">
                            <img src="./src/images/f-9.jpeg" alt=""/>
                            <div>
                                <p>7元饿了么红包</p>
                                <p><span>2100积分</span><del>¥7</del></p>
                            </div>
                            <span>0元兑换</span>
                        </a>
                        <a href="javascript:;">
                            <img src="./src/images/f-10.jpeg" alt=""/>
                            <div>
                                <p>饿配送体验卡</p>
                                <p><span>1800积分</span><del>¥6</del></p>
                            </div>
                            <span>非会员专享</span>
                        </a>
                    </div>
                    <p>查看更多</p>
                </section>
            </div>
        )
    }

} 

export default Find; 