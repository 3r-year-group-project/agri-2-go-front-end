import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { GARDENER_SECTIONS } from '../../constants';
import GardenerListItems from './gardenerListItem';
import SidePanel from '../../components/SidePanel';
import ChatMemberList from '../../components/chat/memberList';
import ChatPage from '../../components/chat/chatPage';
import MyCrop from '../../pages/Gardener/MyCrops/myCrop';
import AddCrop from '../../pages/Gardener/MyCrops/addCrop';
import EditCrop from '../../pages/Gardener/MyCrops/editCrop';
import DeleteCrop from '../../pages/Gardener/MyCrops/deleteCrop';
import Sellers from '../../pages/Gardener/FindSellers/sellers';
import GardenerTransactions from '../../pages/Gardener/Transactions';
import GardenerOrders from '../../pages/Gardener/Orders';
import GardenerSales from '../../pages/Gardener/Sales';
import CartPage from '../../pages/Gardener/cart/gardnercart';
import GardenerReview from '../../pages/Gardener/Review/gardenerReview';



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
          setOpenPane(<CartPage/>);
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
          setOpenPane(<GardenerSales/>);
          break;
        case GARDENER_SECTIONS.ORDERS:
          setOpenPane(<GardenerOrders/>);
          break;
        case GARDENER_SECTIONS.TRANSACTIONS:
          setOpenPane(<GardenerTransactions/>);
          break;
        case GARDENER_SECTIONS.CHATMEMBERSLIST:
          setOpenPane(<ChatMemberList/>);
          break;
        case GARDENER_SECTIONS.CHATPAGE:
          setOpenPane(<ChatPage/>);
          break;
        case GARDENER_SECTIONS.REVIEWS:
          setOpenPane(<GardenerReview/>);
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