import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid, Table, TableHeaderRow, TableRowDetail, PagingPanel, TableFilterRow, } from '@devexpress/dx-react-grid-material-ui';
import {
    PagingState,
    IntegratedPaging,
    SortingState,
    IntegratedSorting,
    RowDetailState,
    FilteringState,
    IntegratedFiltering,
} from '@devexpress/dx-react-grid';

class DataTable extends Component {
    state = {
        alItemRows: [],
    }
    componentWillReceiveProps(props) {
        this.setState({
            alItemRows: props.alItemRows,
        }) //called when the component is receiving the new props
    }
    render() {
        const columns = [
            { name: 'id', title: 'ID' },
            { name: 'name', title: 'Name' },
            { name: 'nametype', title: 'Name Type' },
            { name: 'recclass', title: 'REC CLASS' },
            { name: 'year', title: 'YEAR' },
        ]; // initialising the Coloumn Headers
        const RowDetail = ({ row }) => (
            <div>
                Details for {' '} {row.name}{' '} of {' '} {row.nametype} has mass of {''} {row.mass}
                and rec latitude and longitude is {row.reclat}, {row.reclong} with Geo Location {''}
                {row.geolocation.latitude}, {row.geolocation.longitude}.
            </div> // display more details on click of a row.
        );
        return (
            <Paper>
                <Grid
                    rows={this.state.alItemRows} // pass the state of all Items present 
                    columns={columns}
                    > 
                    <PagingState
                        defaultCurrentPage={0} //default starting page is 0
                        pageSize={10} //set page limit to 10
                    />
                    <IntegratedPaging />
                    <FilteringState defaultFilters={[]} />
                    <IntegratedFiltering />
                    <SortingState defaultSorting={[{ columnName: 'name', direction: 'asc' }]} />
                    <IntegratedSorting /> 
                    <RowDetailState />
                    <Table />
                    <TableHeaderRow showSortingControls />
                    <TableRowDetail contentComponent={RowDetail} />
                    <PagingPanel />
                    <TableFilterRow />
                </Grid>
            </Paper>
        );
    }
}

export default DataTable;