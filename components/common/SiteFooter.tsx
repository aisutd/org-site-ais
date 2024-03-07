import Link from 'next/link';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import IconButton from '@mui/material/IconButton';

export default function SiteFooter() {
  return (
    <footer className="bg-ais-new-darker-blue text-ais-white pt-6 px-[20px] pb-[2rem]">
      <div className="border-white border-b-2 mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl flex justify-between py-4">
        <div className="grid grid-col-1 grid-flow-row py-2">
          <div className="flex gap-4 [cursor:pointer]">
            <img src="/images/Logos/ais_logo_white.png" className="h-[4rem] object-cover"/>
          </div>
        </div>
        <div>
          <img src="/images/Logos/demystify-ai.png" className="mb-4 h-[1.8rem] object-cover ml-auto"/>
          <ul>
            <div className='flex'>
              <div>
                <IconButton
                  onClick={() => {
                    window.open('/insta', '_blank');
                  }}
                >
                  <InstagramIcon className="h-6 text-ais-white" />
                </IconButton>
              </div>
              <div>
                <IconButton
                  onClick={() => {
                    window.open('/linkedin', '_blank');
                  }}
                >
                  <LinkedInIcon className="h-6 text-ais-white" />
                </IconButton>
              </div>
              <div>
                <IconButton
                  onClick={() => {
                    window.open('/yt', '_blank');
                  }}
                >
                  <YouTubeIcon className="h-6 text-ais-white" />
                </IconButton>
              </div>
              <div>
                <IconButton
                  onClick={() => {
                    window.open('/dc', '_blank');
                  }}
                >
                  <img src="/images/Logos/whitediscord.png" className="h-5 fill-white" />
                </IconButton>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}
