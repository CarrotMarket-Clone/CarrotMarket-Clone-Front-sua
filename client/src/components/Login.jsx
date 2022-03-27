import React from 'react';
import './LoginRegister.css';
import { Link } from "react-router-dom";

function Login() {
    return(
    <div id="login-area">
        <div className='login-main'>
            <h1 className='login-title'>로그인</h1>
            <p className='login-description'>당근마켓 첫 이용시 회원가입이 필요합니다.</p>
        </div>
        <div className='login-input-wrap'>
            <div className='longin-input'>
                <div className='login-input-text'>아이디(이메일)</div>
                <input /*type=''*/ placeholder='&nbsp;아이디 입력'></input>
            </div>
            <div className='longin-input'>
                <div className='login-input-text'>비밀번호</div>
                <input /*type=''*/ placeholder='&nbsp;비밀번호 입력'></input>
            </div>
        <div className='login-btn-wrap'>
            <button className='login-btn'>로그인</button>
        </div>
        <div className='login-bottom'>
            <ul className='login-bottom-link-wrap'>
                <li className='login-bottom-link'>메인 화면  <Link to='/'>돌아가기</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</li>
                <li className='login-bottom-link'>처음오셨나요? <Link to='/register'>회원가입</Link> </li>
            </ul>
        </div>

        </div>
    
    
    
    
    
    </div>

)
}
export default Login;

