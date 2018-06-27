import React from 'react';
import Step from './Step';
import './Steps.css';

class Steps extends React.Component {

    state = {
        steps: [
            {
                step: 1,
                name: 'Register a company',
            },
            {
                step: 2,
                name: 'Verify Email',
            },
            {
                step: 3,
                name: 'Initial Capital',
            },
            {
                step: 4,
                name: 'Confirmation',
            }
        ],
        active: this.props.active,
    };

    checkState = (step) => {
        return step.step < this.state.active
                ? 'complete'
                : ( step.step === this.state.active ? 'active' : 'disabled');
    };

    render() {
        return (
            <div className="container">
                <div className="row bs-wizard">
                    {
                        this.state.steps.map( (step, key) => <Step key={key} {...step} state={this.checkState(step)} />)
                    }
                </div>
            </div>
        )
    }
}

export default Steps