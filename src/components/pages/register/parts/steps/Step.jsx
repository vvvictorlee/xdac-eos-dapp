import React from 'react';

class Step extends React.Component {
    render() {
        let wrapClassName = "col-xs-12 col-sm-3 col-md-3 bs-wizard-step " + this.props.state;
        return (
            <div className={wrapClassName}>
                <div className="text-center bs-wizard-stepnum">{this.props.name} {}</div>
                <div className="progress">
                    <div className="progress-bar"></div>
                </div>
                <span className="bs-wizard-dot"></span>
            </div>
        )
    }
}

export default Step