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
    const { inputStyle, textStyle, cardStyle } = styles;
    return (
      <Card style={cardStyle}>
        <CardContent>
          <h4>
            USD (United States Dollars)
          </h4>
          <div>
            <span style={textStyle}>USD</span>
            <span style={inputStyle}>
                            <input
                              style={{ height: 20, fontSize: 14 }}
                              type="number"
                              value={this.state.amount}
                              onChange={(event) => this.onHandleChange(event)}
                            />
                        </span>
            <button
              style={{ fontSize: 14, marginLeft: 10 }}
              onClick={this.onChangeValue.bind(this)}>SUBMIT</button>
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
};