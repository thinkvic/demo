import { connect } from 'react-redux'
import Transactions from '../components/Transactions/Transactions'


const mapStateToProps = state => (
    { trans: state.addressdata.data.txs, addr: state.addressdata.data.address }
)

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps, mapDispatchToProps
)(Transactions)