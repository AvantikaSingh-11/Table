/*Importing from particular module or a named parameter*/
import React from 'react'
import PropTypes from 'prop-types';
import {withStyles, makeStyles, useTheme} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Select from "@material-ui/core/Select";
import TableHead from '@material-ui/core/TableHead';
import MenuItem from "@material-ui/core/MenuItem";
import Progress from 'react-progressbar';
import LinearProgress from '@material-ui/core/LinearProgress';
import {lighten} from "@material-ui/core";

/*Applying styling by making arrow function*/
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(1),
    },
}));
/*styling of progress bar*/
const BorderLinearProgress = withStyles({
    root: {
        height: 10,
        backgroundColor: lighten('#ff6c5c', 0.5),
    },
    bar: {
        borderRadius: 20,
        backgroundColor: '#ff6c5c',
    },
})(LinearProgress);
const BorderLinearProgressone = withStyles({
    root: {
        height: 10,
        backgroundColor: lighten('#00FF00', 0.5),
    },
    bar: {
        borderRadius: 20,
        backgroundColor: '#00FF00',
    },
})(LinearProgress);

/*creating function TablePagination*/
function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}
TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function createData(id,desert, calories, fat, carbs, protein) {
    return {id,desert, calories, fat, carbs, protein };

}
/*Creating array of rows*/
const rows = [
    createData(0,'Frozen Yoghurt', null, 6.0, <BorderLinearProgress
        variant="determinate"
        color="secondary"
        value={50}
    />, null),
    createData(1,'Ice cream sandwich', null,16.4,<BorderLinearProgressone
        variant="determinate"
        color="secondary"
        value={60}
    />,null),
    createData(2,'Eclair',null ,18,<BorderLinearProgress
        variant="determinate"
        color="secondary"
        value={74}
    />,null),
    createData(3,'Cupcake',null,16,<BorderLinearProgressone
        variant="determinate"
        color="secondary"
        value={80}
    />,null),
    createData(4,'Gingerbread',null,24,<BorderLinearProgress
        variant="determinate"
        color="secondary"
        value={26}
    />,null),
    createData(5,'Ice cream sandwich',null,18,<BorderLinearProgressone
        variant="determinate"
        color="secondary"
        value={26}
    />,null),
    createData(6,'Eclair',null,20,<BorderLinearProgress
        variant="determinate"
        color="secondary"
        value={26}
    />,null),
    createData(7,'Ice cream sandwich',null,21,<BorderLinearProgressone
        variant="determinate"
        color="secondary"
        value={26}
    />,null),
]

const useStyles2 = makeStyles({
    table: {
        minWidth: 500,
    },
});

export default function CustomPaginationActionsTableTwo() {
    const classes = makeStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="custom pagination table">
                    <TableHead>{/*Creating Table Heading*/}
                    <TableRow>
                        <StyledTableCell>Deserts(100g serving)</StyledTableCell>
                        <StyledTableCell align="left">Calories</StyledTableCell>
                        <StyledTableCell align="left">fat(g)</StyledTableCell>
                        <StyledTableCell align="left">carbs(g)</StyledTableCell>
                        <StyledTableCell align="left">Protein(g)</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                    ).map((row) => (
                        <StyledTableRow key={row.desert}>
                            <TableCell component="th" scope="row">
                                {row.desert}
                            </TableCell>
                            <TableCell align="left">{row.calories}
                                <Select defaultValue="159" id="grouped-select">//creating dropdown
                                    <MenuItem value="159">
                                        <em>159</em>
                                    </MenuItem>
                                    <MenuItem value={2}>None</MenuItem>
                                    <MenuItem value={3}>237</MenuItem>
                                    <MenuItem value={4}>262</MenuItem>
                                    <MenuItem value={5}>3.7</MenuItem>
                                    <MenuItem value={6}>356</MenuItem>
                                </Select>
                            </TableCell>
                            <TableCell align="left">{row.fat}
                            </TableCell>

                            <TableCell align="left">{row.carbs}</TableCell>

                            <TableCell align="left">{row.protein}
                                <Select defaultValue="4.0" id="grouped-select">
                                    <MenuItem value="4.0">
                                        <em>4.0</em>
                                    </MenuItem>
                                    <MenuItem value={2}>None</MenuItem>
                                    <MenuItem value={3}>4.3</MenuItem>
                                    <MenuItem value={4}>6.0</MenuItem>
                                    <MenuItem value={5}>4.3</MenuItem>
                                    <MenuItem value={6}>3.9</MenuItem>
                                </Select></TableCell>
                        </StyledTableRow>

                    ))}
{/*Creating Style in table and colspan */}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}

                </TableBody>
                <TableFooter>
                    <TableRow>
                   <TablePagination
                            rowsPerPageOptions={[3, 5, 10, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}