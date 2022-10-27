import React, {useState} from 'react'
import { IconLogo, IconLogoMobile, Menu, MenuItem, MenuItemLink, NabvarContainer, NabvarWrapper } from '../Navbar.elements';
import { AiOutlinePoweroff } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
 const [click, setClick] = useState(false);

 const ChangeClick = () => {
    setClick(!click);
   
};
  return (
    <>
<NabvarContainer>
<NabvarWrapper>
    <IconLogo>
        <AiOutlinePoweroff size ={"2em"} />
         VZ STORE
    </IconLogo>

<IconLogoMobile onClick={() => ChangeClick()}>
    {click ? <FaTimes/> : <FaBars/>}
</IconLogoMobile>

<Menu click={click}>

    <MenuItem onClick={() => ChangeClick()}>
    <MenuItemLink>HOME</MenuItemLink>
    </MenuItem> 
    <MenuItem onClick={() => ChangeClick()}>
    <MenuItemLink>SERVICIOS</MenuItemLink>
    </MenuItem>
    <MenuItem onClick={() => ChangeClick()}>
    <MenuItemLink>PRODUCTOS</MenuItemLink>
    </MenuItem>
    <MenuItem onClick={() => ChangeClick()}>
    <MenuItemLink>NOSOTROS</MenuItemLink>
    </MenuItem>
    <MenuItem onClick={() => ChangeClick()}>
    <MenuItemLink>CONTACTANOS</MenuItemLink>
    </MenuItem>
</Menu>


</NabvarWrapper>
</NabvarContainer>
  </>
  );
};

export default Navbar;