import React from "react";
import './Footer.css';

function Footer(){
    return(
        <div id="footer">
        <div className="footer-container"> {/*원본소스보고 추가- 한번 더 감싸줌 */}
        <div className="footer-top"> {/*section1>div footer-top으로 이름 변경*/}
            <div className="footer-logo">
                </div>
            <ul className="footer-list">
                <li className="footer-list-item"><a href='#!' className='link-highlight'>믿을 수 있는 중고거래</a></li>
                <li className="footer-list-item"><a href='#!' className='link-highlight'>자주 묻는 질문</a></li>
            </ul>
            <ul className="footer-list">
                <li className="footer-list-item"><a href='#!' className='link-highlight'>광고주센터</a></li>
                <li className="footer-list-item"><a href='#!'>당근페이</a></li>
                <li className="footer-list-item"><a href='#!'>동네가게</a></li>
            </ul>
            <ul className="footer-list">
                <li className="footer-list-item"><a href='#!'>회사 소개</a></li>
                <li className="footer-list-item"><a href='#!'>채용</a></li>
            </ul>
            <ul className="footer-list policy"> {/*footer-list>footer list policy 로 변경 --> classname에 공백가능? 어떤기능?
             스페이스는 하위 엘리먼트에서 모두 조건에 맞는 엘리먼트를 찾는것붙어있으면 같은 엘리먼트에서 모든 조건에 맞는 엘리먼트를 찾는것*/}
                <li className="footer-list-item"><a href='#!'>이용약관</a></li>
                <li className="footer-list-item"><a href='#!'>개인정보처리방침</a></li>
                <li className="footer-list-item"><a href='#!'>위치기반서비스 이용약관</a></li>
            </ul>
        </div>
        <div className="divide-line"></div>
        <div className="footer-bottom"> {/*section2 tag를 div footer-bottom으로 변경*/}
            <div id="copyright"> {/*className link-wrap>id copyright로 변경*/}
                <ul className="copyright-list">
                    <li className="copyright-list-item">고객문의 <a href="mailto:cs@daangnservice.com">cs@daangnservice.com</a></li>
                    <li className="copyright-list-item">제휴문의 <a href="mailto:contact@daangn.com">contact@daangn.com</a></li>
                </ul>
                <ul className="copyright-list"> {/* 2개씩 배열되어있어서 ul하나로 묶었나 두개로 묶었나 했는데 2개 ul로 나누되 className 같게줌*/}
                    <li className="copyright-list-item">지역광고 <a href="mailto:ad@daangn.com">ad@daangn.com</a></li>
                    <li className="copyright-list-item">PR문의 <a href="mailto:pr@daangn.com">pr@daangn.com</a></li> {/*mailto:를 a태그의 href속성 내부에 접두사로 주면 해당 주소로 메일전송*/}
                </ul>
            </div>
            <ul className="copyright-list copyright-list-light">
                <li className="copyright-list-item">
                    <address>서울특별시 구로구 디지털로30길 28, 609호 (당근서비스)</address></li>  {/*adress는 그저시각적인걸위한태그인지?*/}
                <li className="copyright-list-item">사업자 등록번호 : 375-87-00088</li> 
                <li className="copyright-list-item">직업정보제공사업 신고번호 : J1200020200016</li>
            </ul>
            <div id="social"> {/*className="sns">id="social*/}
                <ul className="social-list"> 
                    <li className="social-list-item"><a target="_blank" className="footer-social-link" href="https://www.facebook.com/daangn"><img alt="facebook" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-facebook-0563f4a93852d073b41f13b8bcabb03d47af3bb3a6755cdfedd8a73686c7f18c.svg" />
                        </a></li>
                    <li className="social-list-item"><a target="_blank" className="footer-social-link" href="https://www.instagram.com/daangnmarket/"><img alt="instagram" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-instagram-2f6c88a461597907c114b7ce28eab053fcae791ed26417915fefb6f7c9f95756.svg"/>
                        </a></li>
                    <li className="social-list-item"><a target="_blank" className="footer-social-link" href="https://blog.naver.com/daangn"><img alt="blog" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-blog-e1b0d512d1766a6962ec5bbb5b0803d2a6a9c55ad97db5ba9eebb76013caceba.svg"/>
                    </a></li>
                    <li className="global-links">
                        <img src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/footer/icon-global-2f53678b428ec623cefd07a90dd7777f3e55fc0433918f645d7d75ace6ff1fc3.png" width="24" height="24"/>
                        <select id="global-links-select"> {/*select tag:used to create a drop-down list.*/}
                            <option value="kr">한국</option>
                            <option value="https://uk.karrotmarket.com">영국</option>
                            <option value="https://ca.karrotmarket.com">캐나다</option>
                            <option value="https://us.karrotmarket.com">미국</option>
                            <option value="https://jp.karrotmarket.com">일본</option>
                        </select>
                    </li> {/*나는따로 div로 뺏었는데 ul안에 li로 넣어서 그걸로 수정*/}
                </ul>
            </div>
            <div className="copyright-text">©GDSC PNU Cloning Study - Sua Kang</div>
        </div>
        </div>
        </div>


    )
}

export default Footer;