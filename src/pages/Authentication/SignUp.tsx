import Logo from '../../images/logo/logo.svg';
import DefaultLayout from '../../layout/DefaultLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useMergeState } from '../../hooks/useMergeState';
import { Actions } from './actions';
import { useAppContext } from '../../context';

export interface SignUpState {
  display_name: string;
  email: string;
  phone_number: string;
  password: string;
  password_confirmation: string;
  user_type: string;
  isLoading: boolean;
}
const SignUp = ({ setState: update }) => {
  const { setState: setAppState} = useAppContext()
  const [state, setState] = useMergeState<Partial<SignUpState>>({
    isLoading: false,
  })
  const { validateAndSignUp } = Actions(setAppState)

  return (
    <DefaultLayout>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <div className="mb-5.5 inline-block">
                <img className="hidden dark:block" src={Logo} alt="Logo" />
                <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                  Online Fashion Shopping
                </h2>
              </div>
              <p className="2xl:px-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse.
              </p>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign Up to TailAdmin
              </h2>

              <form>
                <div className='flex space-x-4 mb-4'>
                  <div className='flex space-x-1'>
                    <input type="radio" id="client" name="drone" value={state.user_type} checked={state.user_type === 'client'} onClick={(_) => {
                      setState({user_type: 'client'})
                    }} />
                    <label>Client</label>
                  </div>

                  <div className='flex space-x-1'>
                    <input type="radio" id="stylist" name="drone" value={state.user_type} checked={state.user_type === 'stylist'} onClick={(_) => {
                      setState({user_type: 'stylist'})
                    }} />
                    <label>Stylist</label>
                  </div>
                  </div>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Name
                  </label>
                  <div className="relative">
                    <input
                    onChange={(e) => {
                      setState({display_name: e.target.value})
                    }}
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      onChange={(e) => {
                        setState({email: e.target.value})
                      }}
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                     <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      onChange={(e) => {
                        setState({phone_number: e.target.value})
                      }}
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                     <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                  </div>
                </div>

             

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      onChange={(e) => {
                        setState({password: e.target.value})
                      }}
                      type="password"
                      placeholder="Enter your password"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                     <FontAwesomeIcon icon={faLock} />
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Re-type Password
                  </label>
                  <div className="relative">
                    <input
                      onChange={(e) => {
                        setState({password_confirmation: e.target.value})
                      }}
                      type="password"
                      placeholder="Re-enter your password"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                    <FontAwesomeIcon icon={faLock} />
                    </span>
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault()
                      validateAndSignUp(state, setState)
                    }}
                    disabled={state.isLoading}
                    value={state.isLoading ? 'Loading...' : 'Sign Up'}
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>

                <div className="mt-6 text-center">
                  <p>
                    Already have an account?{' '}
                    <span className="text-primary" onClick={() => {
                     update({path: "/auth/signin"})
                    }}>
                      Sign in
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignUp;
