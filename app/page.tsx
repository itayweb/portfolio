import NavBar from "@/components/navbar/navbar";
import { Box, Button, Typography } from "@mui/material";
import './globals.css'
import Image from "next/image";
import EastIcon from '@mui/icons-material/East';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {
  return (
    // TODO: reponsive design
    <Box sx={{
      backgroundColor: 'rgba(37,159,248,0.31)',
      paddingTop: '2rem',
      backgroundImage: 'url("/noise.png")',
    }}>
      <NavBar />
      <Box sx={{
        height: '100vh',
      }} id="home">
        <Image src="/profilepic.jpeg" alt="profilePic" width='300' height='300' style={{
          borderRadius: '50%',
          border: '0.3rem solid white',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '5vh'
        }} />
        <Typography sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '2.5vh',
          // TODO: Change font family to apply automatically in every component
          fontFamily: 'Nunito, sans-serif',
        }}>MY NAME IS</Typography>
        <Typography sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '8rem',
          fontFamily: 'Nunito, sans-serif'
        }}>Itay Adler</Typography>
        <Typography sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Nunito, sans-serif',
        }}>AND I&apos;M A</Typography>
        <Typography sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '3rem',
          fontFamily: 'Nunito, sans-serif'
        }}>Full-Stack Developer And BI Developer</Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2.5vw',
          marginTop: '3vh'
        }}>
          <Button sx={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '3rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ":hover": {
              backgroundColor: 'black',
              scale: '1.1'
            }
          }}>
            Contact me here
            <EastIcon sx={{
              marginLeft: '1vw',
            }} />
          </Button>
          <Button sx={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '3rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ":hover": {
              backgroundColor: 'white',
              scale: '1.1'
            }
          }}>
            Download CV
            <DownloadIcon fontSize="small" sx={{
            marginLeft: '1vw'
            }} />
          </Button>
          {/*TODO: make button circle like design*/}
          <Button sx={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '4rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ":hover": {
              backgroundColor: 'white',
              scale: '1.1'
            },
            // padding: '0'
          }} href="https://www.linkedin.com/in/itay-adler/">
            <LinkedInIcon fontSize="small" />
          </Button>
          {/*TODO: make button circle like design*/}
          <Button sx={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '4rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ":hover": {
              backgroundColor: 'white',
              scale: '1.1'
            },
            // padding: '0'
          }} href="https://github.com/itayweb">
            <GitHubIcon fontSize="small" />
          </Button>
        </Box>
      </Box>
      <Box sx={{
        height: '100vh',
        marginTop: '5rem'
      }} id="about">
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15rem'
        }}>
          <Box>
            <Typography sx={{
              display: 'flex',
              justifyContent: 'start',
              fontSize: '8rem',
              fontFamily: 'Nunito, sans-serif',
              marginLeft: '3rem'
            }}>
              About Me
            </Typography>
            <Typography sx={{
              fontFamily: 'Nunito, sans-serif',
              display: 'flex',
              // TODO: center text acording to 'About Me' text not to page
              justifyContent: 'center',
              fontSize: '2rem',
              marginLeft: '3rem'
            }}>
              I’m a Full-Stack Developer and BI Developer <br/> with exprience from several <br/> projects and both big firm such as <br/> IDF and mid-size start-up such as <br/> RavenDB.
            </Typography>
          </Box>
          <Box sx={{
            // TODO: Fix inplace sticker like css
            '&::before': {
              // content: '""',
              // height: '25px',
              // width: '80px',
              // backgroundColor: 'rgba(255, 255, 255, .3)',
              // position: 'absolute',
              // top: '-5px',
              // left: '-5px',
              // transform: 'translateX(-30%) translateY(10%) rotate(-45deg)',
              // boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.4)',
              background: 'rgba(255,255,235,0.6)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
              content: '""',
              display: 'block',
              height: '30px',
              position: 'absolute',
              margin: 'auto',
              width: '150px',
              // left: '0',
              // top: '10px',
              transform: 'rotate(-35deg)',
            },
          }}>
            <Image src="/profilepic2.jpeg" alt="profilePic2" width='510' height='485' style={{
              display: 'flex',
              flexDirection: 'row',
              borderTop: '2rem solid #D9D9D9',
              borderLeft: '2rem solid #D9D9D9',
              borderRight: '2rem solid #D9D9D9',
              borderBottom: '6rem solid #D9D9D9',
              // TODO: Fix border radius applying only to border without image
              // borderRadius: '5%',
              boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
            }} />
          </Box>
        </Box>
      </Box>
      <Box sx={{
        height: '100vh',
        // marginTop: '5rem'
      }} id="projects">
        <Box sx={{
          position: 'absolute',
          // top: '3.5%',
          width: '100%',
          rotate: '-9deg',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(0, 0, 0, 0.21)',
          TextStroke: '1px rgba(0, 0, 0, 0.21)',
          zIndex: '-1'
        }}>
          <Typography sx={{
            display: 'block',
            lineHeight: '0.8',
            fontSize: '8rem',
            fontWeight: '700',
          }}>
            PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
          </Typography>
          <Typography sx={{
            display: 'block',
            lineHeight: '0.8',
            fontSize: '8rem',
            fontWeight: '700',
          }}>
            PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15rem'
        }}>
          <Box>
            <Typography sx={{
              display: 'flex',
              justifyContent: 'start',
              fontSize: '6rem',
              fontFamily: 'Nunito, sans-serif',
              marginLeft: '3rem'
            }}>
              Huffman
            </Typography>
            <Typography sx={{ // TODO: Center text according to design
              display: 'flex',
              justifyContent: 'start',
              fontSize: '6rem',
              fontFamily: 'Nunito, sans-serif',
              // marginLeft: '3rem'
            }}>
              Encoding / Decoding
            </Typography>
            <Typography sx={{
              fontFamily: 'Nunito, sans-serif',
              display: 'flex',
              // TODO: center text acording to project name text not to page
              justifyContent: 'center',
              fontSize: '2rem',
              marginLeft: '3rem'
            }}>
              I’m a Full-Stack Developer and BI Developer <br/> with exprience from several <br/> projects and both big firm such as <br/> IDF and mid-size start-up such as <br/> RavenDB.
            </Typography>
          </Box>
          <Box sx={{
            // TODO: Fix inplace sticker like css
            '&::before': {
              // content: '""',
              // height: '25px',
              // width: '80px',
              // backgroundColor: 'rgba(255, 255, 255, .3)',
              // position: 'absolute',
              // top: '-5px',
              // left: '-5px',
              // transform: 'translateX(-30%) translateY(10%) rotate(-45deg)',
              // boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.4)',
              background: 'rgba(255,255,235,0.6)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
              content: '""',
              display: 'block',
              height: '30px',
              position: 'absolute',
              margin: 'auto',
              width: '150px',
              // left: '0',
              // top: '10px',
              transform: 'rotate(-35deg)',
            },
          }}>
            <Image src="/profilepic2.jpeg" alt="profilePic2" width='510' height='485' style={{
              display: 'flex',
              flexDirection: 'row',
              borderTop: '2rem solid #D9D9D9',
              borderLeft: '2rem solid #D9D9D9',
              borderRight: '2rem solid #D9D9D9',
              borderBottom: '6rem solid #D9D9D9',
              // TODO: Fix border radius applying only to border without image
              // borderRadius: '5%',
              boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
            }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;