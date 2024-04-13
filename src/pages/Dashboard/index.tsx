import React, { useEffect } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import StyleItem from '../../components/StyleItem';
import { useMergeState } from '../../hooks/useMergeState';
import { State } from './interfaces';
import { Actions } from './actions';
import { useAppContext } from '../../context';

const Dashboard: React.FC = () => {
  const {state: { user, stylesFilter } } = useAppContext()
  const [state, setState] = useMergeState<Partial<State>>({
    isLoading: false,
    styles: []
  })
  const { getStyles } = Actions(state, setState)

  useEffect(() => {
    if(user?.custom_token) {
      getStyles(user?.custom_token)
    }
  }, [])

  useEffect(() => {
    console.log('state', state)
  }, [state])

  const filter = () => {
    if(stylesFilter) {
      return state.styles.filter(
        style => style.name.toLowerCase().includes(stylesFilter.toLowerCase()) || 
        style.description.toLowerCase().includes(stylesFilter.toLowerCase()))
    } else {
      return state.styles
    }
  }


  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {
          filter().map((style, i) => {
            return <StyleItem key={`style-id-${style.id}-${i}`} style={style} />
          })
        }
  
      </div>

    </DefaultLayout>
  );
};

export default Dashboard;
