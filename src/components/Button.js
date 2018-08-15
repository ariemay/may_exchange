import React from 'react';
import Button from '@material-ui/core/Button';

const MayexButton = ({ whenPressed, children }) => {
    const { buttonStyle, textStyle } = style;
    return (
        <Button 
        onPress={whenPressed} 
        style={buttonStyle} 
        variant="contained" 
        color="primary" 
        >
            <text style={textStyle}>
                {children}
            </text>
        </Button>
    );
};

const style = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    }
};

export default MayexButton;