import React, { Component, Fragment } from 'react';
import './InvestorList.css'

class InvestorList extends Component {

    render() {
        let investors = this.props.investors || [];
        let companyCapital = investors.reduce( (sum, investor) => sum + parseFloat(investor.quantity), 0);
        let investorsHtml = '';
        if(investors.length) {
            investorsHtml = investors.map( (investor) => (
                <p className="owners__item">
                    {investor.quantity}
                    ({(parseFloat(investor.quantity)*100/companyCapital).toFixed(2)}%):&nbsp;
                    {investor.investor}
                </p>
            ))
        } else {
            investorsHtml = <Fragment>
                No owners yet<br />
                This company is avaliable to the public<br />
                Whoever deposits minimum initial capital first is the owner of this company.
            </Fragment>
        }
        return (
            <div className="owners">
                <p className="owners__title">Existing owners: </p>
                {investorsHtml}
            </div>
        );
    }
}

export default InvestorList