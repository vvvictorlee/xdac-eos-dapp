import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';

import { RegisterInfo , RegisterInfoBtn } from '../register/parts/register-info/RegisterInfo';
import TransferList from '../register/parts/transfers/TransferList'
import InvestorList from '../../commons/investor/InvestorList'

class Investor extends Component {


    render() {



        let account = this.props.company.account;
        let transfers = this.props.company.transfers;
        let investors = this.props.company.investors;
        let companyInfo = this.props.company.companyinfo;
        console.log(this.props.company);
        // created
        // email
        // link
        // name

        return (
            <Fragment>
                <div className="wrapper-login-register">
                    <p className="step-title">Invest in company</p>

                    <div className="tabs-login-register">

                        <p className="step-title__subtitle"></p>
                        <p className="step-title__company"><span className="contract-company-name">{companyInfo.name}</span>, xDAC</p>

                        <div className="xdac-company-form">

                            <p className="before-pay-btn">Send capital in XDAC tokens to your company account<br/></p>

                            <p className="company-wallet contract-company-wallet">{ account.account_name}</p>

                            <div>
                                <input type="text" name="icapital" placeholder="Amount *" required
                                       maxLength="100"/>
                            </div>

                            <input className="xdac-submit-form btnPay" type="submit" value="PAY"/>


                            <RegisterInfoBtn />
                            <p className="cleos-block">You can use cleos to conduct transactions.</p>
                            <RegisterInfo />
                            <InvestorList investors={investors} />
                        </div>

                    </div>

                    <TransferList />

                </div>
            </Fragment>
        )
    }

}

const mapStateToProps = store =>  ({
    company: store.company
});

export default connect(mapStateToProps, null)(Investor);