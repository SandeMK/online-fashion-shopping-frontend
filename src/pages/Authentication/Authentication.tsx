import { useMergeState } from "../../hooks/useMergeState";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Authentication: React.FC = () => {
    const [state, setState] = useMergeState({
        path: '/auth/signin',
    })

    return (
        <>
        {
            state.path === '/auth/signin' && <SignIn setState={setState} />
        }
        {
            state.path === '/auth/signup' && <SignUp setState={setState} />
        }
        </>
    )
}
export default Authentication;