import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User } from "../../../../types/user";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Actions } from "./actions";
import { useAppContext } from "../../../../context";
import { useMergeState } from "../../../../hooks/useMergeState";

export interface StylistItemState {
    isLoading: boolean
}

export const StylistItem = ({ stylist }: { stylist: User}) => {
    const { state: { user }} = useAppContext()
    const navigate = useNavigate()

    const [state, setState] = useMergeState<Partial<StylistItemState>>({
        isLoading: false
    })
    const { chatRequest } = Actions(navigate, setState)


    return (
        <div className='flex space-x-3 cursor-pointer rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark'>
            <FontAwesomeIcon icon={faUserAlt} size={'3x'} className='h-20 rounded-md  dark:bg-meta-4' />
            <div className='flex-1'>
                <h4 className='text-title-sm font-bold text-black dark:text-white'>{ stylist.display_name }</h4>
                <span className='text-sm font-medium'>{stylist.bio}</span>
            </div>
            <div>
                <button
                    disabled={state.isLoading}
                    onClick={() => chatRequest(user.id, stylist.id, user.custom_token)}
                    className='bg-cyan-900 text-white px-4 py-2 rounded-md'>
                        {state.isLoading ? 'Loading...' : 'Request Chat'}
                </button>
            </div>
        </div>
    )
}