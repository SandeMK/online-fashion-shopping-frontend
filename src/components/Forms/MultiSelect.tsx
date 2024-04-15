import React, { useState, useEffect, useRef } from 'react';
import { useMergeState } from '../../hooks/useMergeState';
import { Style } from '../../types/style';
import { styles } from '../../pages/Dashboard/actions';
import { useAppContext } from '../../context';

interface DropdownProps {
  id: string;
  updateStyles: (styles: string[]) => void;
}

export interface MultiSelectState {
  options: Style[]
  selected: string[]
}

const MultiSelect: React.FC<DropdownProps> = ({ id, updateStyles }) => {
  const { state: { user } } = useAppContext()
  const [show, setShow] = useState(false);
  const dropdownRef = useRef<any>(null);
  const trigger = useRef<any>(null);


  const [state, setState] = useMergeState({
    options: [...styles].filter((option) => !user.styles.includes(option.id)),
    selected: user.styles
  })

   const open = () => {
     setShow(true);
   };

   const isOpen = () => {
     return show === true;
   };

   const _select = (id: string) => {
    const options = state.options.filter(option => option.id !== id)
    setState({ selected: [...state.selected, id], options })
   }

  const _remove = (id: string) => {
      const selected = state.selected.filter((_id) => _id !== id)
      const option = styles.find((option) => option.id === id)
      setState({ selected, options: [...state.options, option] })
  }

  useEffect(() => {
    updateStyles(state.selected)
  }, [state.selected])

    useEffect(() => {
      const clickHandler = ({ target }: MouseEvent) => {
        if (!dropdownRef.current) return;
        if (
          !show ||
          dropdownRef.current.contains(target) ||
          trigger.current.contains(target)
        )
          return;
        setShow(false);
      };
      document.addEventListener('click', clickHandler);
      return () => document.removeEventListener('click', clickHandler);
    });

  return (
    <div className="relative z-50 p-4">
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        Fashion Styles
      </label>
      <div>
        <select className="hidden" id={id}>
        {
            state.options.map((option, index) => {
              return <option key={index} value={option.id} selected={state.selected.includes(option.id)}>{option.name}</option>
            })
         }
        </select>

        <div className="flex flex-col items-center">
          <input name="values" type="hidden" />
          <div className="relative z-20 inline-block w-full">
            <div className="relative flex flex-col items-center">
              <div ref={trigger} onClick={open} className="w-full">
                <div className="mb-2 flex rounded border border-stroke py-2 pl-3 pr-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                  <div className="flex flex-auto flex-wrap gap-3">
                    {state.selected.map((id) => {
                      const option = styles.find((option) => option.id === id)
                      return (
                        <div
                        key={id}
                        className="my-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray px-2.5 py-1.5 text-sm font-medium dark:border-strokedark dark:bg-white/30"
                      >
                        <div className="max-w-full flex-initial">
                          {option.name}
                        </div>
                        <div className="flex flex-auto flex-row-reverse">
                          <div
                            onClick={() => _remove(id)}
                            className="cursor-pointer pl-2 hover:text-danger"
                          >
                            <svg
                              className="fill-current"
                              role="button"
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      )
                    })}
                    {state.selected.length === 0 && (
                      <div className="flex-1">
                        <input
                          placeholder="Select an option"
                          className="h-full w-full appearance-none bg-transparent p-1 px-2 outline-none"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex w-8 items-center py-1 pl-1 pr-1">
                    <button
                      type="button"
                      onClick={open}
                      className="h-6 w-6 cursor-pointer outline-none focus:outline-none"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill="#637381"
                          ></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full px-4">
                <div
                  className={`max-h-select absolute top-full left-0 z-40 w-full overflow-y-auto rounded bg-white shadow dark:bg-form-input ${
                    isOpen() ? '' : 'hidden'
                  }`}
                  ref={dropdownRef}
                  onFocus={() => setShow(true)}
                  onBlur={() => setShow(false)}
                >
                  <div className="flex w-full flex-col">
                    {state.options.map((option, index) => (
                      <div key={index}>
                        <div
                          className="w-full cursor-pointer rounded-t border-b border-stroke hover:bg-primary/5 dark:border-form-strokedark"
                          onClick={(event) => _select(option.id)}
                        >
                          <div
                            className={`relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 ${
                              1==1 ? 'border-primary' : ''
                            }`}
                          >
                            <div className="flex w-full items-center">
                              <div className="mx-2 leading-6">
                                {option.name}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;
