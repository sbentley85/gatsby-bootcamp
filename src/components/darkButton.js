import React from 'react';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Fab from '@material-ui/core/Fab';

const DarkButton = (props) => {
    // style rules
    const style = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
        backgroundColor: 'black',

    };

    // If the `onClick` prop exists, call it with 'dark'
    const handleClick = () => props.onClick && props.onClick('dark');

    return (
        <Fab  style={style} color="primary" aria-label="dark-mode">
            <Brightness2Icon className="theme-toggle" onClick={handleClick}  />
        </Fab>
    );
};

export default DarkButton;