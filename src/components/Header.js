import React from 'react';

const Header = (props) => {
    const { viewStyle, textStyle } = styles
    return (
        <div style={viewStyle}>
            <h1 style={ textStyle } >
                {props.judul}
            </h1>
            <h3 style={textStyle}>
                Made for Shopee Recruitment
                By: Arie May Wibowo
            </h3>
        </div>
    )
};

const styles = {
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black',
    },
    textStyle: {
        fontFamily: 'Pacifico',
        color: 'white',
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center'
    }
};

export default Header;