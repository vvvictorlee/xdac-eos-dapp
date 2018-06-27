import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import * as actions from '../../../store/company/actions';
import { backendUrl } from '../../../common/eos'

import Investor from '../investor/Investor';
import Register from '../register/Register';

class Main extends Component {

    loadCompany = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const wallet = urlParams.get('token');
        return wallet
            ? await axios.get(backendUrl + 'company/' + wallet).then( response => response.data.data)
            : {};
    };

    componentDidMount() {
        this.loadCompany().then( company => {
            this.props.storeSetCompany(company);
        });

        this.props.getCompanySummaryInfo();
    }

    render() {
        return (
            <Fragment>
                { Object.keys(this.props.company).length === 0 ? <Register /> : <Investor /> }
            </Fragment>
        )
    }
}

const mapStateToProps = store =>({
   company: store.company
});

const mapDispatchToProps = dispatch => ({
    storeSetCompany: (response) => dispatch(actions.setCompany(response)),
    getCompanySummaryInfo: () => dispatch(actions.getCompanySummaryInfo())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main)