import React from 'react';
import './Home.css';
//드래그 시 주황색으로 되도록 추가하기//
function Home(){
    return(
        <div id='home'>
            <section id='home-main-section-top' className='background-pale-peach'> {/*section className='area'*/}
                <div className='contents'>
                    <div className='text-area'>
                        <div className='title'>당신 근처의<br/>당근마켓</div>
                        <div className='description'>중고 거래부터 동네 정보까지, 이웃과 함께해<br/>가깝고 따뜻한 당신의 근처를 만들어요.</div>
                    </div>
                <div className='home-main-image-top'></div>
                </div>
            </section>

            <section className='home-main-section'>
            <div className='contents'>
                <div className='home-main-image home-main-image-01'></div>
                <div className='text-area'>
                    <div className='title'>우리 동네<br/>중고 직거래 마켓</div>
                    <div className='description'>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.</div>
                    <div className='buttons'>
                        <button className='home-main-button'>인기매물 보기</button>
                        <button className='home-main-button'>믿을 수 있는 중고거래</button>
                    </div>
                </div>
                </div>
            </section>

            <section className='home-main-section background-pale-green'>
            <div className='contents'>
                <div className='text-area'>
                    <div className='title'>이웃과 함께 하는<br/>동네생활</div>
                    <div className='description'>우리 동네의 다양한 이야기를 이웃과 함께 나누어요.</div>
                    <ul className='description-list'>
                        <li className='description-item'><img src={require('../img/icon-story-1.svg').default}></img><br/>우리동네질문<div className='description-notbold'>궁금한 게 있을 땐 이웃에게 물어보세요.</div></li>
                        <li className='description-item'><img src={require('../img/icon-story-2.svg').default}></img><br/>동네분실센터<div className='description-notbold'>무언가를 잃어버렸을 때, 함께 찾을 수 있어요.</div></li>
                        <li className='description-item'><img src={require('../img/icon-story-3.svg').default}></img><br/>동네모임<div className='description-notbold'>관심사가 비슷한 이웃과 온오프라인으로 만나요.</div></li>
                    </ul>
                </div>
                    <div className='home-main-image home-main-image-02'></div>
                </div>
            </section>

            <section className='home-main-section'>
            <div className='contents'>
                <div className='home-main-image home-main-image-03'></div>
                <div className='text-area'>
                    <div className='title'>내 근처에서 찾는<br/>동네가게</div>
                    <div className='description'>우리 동네 가게를 찾고 있나요?<br/>동네 주민이 남긴 진짜 후기를 함께 확인해보세요!</div>
                    <div className='buttons'>
                        <button className='home-main-button'>당근마켓 동네가게 찾기</button>
                    </div>
                    </div>  
                </div>
            </section>
            {/*
            <section className='top-rank-area'>
            <div className='contents'>
                    <div className='top-rank-title'>중고거래 인기검색어</div>
                    <ul className='top-rank-keywords'>
                        <li>자전거</li>
                        <li>캠핑</li>
                        <li>패딩</li>
                        <li>의자</li>
                        <li>냉장고</li>
                        <li>노트북</li>
                        <li>아이폰</li>
                        <li>난로</li>
                        <li>컴퓨터</li>
                        <li>아이패드</li>
                    </ul>
                </div>
            </section>*/}
        </div>






    )
}

export default Home;