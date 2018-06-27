import React, { Component } from 'react';
import $ from "jquery";
import './RegisterInfo.css';
import './RegisterInfoBtn.css';

const toggleRegisterInfo = () => {
    let block = $('.register-info'),
        value = block.css('right') !== '0px' ? '0px' : '-100%';
    block.animate({
        right: value,
    });
};

export class RegisterInfoBtn extends Component {
    render() {
        return (
            <button className="register-info-btn" onClick={toggleRegisterInfo}>?</button>
        )
    }
}

export class RegisterInfo extends Component {
    render() {
        return (
            <div className="register-info">
                <div className="register-info__content">
                    <p className="register-info__title">
                        <span>REGISTER NEW COMPANY</span>
                    </p>
                    <p>
                        You are about to register your xDAC company. The company will be created
                        in our system and deployed to the network within 90 days from the day of
                        your registration. In order to register a company, you need to set your initial
                        capital which should be 100 XDAC or more and send it to address on the
                        following page.
                    </p>
                    <p className="register-info__mb">
                        Initial capital represents your stake in the company. 1 XDAC is one vote in
                        your company. If you have multiple partners, they can participate in your
                        company by sending XDAC tokens from a different ETH wallet address in
                        an amount that represents their stake.
                    </p>
                    <p>Example:</p>
                    <p>The company created by single owner:</p>
                    <p>Owner sends 100 XDAC.</p>
                    <p className="register-info__mb">
                        100 XDAC = 100 votes which is 100% stake in the company.
                    </p>
                    <p>The company created by 2 owners:</p>
                    <p>Owner A sends 300 XDAC.</p>
                    <p>Owner B sends 100 XDAC.</p>
                    <p className="register-info__mb">
                        Owner A owns 75%, owner B owns 25% stake in the company.
                    </p>
                    <p className="register-info__mb">
                        After the company is deployed, the initial investment will be available for
                        transfer or company expenses.</p>
                    <p className="register-info__title">
                        <span>WHY SHOULD I REGISTER MY COMPANY NOW</span>
                    </p>
                    <p className="register-info__mb">
                        Lock your company name and date when your company will be available.
                        Date of company creation will be the date when you registered your company.
                    </p>
                </div>
                <button className="register-info__btn" onClick={toggleRegisterInfo}>
                    Okay, I Understand
                </button>
            </div>
        )
    }
}
