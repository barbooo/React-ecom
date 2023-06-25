import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieIcon from '@mui/icons-material/Movie';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import LightModeIcon from '@mui/icons-material/LightMode';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Container = styled.div`
flex:1;
background-color:${({theme}) => theme.bg};
height:100vh;
color:${({theme})=>theme.text};
font_size:14px;
position:sticky;
top:0;
`
const Wraper= styled.div`
padding:15px 55px;
cursor:pointer;
`
const Items= styled.div`
display:flex;
gap:10px;
align-items:center;
padding:10px 10px;
cursor:pointer;
&:hover{
background-color:${theme =>theme.soft};
}
`
const Hr= styled.hr`
padding:5px 0px;
margin-top:5px;
color:${({theme})=> theme.textSoft};
height:0.5px;
`
const Cnx= styled.div`
font-size:14px;
padding:5px 20px;

`
const Titl =styled.h2`
font-size:14px;
margin-button:20px;
color:#aaaaaa;
padding: 5px 50px;
`
const Btn = styled.button`
padding:5px 14px;
margin-top:5px;
background-color:transparent;
border: 1px solid #3ea6ff;
color:#3ea6ff;
border-raduis:7px;
cursor:pointer;
display:flex;
gap:4px;
`
const Menu = ({darkmod, setdark}) => {
  return (
   
   <Container>
    <Link to ='/'>
    <Wraper>
      items
    </Wraper>
    </Link>
    <Items>
      <HomeIcon />
      Home
    </Items>
    <Link to ="trends">
    <Items>
      <ExploreIcon />
      Explorer
    </Items>
    </Link>
    <Link to ="subscription">
    <Items>
      <SubscriptionsIcon />
      Subscription
    </Items>
    </Link>
    <Hr/>
    <Items>
      <LibraryAddIcon />
      Library
    </Items>
    <Items>
      <HistoryIcon />
      History
    </Items>
    <Hr />
    <Cnx >
      Sign in to like videos,
      comments,and subscribe
      <Link to ="singin">
    <Btn >
      <AccountCircleIcon />
      Sign In</Btn>
      </Link>
    </Cnx>
    <Hr />
    <Titl>Best of Obra</Titl>
    <Items>
      <AudiotrackIcon />
      Music
    </Items>
    <Items>
      <SportsGymnasticsIcon />
      Sport
    </Items>
    <Items>
      <SportsEsportsIcon />
      Gaming
    </Items>
    <Items>
      <MovieIcon />
      Movies
    </Items>
    <Items>
      <NewspaperIcon />
      News
    </Items>
    <Items>
      <LiveTvIcon />
      Live
    </Items>
    <Hr />
    <Items>
      <SettingsIcon />
      Settings
    </Items>
    <Items>
      <FlagIcon />
      Report
    </Items>
    <Items>
      <HelpIcon />
      Help
    </Items>
    <Items onClick={()=>setdark(!darkmod)}>
      <LightModeIcon />
      LightMode
    </Items>
   </Container>
 

  )
}

export default Menu