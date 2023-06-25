import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import styled from"styled-components";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import DownloadingIcon from '@mui/icons-material/Downloading';
import Comentairs from '../Comentairs';
import Card from '../Card';

const Container = styled.div`
display:flex;`
const Contn = styled.div`
flex:5;`
const Videowraper = styled.div``
const Title = styled.h1`
font-size:13px;
font-weight:500;
margin :15px 0px;
color:${({theme})=>theme.text};
`
const Dtails = styled.div`
display:flex;
aligm-items-center;
justify-content:space-between;

`
const Info = styled.span`
font-size:13px;
font-weight:500;
margin :15px 0px;
color:${({theme})=>theme.text};`
const Btn = styled.button`
display:flex;
gap:5px;
color:${({theme})=>theme.text};
`
const Recomand = styled.div`
flex:2;
`
const Chanel = styled.div`
display:flex;
justify-content:space-between;
`
const ChanelInfo = styled.div`
display:flex;
`
const Img = styled.img`
height:35px;
width:35px;
border-radius:50%;
`
const Chaneldetails = styled.div`
display:flex;
flex-direction:column;
gap:10px;
`
const Chanlname = styled.span`
font-size:12px;
font-weight:400;
margin:0px 5px;
color:${({theme})=>theme.text};
`
const Canlcounter = styled.span`
color:${({theme})=>theme.text};`
const Desch = styled.p`
font-size:14px;
color:${({theme})=>theme.text};`

const Subcribe = styled.button`
background-color:#cc1a00;
color:white;
font-weight:300;
font-size:13px;
margin :0px 5px;
width:120px;
height:40px;
border:none;
border-radius:3px;
`

const Video = () => {
  return (
	<Container>
		<Contn>
      <Videowraper>
        <iframe
        width="100%"
        height ="600px"
        title="Youtube video player"
        frameBorder="0"
        allowFullScreen
        src='https/www.youtube.com/embed/k3Vfj-e1Ma4'
        >
        </iframe>
      </Videowraper>
      <Title>Test Info</Title>
      <Dtails>
        <Info>5,654,123 *Dec 20,2022</Info>
        <Btn><ThumbUpIcon /> 1000</Btn>
        <Btn><ThumbDownIcon /> 50</Btn>
        <Btn><ShareIcon /> Share</Btn>
        <Btn><DownloadingIcon /> Download</Btn>
      </Dtails>
      <Chanel>
        <ChanelInfo>
          <Img></Img>
          <Chaneldetails>
          <Chanlname>Obra</Chanlname>
          <Canlcounter>500k Subscribers</Canlcounter>
          <Desch>hello this video for alll sub for more understanding how this 
            mecanisme work perfectly and awesome poeple has lefmlwemfwemf';wefl;,we;'lf;'wfmlwmfklewmfklwmlkmelkflknglknglkmrklgmlkrmlkm
            ;lme,rg;lmer;lgmeklrgmklermlekrmgeklrgmlkermgklergmelkrgmelrkgmle
          </Desch>
          </Chaneldetails>
        </ChanelInfo>
          <Subcribe>Subcribe</Subcribe>
      </Chanel>
      <Comentairs />
    </Contn>
		<Recomand>
      <Card type = "sm"/>
      <Card type = "sm"/>
      <Card type = "sm"/>
      <Card type = "sm"/>
      <Card type = "sm"/>
      <Card type = "sm"/>
      <Card type = "sm"/>
      <Card type = "sm"/>
      <Card type = "sm"/>
      <Card type = "sm"/>
      <Card type = "sm"/>
      <Card type = "sm"/>
      <Card type = "sm"/>
    </Recomand>
	</Container>
  )
}

export default Video