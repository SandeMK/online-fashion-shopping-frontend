import { Style } from "../../types/style";
import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';

import { styles } from "../Dashboard/actions";


const StyleView: React.FC = () => {
  const styleId = window.location.pathname.split('/').pop();
  const style = styles.find((style: Style) => style.id === styleId);

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
            <span className="text-4xl font-medium">Fashion Stylists</span>
               <div className='py-4'>
               <div className='flex space-x-3 cursor-pointer rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark'>
                <img src='https://via.placeholder.com/150' alt='stylist' className='w-28 rounded-md bg-meta-2 dark:bg-meta-4' />
                <div className='flex-1'>
                    <h4 className='text-title-md font-bold text-black dark:text-white'>Stylist Name</h4>
                    <span className='text-sm font-medium'>Stylist Description</span>
                </div>
                <div>
                    <button className='bg-cyan-900 text-white px-4 py-2 rounded-md'>Chat Request</button>
                </div>
              </div>
               </div>
            </div>
           </div>
        </div>
    </DefaultLayout>
  );
};

export default StyleView;
