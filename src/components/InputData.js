import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export class InputData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: props.valueInputed
        };
    }

    onChangeValue() {
        this.props.changeValue(this.state.amount);
    }

    onHandleChange(event) {
        this.setState({
            amount: event.target.value
        });
    }

    render() {
        const { inputStyle, textStyle, cardStyle } = styles
        return (
            <Card style={cardStyle}>
                <CardContent>
                    <h4>
                        USD (United States Dollars)
                    </h4>
                    <div>
                        <span style={textStyle}>USD</span>
                        <span style={inputStyle}>
                            <input type="number" value={this.state.amount} onChange={(event) => this.onHandleChange(event)} />
                        </span>
                    <button onClick={this.onChangeValue.bind(this)}>ENTER</button>
                    </div>
                </CardContent>
            </Card>
        )
    }
}
const styles = {
    inputStyle: {
        marginLeft: 20
    },
    textStyle: {
        fontSize: 12,
    },
    cardStyle: {
        height: 150,
        backgroundColor: 'yellow'
    }
}