import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {WASTAGE_RECYCLE_CENTER_SECTIONS } from '../../constants';
import WastageRecycleCenterListItems from './wastageRecycleCenterListItem';
import SidePanel from '../../components/SidePanel';
import Item from '../../pages/WastageRecycleCenter/Item & ItemCardsLayout/Item';
import ItemDescription from '../../pages/WastageRecycleCenter/ItemDescriptionLayout/ItemDescription';
import OrderPage from '../../pages/WastageRecycleCenter/OderLayout/OrderPage';
import Wislist from '../../pages/WastageRecycleCenter/WisListLayout/Wislist';
import WastagePreference from '../../pages/WastageRecycleCenter/WastagePreferenceLayout/WastagePreference';
import Dashboard from '../../pages/WastageRecycleCenter/Dashboard';

export default function WastageRecyclecenterLayout() {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [openPane, setOpenPane] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const params = location.pathname.split('/');

    if (params.length === 4) {
      const subComponent = params[3];
      switch (subComponent) {
        case WASTAGE_RECYCLE_CENTER_SECTIONS.DASHBOARD:
          setOpenPane(<Dashboard/>);
          break;
        case WASTAGE_RECYCLE_CENTER_SECTIONS.FINDWASTAGE:
          setOpenPane(<Item/>);
          break;
        case WASTAGE_RECYCLE_CENTER_SECTIONS.ORDERS:
          setOpenPane(<OrderPage/>);
          break;
        case WASTAGE_RECYCLE_CENTER_SECTIONS.MYSCHEDULE:
          setOpenPane();
          break;
        case WASTAGE_RECYCLE_CENTER_SECTIONS.WASTAGEPREFERENCES:
          setOpenPane(<WastagePreference/>);
          break;
        case WASTAGE_RECYCLE_CENTER_SECTIONS.CHAT:
          setOpenPane();
          break;
        case WASTAGE_RECYCLE_CENTER_SECTIONS.WISHLIST:
          setOpenPane(<Wislist/>);
          break;
        case WASTAGE_RECYCLE_CENTER_SECTIONS.ITEMDESCRIPTION:
          setOpenPane(<ItemDescription/>);
          break;

        
        default:
          break;
      }
    }
  }, [location]);

 
  return (
    <SidePanel list={<WastageRecycleCenterListItems/>} item2="Categories" page={openPane}/>
  );
}
