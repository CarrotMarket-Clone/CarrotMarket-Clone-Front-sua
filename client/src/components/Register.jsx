import React from 'react';
import './LoginRegister.css';

function Register() {

    <div id="login-area">
        <div className='login-main'>
            <h1 className='login-title'>회원가입</h1>
            <p className='login-description'>회원가입을 통해 당근마켓을 이용해 보세요!</p>
        </div>
        <div className='login-input-wrap'>
            <div className='longin-input'>
                <div className='login-input-text'>아이디(이메일)<p>*</p></div>
                <input /*type=''*/ placeholder='예) daangn@gmail.com'></input>
            </div>
            <div className='longin-input'>
                <div className='login-input-text'>비밀번호<p>*</p></div>
                <input /*type=''*/ placeholder='비밀번호 입력'></input>
            </div>
            <div className='longin-input'>
                <div className='login-input-text'>비밀번호 확인<p>*</p></div>
                <input /*type=''*/ placeholder='비밀번호 확인'></input>
            </div>
            <div className='longin-input'>
                <div className='login-input-text'>이름<p>*</p></div>
                <input /*type=''*/ placeholder='예) 홍길동'></input>
            </div>
            <div className='longin-input'>
                <div className='login-input-text'>전화번호<p>*</p></div>
                <input /*type=''*/ placeholder='예) 01012345678'></input>
            </div>
            <div className='checkbox-wrap'>
                <input type='checkbox' className='register-checkbox'>가입을 위해 <a href='#!'>약관</a>에 동의합니다<p className='login-nec'>(필수)</p></input>
                <label for='register-checkbox' className='register-checkbox'></label>
            </div>    
        <div className='login-btn-wrap'>
            <button className='login-btn'>회원가입</button>
        </div>
        <div className='login-bottom'>
            <ul className='login-bottom-link-wrap'>
                <li className='login-bottom-link'>이미 회원이신가요?<a href='#!'>뒤로가기</a></li>
            </ul>
        </div>

        </div>
    
    
    
    
    
    </div>


}
export default Register;

