import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { DataStates } from "../values/data-stats";

class SummaryView extends Component {
    render() {

        const Item = (model) => {
            return (
                <TableRow key={ model.id }>
                    <TableCell>{ model.name }</TableCell>
                    <TableCell>{ model.date.toString() }</TableCell>
                    <TableCell>{ model.amount }</TableCell>
                </TableRow>
            )
        }

        switch (this.props.items) {
            case DataStates.Unloaded: return (<span>Hang Tight...</span>)
            case DataStates.Loading: return (<span>Loading...</span>)
            case DataStates.Error: return (<span>Error loading items!</span>)
            default: return (
                <Fragment>
                    <Table>
                        <TableBody>
                            { this.props.items.map(Item) }
                        </TableBody>
                    </Table>
                </Fragment>
            )
        }
    }
}

export default connect((state, props) => {
    return {
        items: state.items.records
    }
}) (SummaryView)