import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { GARDENER_SECTIONS } from '../../constants';
import GardenerListItems from './gardenerListItem';
import SidePanel from '../../components/SidePanel';
import ChatApp from '../../components/chat';
import MyCrop from '../../pages/Gardener/MyCrops/myCrop';
import AddCrop from '../../pages/Gardener/MyCrops/addCrop';
import EditCrop from '../../pages/Gardener/MyCrops/editCrop';
import DeleteCrop from '../../pages/Gardener/MyCrops/deleteCrop';
import Sellers from '../../pages/Gardener/FindSellers/sellers';
import GardenerTransactions from '../../pages/Gardener/Transactions';

export default function GardenerLayout() {

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [openPane, setOpenPane] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const params = location.pathname.split('/');

    if (params.length === 4) {
      const subComponent = params[3];
      switch (subComponent) {
        case GARDENER_SECTIONS.DASHBOARD:
          setOpenPane();
          break;
        case GARDENER_SECTIONS.FINDSELLER:
          setOpenPane(<Sellers/>);
          break;
        case GARDENER_SECTIONS.CART:
          setOpenPane();
          break;
        case GARDENER_SECTIONS.MYCROP:
          setOpenPane(<MyCrop/>);
          break;
        case GARDENER_SECTIONS.ADDCROP:
          setOpenPane(<AddCrop/>);
          break;
        case GARDENER_SECTIONS.EDITCROP:
          setOpenPane(<EditCrop/>);
          break;
        case GARDENER_SECTIONS.DELETECROP:
          setOpenPane(<DeleteCrop/>);
          break;
        case GARDENER_SECTIONS.SALES:
          setOpenPane();
          break;
        case GARDENER_SECTIONS.ORDERS:
          setOpenPane();
          break;
        case GARDENER_SECTIONS.TRANSACTIONS:
          setOpenPane(<GardenerTransactions/>);
          break;
        case GARDENER_SECTIONS.CHAT:
          setOpenPane(<ChatApp/>);
          break;
        case GARDENER_SECTIONS.REVIEWS:
          setOpenPane();
          break;

        
        default:
          break;
      }
    }
  }, [location]);

  
  return (
    <SidePanel list={<GardenerListItems/>} item2="Categories"  page={openPane}/>
  );
}