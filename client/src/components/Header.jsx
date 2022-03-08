import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
return(

<div id='fixed-bar' className='fixed-bar-box-shadow'>
    <div id='fixed-bar-wrap'>
        <h1 id='fixed-bar-logo-title'>
            <Link to='/'><img className='header-logo' src={require('../img/header_logo.svg').default} alt='headerlogo' />
            </Link>
            </h1>
            <section id='fixed-bar-search'>
                <div className='search-input-wrap'>
                    <input type='text' name='header-search-input' id='header-search-input' className='fixed-search-input' placeholder='동네 이름, 물품명 등을 검색해보세요!'></input>
                    <button id='header-seearch-button'>
                        <img className='fixed-search-icon' alt='Search' src={require('../img/search_icon.svg').default} />
                    </button>
                </div>
            </section>
            <section className='fixed-bar-menu'>
                <div className='fixed-download-wrapper'>
                    <input id='fixed-menu-checkbox' className='fixed-checkbox' type='checkbox'></input>
                    <label for='fixed-menu-checkbox' className='fixed-label'>
                        다운로드
                        <svg className='menu-icon-svg' width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M1 1L6 6L11 1' stroke='#4D5159' strokeLinecap='round' strokeLinejoin='round'></path></svg>
                    </label>
                    <ul className='fixed-menu-ul'>
                        <li><a target='_blank' className='menu-anchor' id='header-download-button-ios' href='https://apps.apple.com/kr/app/pangyojangteo/id1018769995?l=ko&ls=1'>
                        <img alt="App Store" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/apple-store-3a664174124650d63cae365bc55586fc5ff27b822b1b97788fc4af77d73d00c8.svg">
                            </img><span>App Store</span></a></li>
                        <li><a target='_blank' className='menu-anchor' id='header-download-button-android' href='https://play.google.com/store/apps/details?id=com.towneers.www'>
                        <img alt="Google Play" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/google-play-c9ad0fc573cd01e2b982df5de6709a3d8d7cec8d9b58a5c08db7da0b92a32a75.svg">
                            </img><span>Google Play</span></a></li>
                    </ul>
                </div>
                <Link to='/login'>
                    <button className='signin-button'>
                        <span className='button-text'>로그인</span>
                    </button>
                </Link>
            </section>
        
    </div>
</div>

)
}
export default Header;