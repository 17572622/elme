import React from 'react';
import {Link, Route } from 'react-router-dom';
import TakeOutFood from './Take-out-food';
import Find from './find';
import Order from './Order';
import Center from './Center';
class Home extends React.Component{
    render(){
        return (
            <div>
                <Route exact path='/' component={TakeOutFood}></Route>
                <Route path='/find' component={Find}></Route>
                <Route path='/order' component={Order}></Route>
                <Route path='/center' component={Center}></Route>
                <footer>
                    <div>
                        <Link className="active" to="/"><i className="iconfont icon-waimai"></i><span>外卖</span></Link>
                        <Link to="/find"><i className="iconfont icon-faxian"></i><span>发现</span></Link>
                        <Link to="/order"><i className="iconfont icon-dingdan"></i><span>订单</span></Link>
                        <Link to="/center"><i className="iconfont icon-wode"></i><span>我的</span></Link>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Home;