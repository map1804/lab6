import { useDispatch } from 'react-redux'
import { actDoiTien } from '../action/doitien'

function Doitien(){
    const dispatch = useDispatch();
    return (
        <span>
            <span onClick = {()=>{dispatch(actDoiTien("vi"))}}>  VN  </span>
            <span onClick = {()=>{dispatch(actDoiTien("usd"))}}>  USD  </span>
        </span>
    )
}

export default Doitien