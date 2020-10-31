import React from "react";
import './index.scss'

class ListDetail extends React.Component{
    state={

    }

    render(){
        return (
            <div>
                <div className='head'>
                    <div className='headerTop'>
                        <span>产品详情</span>
                    </div>
                </div>
                <div className='content'>
                    <div className='ld_banner'>
                        <a href="">
                            <img src="" alt=""/>
                        </a>
                        <p>
                            <em className='fr'>产品编号</em>
                            <span>跟团游</span>
                        </p>
                    </div>
                    <div className='ld_top'>
                        <h1 className='ld_title'> 【广州一日游】广州一日游好去处｜广州精品一日游｜天天发团</h1>
                        <div className='bq'>
                            <i>广州一天游</i>
                        </div>
                        <div className='pricenum'>
                            <span className='money'>
                                
                                <em>￥198</em>
                            </span>
                            <font className='not'>￥369</font>
                        </div>
                    </div>
                    <div className='ld_type'>
                    预订类型：
                    <span>广州一日游+珠江夜游</span>
                    <font className='fr cor999'>更多类型</font>
                    </div>
                    <div className='go_time'>
                        <div className='tit'>
                        出游日期 
                        </div>
                        <ul className='time_li'>
                            <li>
                                <div>
                                    <a href="">
                                        <p>11-01 周日</p>
                                        <span>￥268</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="">
                                        <p>11-01 周日</p>
                                        <span>￥268</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="">
                                        <p>11-01 周日</p>
                                        <span>￥268</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="">
                                        <p>11-01 周日</p>
                                        <span>￥268</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="">
                                        <p>11-01 周日</p>
                                        <span>￥268</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="">
                                        <p>11-01 周日</p>
                                        <span>￥268</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='jifen'>
                    本行程无购物，无自费，以您与旅行社签订的旅游合同为准
                    </div>
                </div>
            </div>

        );
    }
}

export default ListDetail;
