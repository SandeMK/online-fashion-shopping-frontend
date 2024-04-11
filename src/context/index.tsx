
import { createContext, useContext, useEffect, useMemo } from 'react'
import { IAppState } from './interfaces'
import { useMergeState } from '../hooks/useMergeState'
import { Actions } from './actions'

const defaultState: IAppState = {
  user: null,
  custom_token: null,
  isAuthenticated: false,
}

export const AppContext = createContext(null)

export const AppContextProvider = ({ children }) => {
  const [state, setState] = useMergeState<Partial<IAppState>>(defaultState)
  const { fromLocalStorage, toLocalStorage } = Actions(state, setState)

  const memoizedProviderValue = useMemo(() => ({ setState, state }), [state])

  useEffect(() => {
    toLocalStorage()
  }, [state])

  useEffect(() => {
    fromLocalStorage()
  }, [])

  return (
    <AppContext.Provider value={memoizedProviderValue}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext) as {
    setState: (value: Partial<IAppState>) => void
    state: IAppState
  }
}
