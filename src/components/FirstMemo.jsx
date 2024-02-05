import React, { memo, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionUse } from '../redux/action';
import { Mycontext } from './ContextApi';


const GetCallUsememo = memo(function GetCallUsememo({ firstName, secondName }) {
    return(
        <div>
            <h2>{firstName}</h2>
            <h2>{secondName}</h2>
        </div>
    )
});

export default function FirstMemo() {
    const [firstState, handleState] = React.useState('');
    const [secondState, handleSecond] = React.useState('');
    const { viewDetails, setDetails } = useContext(Mycontext)
    const dispatch = useDispatch();
    const stateVal = useSelector(state => state.reducer);
    React.useEffect(() => {
        dispatch(actionUse(6))
    }, [])
    return (
        <div>
            <input value={firstState} onChange={(e) => { handleState(e.target.value); setDetails(e.target.value) }} />
            <input value={secondState} onChange={(e) => handleSecond(e.target.value)} />
            <GetCallUsememo firstName={firstState} />
            redux state: {stateVal?.count}
            contextAPi: {viewDetails}
        </div>
    )
}