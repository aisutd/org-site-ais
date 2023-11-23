import Link from 'next/link';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import IconButton from '@mui/material/IconButton';

export default function SiteFooterAlt() {
  return (
    <footer className="bg-ais-black text-white pt-6">
      <div className="border-white border-b-2 mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl flex justify-between py-4">
        <div className="grid grid-col-1 grid-flow-row py-2">
          <div className="flex gap-4 [cursor:pointer]">
            <img src="images/ais_logo_white.png" className="h-[4rem] object-cover"/>
          </div>
        </div>
        <div>
          <img src="images/demystify-ai.png" className="mb-4 h-[1.8rem] object-cover ml-auto"/>
          <ul>
            <div className='flex'>
              <div>
                <IconButton
                  onClick={() => {
                    window.open('/insta', '_blank');
                  }}
                >
                  <InstagramIcon className="h-6 text-white" />
                </IconButton>
              </div>
              <div>
                <IconButton
                  onClick={() => {
                    window.open('/linkedin', '_blank');
                  }}
                >
                  <LinkedInIcon className="h-6 text-white" />
                </IconButton>
              </div>
              <div>
                <IconButton
                  onClick={() => {
                    window.open('/yt', '_blank');
                  }}
                >
                  <YouTubeIcon className="h-6 text-white" />
                </IconButton>
              </div>
              <div>
                <IconButton
                  onClick={() => {
                    window.open('/dc', '_blank');
                  }}
                >
                  <img src="/discord-mark-white.svg" className="h-5 fill-white" />
                </IconButton>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="text-center pt-5 pb-10 text-xs">© Copyright 2021 AIS UTD, All Rights Reserved</div>
    </footer>
  );
}
