import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';
import { SwiperWrapper } from '../styled'



class Hswiper extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {

        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
        //鼠标移出隐藏按钮，移入显示按钮
        mySwiper.el.onmouseover = function () {
            mySwiper.navigation.$nextEl.removeClass('hide');
            mySwiper.navigation.$prevEl.removeClass('hide');
        }
        mySwiper.el.onmouseout = function () {
            mySwiper.navigation.$nextEl.addClass('hide');
            mySwiper.navigation.$prevEl.addClass('hide');
        }

    }
    render() {
        return (
            <SwiperWrapper>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4589/bd702bcdffe78c631522a3906e3440bd9b16a170.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="cover1" />
                        </div>
                        <div className="swiper-slide">
                            <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4593/fa5490809ff3344c5aa72312aa1e05921be77222.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="cover2" />
                        </div>
                        <div className="swiper-slide">
                            <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4590/7f1edd154f90446a038d6ecd10bebf6e8929fbf5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="cover3" />
                        </div>
                        <div className="swiper-slide">
                            <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4588/c9d175a9865206d371742d53c41ed4a042c5d00b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="cover4" />
                        </div>        
                    </div>
                    <div className="swiper-button-prev swiper-button-black"></div>
                    <div className="swiper-button-next swiper-button-black"></div>
                    <div className='swiper-pagination'></div>
                </div>
            </SwiperWrapper>
        );
    }
}

export default Hswiper;