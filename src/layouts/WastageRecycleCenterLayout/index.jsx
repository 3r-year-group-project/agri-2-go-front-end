import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';
import {WASTAGE_RECYCLE_CENTER_SECTIONS } from '../../constants';
import WastageRecycleCenterListItems from './wastageRecycleCenterListItem';
import SidePanel from '../../components/SidePanel';


export default function WastageRecyclecenterLayout() {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [openPane, setOpenPane] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const params = location.pathname.split('/');

    if (params.length === 3) {
      const subComponent = params[2];
      switch (subComponent) {
        case WASTAGE_RECYCLE_CENTER_SECTIONS.DASHBOARD:
          setOpenPane(<LoginPage/>);
          break;
        case WASTAGE_RECYCLE_CENTER_SECTIONS.ORDERS:
          setOpenPane(<LoginPage/>);
          break;

        
        default:
          break;
      }
    }
  }, [location]);

 
  return (
    <SidePanel list={<WastageRecycleCenterListItems/>} item2="Categories" item3="Dashboard"/>
  );
}
