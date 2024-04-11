import { Style } from "../../types/style";
import { useNavigate } from 'react-router-dom';

export interface StyleItemProps {
  style?: Style
}
const StyleItem = ({ style }: StyleItemProps) => {
    const navigate = useNavigate();
    const gotToView = () => {
        navigate(`/style/${style?.id}`)
    }

  const truncate = (str: string, n: number) => {
    return str.length > n ? str.substr(0, n - 1) + '...' : str;
  }
  return (
    <div className="flex space-x-3 h-56 cursor-pointer rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark" 
    onClick={gotToView}>
   
    <img src={style?.image_url} alt="style" className="w-39 rounded-md bg-meta-2 dark:bg-meta-4" />

     <div className="flex-1">
       <h4 className="text-title-md font-bold text-black dark:text-white">
         {style?.name}
       </h4>
       <span className="text-sm font-medium">{truncate(style?.description, 110)}</span>
     </div>
    </div>
  );
}
export default StyleItem;