import { useState } from 'react';
import { Officer } from "../../lib/types";
import { Email, GitHub, LinkedIn, Language, FormatQuote } from '@mui/icons-material';
import Link from 'next/link';
import { useSpring, animated } from 'react-spring'

interface OfficerItemProps {
  officer: Officer;
}

function officerImage(officer: Officer) {
  const animatedProps = useSpring
  ({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360000deg)' },
    config: { duration: 1800000 }
  })

  const noStyle = useSpring
  ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 10 }
  })

  //const isPresident = officer.title === 'President'

  if (officer.image) {
    return (
      //<animated.div className="flex justify-center h-52" style={isPresident ? animatedProps : noStyle}>
      <div className="flex justify-center h-52 w-full">
        <img src={officer.image} className="rounded-full p-4 h-52 w-52 object-cover"/>
      </div>
      //</animated.div>
    );
  } else {
    return (
      //<animated.div className="flex justify-center h-52" style={isPresident ? animatedProps : noStyle}>
      <div className="flex justify-center h-52 w-full">
        <img src="/default_photo.svg" className="rounded-full p-4 object-cover" />
      </div>
      //</animated.div>
    );
  }
}

function emailLink(officer: Officer) {
  if (officer.email) {
    return (
      <div className="px-2">
        <button className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <a href={'mailto: ' + officer.email}>
            <Email color="primary" />
          </a>
        </button>
      </div>
    );
  }
}

function githubLink(officer: Officer) {
  if (officer.github) {
    let githubUsername = officer.github;
    
    // Check if the input is a complete GitHub URL
    if (githubUsername.includes('github.com/')) {
      // Extract username from the URL
      const parts = githubUsername.split('github.com/');
      githubUsername = parts[parts.length - 1]; // Take the last part after 'github.com/'
      
      // Remove any trailing slashes or other characters
      githubUsername = githubUsername.replace(/^\//, '').replace(/\/.*$/, '').replace(/[^\w-]/g, '');
    }
    
    // Construct GitHub URL
    const githubUrl = `https://github.com/${githubUsername}`;

    return (
      <div className="px-2">
        <button className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <a target="_blank" href={githubUrl} rel="noreferrer">
            <GitHub color="primary" fontSize="small" />
          </a>
        </button>
      </div>
    );
  }
}

function linkedInLink(officer: Officer) {
  if (officer.linkedInUrl) {
    let linkedInUsername = officer.linkedInUrl;
    
    // Check if the input is a complete LinkedIn URL
    if (linkedInUsername.includes('linkedin.com/in/')) {
      // Extract username from the URL
      const parts = linkedInUsername.split('linkedin.com/in/');
      linkedInUsername = parts[parts.length - 1]; // Take the last part after 'linkedin.com/in/'
      
      // Remove any trailing slashes or other characters
      linkedInUsername = linkedInUsername.replace(/^\//, '').replace(/\/.*$/, '').replace(/[^\w-]/g, '');
    }
    
    // Construct LinkedIn URL
    const linkedInUrl = `https://www.linkedin.com/in/${linkedInUsername}`;

    return (
      <div className="px-2">
        <button className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <a target="_blank" href={linkedInUrl} rel="noreferrer">
            <LinkedIn color="primary" />
          </a>
        </button>
      </div>
    );
  }
}

function personalLink(officer: Officer) {
  if (officer.personalWeb) {
    let personalUrl = officer.personalWeb;
    
    // Check if the input is a complete URL
    if (personalUrl.includes('https://')) {
      // Extract username from the URL
      const parts = personalUrl.split('https://');
      personalUrl = parts[parts.length - 1]; // Take the last part after 'https://'
      
      // Remove any trailing slashes or other characters
      personalUrl = personalUrl.replace(/^\//, '').replace(/[^.\w-]/g, '');
    }

    // Construct URL
    const finalUrl = `https://${personalUrl}`;

    return (
      <div className="px-2">
        <button className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <a target="_blank" href={finalUrl} rel="noreferrer">
            <Language color="primary" />
          </a>
        </button>
      </div>
    );
  }
}

function personalQuote(officer: Officer) {
  if (officer.quote) {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
      setIsHovering(true);
    };
    const handleMouseOut = () => {
      setIsHovering(false);
    };
    // eslint-disable-next-line react/prop-types
    const QuoteIcon = ({ handleMouseOver, handleMouseOut }) => {
      return (
        <div className="px-2">
          <button
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
            className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <FormatQuote color="primary" />
          </button>
        </div>
      );
    };
    const HoverCard = () => {
      return (
        <div className="absolute">
          <div className="bg-ais-light-gray shadow-xl p-4 rounded-xl">{officer.quote}</div>
        </div>
      );
    };
    return (
      <div>
        {/* Hover over this div to hide/show <HoverText /> */}
        <QuoteIcon handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} />
        {isHovering && <HoverCard />}
      </div>
    );
  }
}

/**
 * An item that showcases an officer
 */
export default function OfficerItem({ officer }: OfficerItemProps) {
  const { name, title } = officer;
  let directorAtt: string;
  if (title.includes('Director') || title.includes('President') || title.includes('Founder'))
    directorAtt = ' order-first ';
  else if (title.includes('VP')) directorAtt = ' order-1 ';
  else if (title.includes('Faculty')) directorAtt = ' order-last ';
  else directorAtt = 'order-2 ';
  const officerImg = officerImage(officer);
  const officerEmail = emailLink(officer);
  const officerGitHub = githubLink(officer);
  const officerLinkedIn = linkedInLink(officer);
  const officerPersonal = personalLink(officer);
  const officerQuote = personalQuote(officer);
  return (
    <div
      className={
        directorAtt +
        'h-80 w-64 transition duration-400 hover:shadow-lg hover:bg-ais-blue-gray rounded-xl  s'
      }
    >
      {officerImg}
      <div className="text-2xl font-bold text-center">{name}</div>
      <div className="">
        <div className="text-lg text-center font-light py-2">{title}</div>
      </div>
      <div className="flex justify-center pt-1">
        {officerEmail}
        {officerGitHub}
        {officerLinkedIn}
        {officerPersonal}
        {officerQuote}
      </div>
    </div>
  );
}
