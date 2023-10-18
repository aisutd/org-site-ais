import Link from 'next/link';
import { useRouter } from 'next/router';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import "@fontsource/montserrat";
import { AccountCircle } from '@mui/icons-material';
import { Menu, MenuItem, Switch } from '@mui/material';
import { useTheme } from 'next-themes';
import { useScroll, animated } from 'react-spring'

/**
 * The default header for the website.
 */
export default function SiteHeader() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const {theme, setTheme} = useTheme();
  const open = Boolean(anchorEl);
  const router = useRouter();

  function toggleDarkMode() {
    setTheme(theme === "dark" ? "light":"dark")
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleItemClick = (path) => {
    setAnchorEl(null);
    router.push(path);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="fixed z-20 backdrop-blur-sm">
      <AppbarBG transparencyThreshold="0.1" className=""/>
      <nav className="bg-none w-[100vw] h-[5rem] grid grid-cols-2 place-items-center md:grid-cols-3 2xl:grid-cols-4">
        <div onClick={() => {handleItemClick('/')}} className="flex gap-4 items-center [cursor:pointer]">
          <img src="images/ais_logo_black.png" className="h-[2rem] object-cover"/>
        </div>
        <div className="hidden 2xl:block"/>
        <div className="items-center md:col-span-2 md:flex md:gap-[1rem]">
          <div className="gap-[2rem] col-span-2 justify-self-start hidden md:flex lg:col-span-1 lg:justify-self-center text-ais-new-soft-black font-robotoMed text-[0.9rem] leading-normal">
            <NavButton handleItemClick={handleItemClick} link="/events" title="Events"/>
            <NavButton handleItemClick={handleItemClick} link="/about" title="About Us"/>
            <NavButton handleItemClick={handleItemClick} link="/team" title="Our Team"/>
            <NavButton handleItemClick={handleItemClick} link="/join" title="Join Us"/>
          </div>
          <div className="flex md:hidden">
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleMenu}
            >
              <img src="images/hamburger-icon.svg" className="h-[1.5rem] object-contain"/>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}
            >
                <MenuItem onClick={() => {handleItemClick('/events')}}>Events</MenuItem>
                <MenuItem onClick={() => {handleItemClick('/about')}}>About Us</MenuItem>
                <MenuItem onClick={() => {handleItemClick('/team')}}>Our Team</MenuItem>
                <MenuItem onClick={() => {handleItemClick('/join')}}>Join Us</MenuItem>
            
            </Menu>
          </div>
          <div className="hidden lg:block">
            <Box sx={{ display: { xs: 'none', sm: 'none', md: "flex" } }}>
              <IconButton onClick={() => {window.open("/insta", "_blank")}}>
                <InstagramIcon className='h-6 text-ais-new-med-blue'/>
              </IconButton>
              <IconButton onClick={() => {window.open("/linkedin", "_blank")}}>
                <LinkedInIcon className='h-6 text-ais-new-med-blue'/>
              </IconButton>
              <IconButton onClick={() => {window.open("/yt", "_blank")}}>
                <YouTubeIcon className='h-6 text-ais-new-med-blue'/>
              </IconButton>
              <IconButton onClick={() => {window.open("/dc", "_blank")}}>
                <img src="/discord.svg" className="h-5" />
              </IconButton>
            </Box>
          </div>
        </div>
      </nav>
    </div>
  );
}

function AppbarBG(props)
{
  const [opac, setOpac] = useState(0)

  const { scrollYProgress } = useScroll
  ({
    onChange: ({ value: { scrollYProgress } }) =>
    {
      if ( scrollYProgress < parseFloat(props.transparencyThreshold) )
      {
        setOpac( 1 / parseFloat(props.transparencyThreshold) * scrollYProgress)
      }
      else
      {
        setOpac(1)
      }
    }
  })

  return(
    <>
      {/* <animated.div className="absolute bg-ais-new-beige w-[100vw] h-[5rem] -z-10"
      style={{ opacity: opac }}/> */}
      <div className={`absolute bg-ais-new-beige opacity-80 -m-[1rem] w-[100vw] h-[6rem] -z-10`}/>
    </>
  )
}

function NavButton(props)
{
  return(
    <>
      <button
        onClick={() => props.handleItemClick(props.link)}
        className="
          h-[2rem] border-[2px] border-ais-new-med-blue rounded-[1rem] whitespace-nowrap px-[1rem]
          hover:bg-ais-new-med-blue hover:text-ais-new-beige"
      >
        {props.title}
      </button>
    </>
  );
}