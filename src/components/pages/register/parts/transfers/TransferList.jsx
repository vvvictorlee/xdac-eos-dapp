import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import ReactTable from "react-table";
import 'react-table/react-table.css';

import * as transferActions from "../../../../../store/transfer/actions";

import './TransferList.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

class TransferList extends Component {

    handleApprove = async (e) => {
        let id = e.target.attributes.getNamedItem("data-id").value;
        this.props.approve(id);
    };

    handleRefund = async (e) => {
        let id = e.target.attributes.getNamedItem("data-id").value;
        console.log(e);
        // this.props.refund(id);
    };

    render() {
        const transfers = this.props.transfers || [];
        const columns = [
            {
                Header: 'ID',
                accessor: 'id'
            },
            {
                Header: 'INVESTOR',
                accessor: 'investor'
            },
            {
                Header: 'AMOUNT',
                accessor: 'quantity'
            },
            {
                Header: '',
                Cell: props => {
                    console.log(props.original);
                    return (!props.original.approved && !props.original.refunded)
                        ? <Fragment>
                            <button onClick={this.handleApprove}
                                    className="transaction__btn transaction__approve"
                                    data-id={props.original.id}>
                                <span className="transaction__btn-text">Approve</span>
                                <FontAwesomeIcon icon={faCheckCircle} className="transaction__btn-icon" />
                            </button>
                            <button onClick={this.handleRefund}
                                    className="transaction__btn transaction__refund"
                                    data-id={props.original.id}>
                                <span className="transaction__btn-text">Refund</span>
                                <FontAwesomeIcon icon={faTimesCircle} className="transaction__btn-icon" />
                            </button>
                        </Fragment>
                        : props.original.refunded ? 'Refunded' : ''
                }
            },
        ];

        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="transactions">
                                <div className="transactions__title">Transfers</div>
                                <div className="transactions__table">
                                    <ReactTable
                                        data={transfers}
                                        columns={columns}
                                        pageSizeOptions={[5, 10, 20]}
                                        defaultPageSize={10}
                                        sortable={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    transfers: state.transfers
});

const mapDispatchToProps = dispatch => ({
    approve: id => dispatch(transferActions.approve(id)),
    refund: id => dispatch(transferActions.refund(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TransferList);