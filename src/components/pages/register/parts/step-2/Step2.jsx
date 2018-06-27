import React, { Component, Fragment } from 'react';

class Step1 extends Component {

    render() {
        return (
            <Fragment>
                <div className="steps">
                    <p className="step-title">Verify Email</p>
                    <div className="step-content">
                        <br/><br/>
                        <p className="step-title__subtitle">Please confirm your mail</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Step1