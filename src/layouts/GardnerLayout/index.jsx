import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { GARDENER_SECTIONS } from '../../constants';
import GardenerListItems from './gardenerListItem';
import SidePanel from '../../components/SidePanel';
import ChatApp from '../../components/chat';

export default function GardenerLayout() {

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [openPane, setOpenPane] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const params = location.pathname.split('/');

    if (params.length === 3) {
      const subComponent = params[2];
      switch (subComponent) {
        case GARDENER_SECTIONS.DASHBOARD:
          setOpenPane();
          break;
        case GARDENER_SECTIONS.ORDERS:
          setOpenPane();
          break;
        case GARDENER_SECTIONS.CHAT:
          setOpenPane(<ChatApp/>);
          break;

        
        default:
          break;
      }
    }
  }, [location]);

  
  return (
    <SidePanel list={<GardenerListItems/>} item2="Categories" item3="Dashboard"/>
  );
}