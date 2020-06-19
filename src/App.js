import React, {Component} from 'react'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

class App extends Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount(){
        const data = await fetchData();
        this.setState({data})
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({data: fetchedData, country})
    } 
    render(){
        const {data, country } = this.state
        return(
            <div className={styles.container}>
                <img src= 'https://www.begbies-traynorgroup.com/assets/uploads/Articles%20images/covid19-coronavirus.jpg' 
                className={styles.image} alt='COVID-19'/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }   
}


export default App;