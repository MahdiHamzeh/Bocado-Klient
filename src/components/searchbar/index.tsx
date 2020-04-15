import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import Paper from '@material-ui/core/Paper';

import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/Button';

import SearchIcon from '@material-ui/icons/Search';



interface Props {
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}))

const Searchbar: React.FC<Props> = ({ onChange }) => {
    
    const classes = useStyles();
    
    return (
        <Paper 
        component="form" 
        className={classes.root}>
            <InputBase
            onChange={onChange}
            className={classes.input}
            placeholder="Search ingrediens"/>
            
            
            <IconButton 
            color="secondary"
            type="submit"
            className={classes.iconButton}>
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
}



export default Searchbar;