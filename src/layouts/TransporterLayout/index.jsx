import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import { TRANSPORTER_SECTIONS } from '../../constants';
import TransporterListItems from './transporterListItem';
import SidePanel from '../../components/SidePanel';

import MyVehicals from '../../pages/Transporter/My Vehicle/MyVehicals';


export default function TransporterLayout() {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [openPane, setOpenPane] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const params = location.pathname.split('/');

    if (params.length === 4) {
      const subComponent = params[3];
      switch (subComponent) {
        case TRANSPORTER_SECTIONS.DASHBOARD:
          setOpenPane();
          break;
        case TRANSPORTER_SECTIONS.TRANSPORTREQUESTS:
          setOpenPane();
          break;
        case TRANSPORTER_SECTIONS.MYVEHICLES:
            setOpenPane(<MyVehicals/>);
            break;
        case TRANSPORTER_SECTIONS.TRIPSCHEDULE:
          setOpenPane();
          break;
        case TRANSPORTER_SECTIONS.CHAT:
            setOpenPane();
            break;
        case TRANSPORTER_SECTIONS.TRANSACTIONS:
          setOpenPane();
          break;
        case TRANSPORTER_SECTIONS.REVIEWS:
          setOpenPane();
          break;

        
        default:
          break;
      }
    }
  }, [location]);

 

  return (
    <SidePanel list={<TransporterListItems/>} item2="Categories"  page={openPane}/>
  );
}
