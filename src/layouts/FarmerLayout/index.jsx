import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { FARMER_SECTIONS } from '../../constants';
import FarmerListItems from './farmerListItem';
import SidePanel from '../../components/SidePanel';
import ChatMemberList from '../../components/chat/memberList';
import ChatPage from '../../components/chat/chatPage';
import MyCrop from '../../pages/Farmer/MyCrops/myCrop';
import AddCrop from '../../pages/Farmer/MyCrops/addCrop';
import EditCrop from '../../pages/Farmer/MyCrops/editCrop';
import DeleteCrop from '../../pages/Farmer/MyCrops/deleteCrop';
import Buyers from '../../pages/Farmer/FindBuyers/buyers';
import FarmerTransactions from '../../pages/Farmer/Transactions';
import FindTransporter from '../../pages/Farmer/Transporter';
import FarmerSales from '../../pages/Farmer/Sales';
import FarmerOrders from '../../pages/Farmer/Orders/index';
import { FarmerCart } from '../../pages/Farmer/Cart';
import { FarmerReviews } from '../../pages/Farmer/Reviews';
import Dashboard from '../../pages/Farmer/Dashboard';
import SendRequests from '../../pages/Farmer/SendRequests';

const drawerWidth = 240;

export default function FarmerLayout() {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [openPane, setOpenPane] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const params = location.pathname.split('/');

    if (params.length === 4) {
      const subComponent = params[3];
      switch (subComponent) {
        case FARMER_SECTIONS.DASHBOARD:
          setOpenPane(<Dashboard/>);
          break;
        case FARMER_SECTIONS.FINDSELLER:
          setOpenPane(<Buyers/>);
          break;
        case FARMER_SECTIONS.FINDTRANSPORTER:
          setOpenPane(<FindTransporter/>);
          break;
        case FARMER_SECTIONS.CART:
          setOpenPane(<FarmerCart/>);
          break;
        case FARMER_SECTIONS.MYCROP:
          setOpenPane(<MyCrop/>);
          break;
        case FARMER_SECTIONS.ADDCROP:
          setOpenPane(<AddCrop/>);
          break;
        case FARMER_SECTIONS.EDITCROP:
          setOpenPane(<EditCrop/>);
          break;
        case FARMER_SECTIONS.DELETECROP:
          setOpenPane(<DeleteCrop/>);
          break;
        case FARMER_SECTIONS.SALES:
          setOpenPane(<FarmerSales/>);
          break;
        case FARMER_SECTIONS.ORDERS:
          setOpenPane(<FarmerOrders/>);
          break;
        case FARMER_SECTIONS.TRANSACTIONS:
          setOpenPane(<FarmerTransactions/>);
          break;
        case FARMER_SECTIONS.CHATMEMBERSLIST:
          setOpenPane(<ChatMemberList/>);
          break;
        case FARMER_SECTIONS.CHATPAGE:
          setOpenPane(<ChatPage/>);
          break;
        case FARMER_SECTIONS.REVIEWS:
          setOpenPane(<FarmerReviews/>);
          break;
        case FARMER_SECTIONS.SENDREQUESTS:
          setOpenPane(<SendRequests/>);
            break;
        default:
          
      }
    }
  }, [location]);

 

  return (
    <SidePanel list={<FarmerListItems/>} item2="Categories"  page={openPane}/>
  );
}
