import React from 'react';

class TakeOutFood extends React.Component{

render (){
   return (
       <div>
           <header id="header">
        <div className="top clearfix">
            <p className="fl">
                <i className="iconfont icon-dingwei"></i><span>南山区西丽南天路南国丽城北</span>
            </p>
            <div className="fr clearfix">
                <div className="fl">
                    <p>20°</p>
                    <p>晴天</p>
                </div>
                <i className="iconfont icon-sun fl"></i>
            </div>
        </div>
        <form action="index_submit" method="get">
            <input type="text" name="" placeholder="搜索商家、商品" />
        </form>
        <div>
            <nav>
                <a href="">早餐</a>
                <a href="">五谷渔粉</a>
                <a href="">烤肉</a>
                <a href="">饭戒</a>
                <a href="">抢百万红包</a>
                <a href="">天天特价</a>
                <a href="">汤粉</a>
                <a href="">龙虾</a>
                <a href="">饺子</a>
                <a href="">百果园</a>
            </nav>
        </div>
    </header>
    <section id="product">
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <a href="">
                        <div>
                            <img src="./src/images/9.jpeg" alt="" />
                        </div>
                        <span>美食</span>
                    </a>
                    <a href="">
                        <div>
                            <img src="./src/images/10.jpeg" alt="" />
                        </div>
                        <span>甜品饮品</span>
                    </a>
                    <a href="">
                        <div>
                            <img src="./src/images/11.jpeg" alt="" />
                        </div>
                        <span>商超便利</span>
                    </a>
                    <a href="">
                        <div>
                            <img src="./src/images/12.jpeg" alt="" />
                        </div>
                        <span>预订早餐</span>
                    </a>
                    <a href="">
                        <div>
                            <img src="./src/images/13.jpeg" alt="" />
                        </div>
                        <span>果蔬生鲜</span>
                    </a>
                    <a href="">
                        <div>
                            <img src="./src/images/14.jpeg" alt="" />
                        </div>
                        <span>新店特惠</span>
                    </a>
                    <a href="">
                        <div>
                            <img src="./src/images/15.jpeg" alt="" />
                        </div>
                        <span>准时达</span>
                    </a>
                    <a href="">
                        <div>
                            <img src="./src/images/16.jpeg" alt="" />
                        </div>
                        <span>简餐</span>
                    </a>
                </div>
                <div className="swiper-slide">
                    <a href="">
                        <div>
                            <img src="./src/images/1.jpeg" alt="" />
                        </div>
                        <span>土豪推荐</span>
                    </a>
                    <a href="">
                        <div>
                            <img src="./src/images/2.jpeg" alt="" />
                        </div>
                        <span>鲜花蛋糕</span>
                    </a>
                    <a href="">
                        <div>
                            <img src="./src/images/3.jpeg" alt="" />
                        </div>
                        <span>汉堡薯条</span>
                    </a>
                    <a href="">
                        <div>
                            <img src="./src/images/4.jpeg" alt="" />
                        </div>
                        <span>包子粥店</span>
                    </a>
                    <a href="">
                        <div>
                            <img src="./src/images/5.jpeg" alt="" />
                        </div>
                        <span>麻辣烫</span>
                    </a>
                    <a href="">
                        <div>
                            <img src="./src/images/6.jpeg" alt="" />
                        </div>
                        <span>川湘菜</span>
                    </a>
                    <a href="">
                        <div>
                            <img src="./src/images/7.jpeg" alt="" />
                        </div>
                        <span>披萨意面</span>
                    </a>
                    <a href="">
                        <div>
                            <img src="./src/images/8.jpeg" alt="" />
                        </div>
                        <span>日韩料理</span>
                    </a>
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </section>
    <h3 className="wrap">商家推荐</h3>
    <section className="clearfix main-pro">
        <a href="" title="">
			<div className="logo fl">
            	<div>
                	<img src="./src/images/17.jpeg" alt="" />
            	</div>
        	</div>
        	<div className="main fl">
            	<section className="clearfix">
                	<h3 className="fl"><b>品牌</b>深圳麦当劳西丽餐厅</h3><span className="fr">保</span>
            	</section>
           		<section>
					<div>
						<span>★★★★★4.6</span><span>月售1008单</span>
					</div>
            	</section>
            	<section>
					<span className="fl">¥20起送 / 配送费¥5 / ¥34/人</span><span className="fr">662m / <b>24分钟</b></span>
            	</section>
        	</div>
        </a>
    </section>
    <section className="clearfix main-pro">
        <a href="" title="">
			<div className="logo fl">
            	<div>
               	 <img src="./src/images/18.jpeg" alt="" />
            	</div>
        		</div>
       		 	<div className="main fl">
            	<section className="clearfix">
                	<h3 className="fl"><b>品牌</b>周黑鸭(深圳西丽店)</h3><span className="fr">保</span>
            	</section>
            	<section>
					<div>
						<span>★★★★★4.6</span><span>月售1008单</span>
					</div>
            	</section>
            	<section>
					<span className="fl">¥20起送 / 配送费¥5 / ¥34/人</span><span className="fr">662m / <b>24分钟</b></span>
            	</section>
        	</div>
        </a>
    </section>
    <section className="clearfix main-pro">
        <a href="" title="">
			<div className="logo fl">
            	<div>
                	<img src="./src/images/20.png" alt="" />
            	</div>
        	</div>
        	<div className="main fl">
            	<section className="clearfix">
                	<h3 className="fl"><b>品牌</b>周黑鸭(深圳西丽店)</h3><span className="fr">保</span>
            	</section>
            	<section>
					<div>
						<span>★★★★★4.6</span><span>月售1008单</span>
					</div>
            	</section>
            	<section>
					<span className="fl">¥20起送 / 配送费¥5 / ¥34/人</span><span className="fr">662m / <b>24分钟</b></span>
            	</section>
        	</div>
        </a>
    </section>
    <section className="clearfix main-pro">
    	<a href="" title="">
	        <div className="logo fl">
	            <div>
	                <img src="./src/images/20.png" alt="" />
	            </div>
	        </div>
	        <div className="main fl">
	            <section className="clearfix">
	                <h3 className="fl"><b>品牌</b>周黑鸭(深圳西丽店)</h3><span className="fr">保</span>
	            </section>
	            <section>
					<div>
						<span>★★★★★4.6</span><span>月售1008单</span>
					</div>
	            </section>
	            <section>
					<span className="fl">¥20起送 / 配送费¥5 / ¥34/人</span><span className="fr">662m / <b>24分钟</b></span>
	            </section>
	        </div>
	     </a>
    </section>
    <section className="clearfix main-pro">
    	<a href="" title="">
	        <div className="logo fl">
	            <div>
	                <img src="./src/images/21.png" alt="" />
	            </div>
	        </div>
	        <div className="main fl">
	            <section className="clearfix">
	                <h3 className="fl"><b>品牌</b>周黑鸭(深圳西丽店)</h3><span className="fr">保</span>
	            </section>
	            <section>
					<div>
						<span>★★★★★4.6</span><span>月售1008单</span>
					</div>
	            </section>
	            <section>
					<span className="fl">¥20起送 / 配送费¥5 / ¥34/人</span><span className="fr">662m / <b>24分钟</b></span>
	            </section>
	        </div>
	     </a>   
    </section>
    <section className="clearfix main-pro">
    	<a href="" title="">
	        <div className="logo fl">
	            <div>
	                <img src="./src/images/22.jpeg" alt="" />
	            </div>
	        </div>
	        <div className="main fl">
	            <section className="clearfix">
	                <h3 className="fl"><b>品牌</b>周黑鸭(深圳西丽店)</h3><span className="fr">保</span>
	            </section>
	            <section>
					<div>
						<span>★★★★★4.6</span><span>月售1008单</span>
					</div>
	            </section>
	            <section>
					<span className="fl">¥20起送 / 配送费¥5 / ¥34/人</span><span className="fr">662m / <b>24分钟</b></span>
	            </section>
	        </div>
	    </a>    
    </section>
       </div>
   )
}


}

export default TakeOutFood;