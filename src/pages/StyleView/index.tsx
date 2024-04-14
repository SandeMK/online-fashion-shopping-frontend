import { Style } from "../../types/style";
import React, { useEffect } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';

import { styles } from "../Dashboard/actions";
import { User } from "../../types/user";
import { useMergeState } from "../../hooks/useMergeState";
import { Actions } from "./actions";
import { useAppContext } from "../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { StylistItem } from "./components/StylistItem";

export interface StyleViewState {
  data: {
    style: Style
    stylists: User[]
  }
  isLoading: boolean
}

const StyleView: React.FC = () => {
  const styleId = window.location.pathname.split('/').pop();
  const style = styles.find((style: Style) => style.id === styleId);
  const { state: { user } } = useAppContext()

  const [state, setState] = useMergeState<Partial<StyleViewState>>({
    isLoading: false,
    data: {
      style: style,
      stylists: []
    }
  })

  const { getStyle } = Actions(state, setState)
  const memoizedGetStyle = React.useCallback(getStyle, [getStyle])

  useEffect(() => {
    if(styleId) {
      memoizedGetStyle(styleId, user?.custom_token as string)
    }
  }, [styleId])

  return (
    <DefaultLayout>
        <div className='flex p-4 w-full bg'>
           <div className='flex flex-col w-2/6 py-2'>
            <img className='w-80 rounded-md' src={style.image_url} alt='style' />
            <div className="text-title-md font-bold text-black dark:text-white">
                <h1>{ style.name }</h1>
            </div>
       
            <p className="">{ style.description }</p>
         
           </div>
           <div className='w-4/6'>
           <div>
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-medium"> Fashion Stylists </span>
              <span className="text-md font-small"> (Stylists specializing on {style.name} style) </span>
            </div>
           
               <div className='flex flex-col  space-y-2 py-4'>
              {
                state.data.stylists.length === 0 ? (
                  <div className='flex items-center justify-center'>
                    <FontAwesomeIcon icon={faWarning} size='3x' />
                    <span className='text-lg font-medium'>No Stylists found for this category!</span>
                  </div>
                ) : (
                    state.data.stylists.map((stylist: User, i) => {
                      return (
                         <div key={`data.stylists.${i}`}>
                           <StylistItem stylist={stylist} />
                         </div>
                      )
                    })
                )
              }
               </div>
            </div>
           </div>
        </div>
    </DefaultLayout>
  );
};

export default StyleView;
