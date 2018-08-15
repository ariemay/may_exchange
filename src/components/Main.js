import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid'
import {InputData} from './InputData.js';
import axios from 'axios';
import CurrencyListing from './CurrencyListing.js';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';


class Main extends Component {
  state = ({
    base: null,
    currency: [],
    date: null,
    amount: 1.00,
    currencyList: [],
    currNameList: [],
    inputCurrName: '',
  });

  componentDidMount() {
    axios.get('https://exchangeratesapi.io/api/latest')
      .then(response => this.setState({
        currency: response.data.rates,
        date: response.data.date,
        currNameList: Object.keys(response.data.rates)
      }));
  }

  amountInputed(value) {
    this.setState({ amount: this.nilai })
  }

  onChangeNameInputed(newValue) {
    this.setState({
      amount: newValue
    });
    var rates = this.state.currency;
    var c = rates.USD * this.state.amount;
    this.setState({ test: c });
    console.log(rates)
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      currencyList: [...this.state.currencyList, this.state.inputCurrName],
    });
  };

  // Getting inputted data
  handleChange = inputCurrName => event => {
    this.setState({ inputCurrName: event.target.value, });
    console.log(this.state.currency['IDR']);
    console.log(this.state.inputCurrName)
  };


  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <InputData valueInputed={this.state.amount} changeValue={this.onChangeNameInputed.bind(this)}/>
          </Grid>
          <Grid item xs={9}>
            <div>Date updated: {this.state.date}</div>
            <div>
              <CurrencyListing
                name={this.state.currencyList}
                currValue={this.state.currency}
                amount={this.state.amount}
                // newValue={this.state.newValue}
              />
            </div>
          </Grid>
        </Grid>
        <Grid>
          <FormControl style={styles.formControl}>
            <InputLabel htmlFor="currency-native-helper">Currency:</InputLabel>
            <NativeSelect
              value={this.state.inputCurr}
              onChange={this.handleChange('currency')}
              input={<Input name="currency" id="currency-native-helper" />}
            >
              <option value="" />
              {this.state.currNameList.map((name, index) =>
                <option key={index} value={name}>{name}</option>
              )}
            </NativeSelect>
            <FormHelperText>Choose this additional currency.</FormHelperText>
          </FormControl>
          <button style={{ marginLeft: 10, fontSize: 14 }} onClick={this.onSubmit}>ADD</button>
        </Grid>
      </div>
    )
  }
};

const styles = {
  formControl: {
    minWidth: 120,
    marginTop: 20
  }
};

export default Main;