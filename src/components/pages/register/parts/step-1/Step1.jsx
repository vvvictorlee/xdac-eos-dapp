import React, { Component, Fragment } from 'react';
import axios from 'axios';
import _ from 'lodash';

class Step1 extends Component {

    registerCompany = (e) => {
        e.preventDefault();

        const formData = _.transform(this.refs, (result, value, key) => result[key.trim()] = this.refs[key].value);

        // axios.post("http://localhost:3000/create-company", {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        // })

        console.log('-->', formData);

    };

    render() {
        return (
            <Fragment>
                <div className="steps">
                    <p className="step-title">Register your xDAC company</p>

                    <div className="xdac-company-form">
                        <form action="#" method="post" onSubmit={this.registerCompany}>
                            <div>
                                <input type="text" ref="name" name="name" placeholder="Company Name *" required
                                       maxLength="12"/>
                            </div>
                            <div className="site-group">
                                <span className="base-url">https://xdac.co/company/</span>
                                <input type="text" ref="link" name="link" placeholder="Company Link *" required
                                       maxLength="255"/>
                            </div>
                            <div>
                                <input type="email" ref="email" name="email" placeholder="Email *" required
                                       maxLength="100"/>
                            </div>
                            <input className="xdac-submit-form" type="submit" value="REGISTER"/>
                        </form>

                        <div className="xdac-register-terms">
                            By registering you agree to &nbsp;
                            <a href="https://www.xdac.co/terms/" target="_blank">Website Terms of Use</a> &nbsp;
                            and the &nbsp;
                            <a href="https://xdac.co/docs/xDAC-Token-Sale-Terms.pdf" target="_blank">
                                Token Sale Terms and Conditions
                            </a> &nbsp;
                            as well as the &nbsp;
                            <a href="https://www.xdac.co/privacy-policy/" target="_blank">Privacy Policy</a>
                        </div>

                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Step1