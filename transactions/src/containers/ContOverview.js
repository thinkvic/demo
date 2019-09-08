import { connect } from 'react-redux'
import Overview from '../components/Overview/Overview'


const mapStateToProps = state =>  {
    console.log('container overview', state);
    return  { balance: state.addressdata.data.final_balance }
}


const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps, mapDispatchToProps
)(Overview)