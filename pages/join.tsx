import Head from 'next/head';
import Link from 'next/link';
import Subscribe from '../components/join/Subscribe';
import DescriptionIcon from '@mui/icons-material/Description';
import * as React from 'react';
import SiteFooter from '../components/common/SiteFooter';

export const JoinPage = () => {
  {/*for the appbar*/}

  const handleSignUpClick = (secName) => {
    document.getElementById(secName).scrollIntoView()
  };

  return (
    <main className="inline-flex flex-col items-start relative bg-beige w-[100%]">
      <div className="flex bg-[#fff8f3] items-center justify-center gap-[5%] pt-[10rem] pb-[6rem] relative w-[100%] z-0">
        <div className="flex-col items-center gap-[24px] flex relative w-[80%] md:w-[45%]">
          <p className="font-bold text-5xl text-center md:text-start">
            UNLOCK THE BENEFITS OF JOINING AIS
          </p>
          <p className="relative self-stretch font-text-2 font-[number:var(--text-2-font-weight)] text-[#4f4f4f] text-[length:var(--text-2-font-size)] tracking-[var(--text-2-letter-spacing)] leading-[var(--text-2-line-height)] [font-style:var(--text-2-font-style)]">
            By joining AIS, you gain access to valuable resources, including mentorship opportunities, networking events, engaging workshops, and an amazing community of like-minded people with an interest and passion for artificial intelligence.
          </p>
          <div className="flex items-start gap-[24px] px-0 py-[8px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-[8px] relative flex-1 grow">
              <div className="relative self-stretch mt-[-1.00px] font-bold">
                Access
              </div>
              <p className="relative self-stretch font-text-2 font-[number:var(--text-2-font-weight)] text-[#4f4f4f] text-[length:var(--text-2-font-size)] tracking-[var(--text-2-letter-spacing)] leading-[var(--text-2-line-height)] [font-style:var(--text-2-font-style)]">
                Tap into a wealth of resources, including AI projects, research papers, and industry insights.
              </p>
            </div>
            <div className="flex flex-col items-start gap-[8px] relative flex-1 grow">
              <div className="relative self-stretch mt-[-1.00px] font-bold">
                Mentorship
              </div>
              <p className="relative self-stretch font-text-2 font-[number:var(--text-2-font-weight)] text-[#4f4f4f] text-[length:var(--text-2-font-size)] tracking-[var(--text-2-letter-spacing)] leading-[var(--text-2-line-height)] [font-style:var(--text-2-font-style)]">
                Get guidance and support from experienced AI professionals through our mentorship program.
              </p>
            </div>
          </div>
          <div className="relative w-[162px] h-[48px] bg-[#3E6EFF] rounded-[57px] mb-10 [cursor:pointer]"
            onClick={() => {handleSignUpClick('apps')}}
          >
            <div className="bg-[#3E6EFF] text-[white] relative w-[154px] h-[38px] top-[5px] left-[4px] rounded-[45px] border-[3px] border-solid border-[color:var(--variable-collection-bg-duplicate)] flex justify-center items-center font-bold text-[16px]">
              Sign Up
            </div>
          </div>
        </div>
        <div className="
          mb-10 max-h-[40rem] h-[calc(0.71*40vw)] w-[40%]
          bg-[url('/Pills.png')] bg-no-repeat bg-contain bg-center z-10
          hidden md:block
        "/>
      </div>
      <div id="apps" className="pt-[5rem] bg-[#fff8f3] flex flex-col items-center justify-center gap-[10px] pb-[12rem] relative self-stretch w-full flex-[0_0_auto]">
        <div className=" flex flex-col items-center justify-center gap-[56px] relative self-stretch w-full flex-[0_0_auto]">
          <div className=" inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
            <img className="relative w-[50px] h-[50px]" alt="Application" src="/images/applications.svg" />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-variable-collection-black text-4xl text-center">
              APPLICATIONS
            </div>
          </div>
          <div className="w-full justify-items-center grid grid-cols-1 gap-[2rem] px-[calc(50%-10rem)]
            md:px-[calc(30%-12rem)] md:grid-rows-2 md:grid-cols-2 xl:grid-rows-1 xl:grid-cols-4 xl:px-[calc(25%-12rem)] text-center">
            <AppBox title="AIS Member"
            desc="Apply to our membership program to gain access to exclusive perks and a member-only community of fellow AI enthusiasts."
            appLink="https://www.aisutd.org/member/apply"
            learnLink="https://www.aisutd.org/member/info"/>
            <AppBox title="AI Mentee"
            desc="Apply as a mentee and get a chance to learn foundational concepts in ML and work on AI projects of your interest, guided by experienced mentors."
            appLink="https://www.aisutd.org/aim/apply"
            learnLink="https://www.aisutd.org/aim/info"/>
            <AppBox title="AI Mentor"
            desc="Apply as a mentor and get a chance to guide a team through a semester-long project in foundational AI and ML concepts."
            appLink="https://www.aisutd.org/aim/mentor/apply"
            learnLink="https://www.aisutd.org/aim/mentor/info"/>
            <AppBox title="AIS Officer"
            desc="Apply to the team and get an opportunity to organize events, be a part of our officer community, and more."
            appLink="https://www.aisutd.org/officer/apply"
            learnLink="https://www.aisutd.org/officer/info"/>
          </div>
        </div>
      </div>
      <div className="bg-[#fff8f3] flex flex-col w-[1440px] items-center gap-[80px] px-[120px] py-[112px] relative hidden">
        <div className="flex flex-col items-center gap-[48px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="justify-between self-stretch w-full flex-[0_0_auto] flex items-center relative">
            <img className="ml-[-4.00px] relative flex-[0_0_auto]" alt="Button" src="/images/leftbutton.png" />
            <div className="flex-col w-[768px] gap-[32px] flex items-center relative">
              <div className="inline-flex items-center gap-[10px] p-[30px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-0.50px] font-label font-[number:var(--label-font-weight)] text-variable-collection-dark-blue1 text-[length:var(--label-font-size)] text-center tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] whitespace-nowrap [font-style:var(--label-font-style)]">
                </div>
              </div>
              <p className="relative self-stretch font-h3 font-[number:var(--h3-font-weight)] text-variable-collection-dark-blue1 text-[length:var(--h3-font-size)] text-center tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                Joining AIS has been an incredible journey for me. The organization provides a supportive community and
                valuable opportunities to learn and grow in the field of artificial intelligence.
              </p>
              <div className="flex flex-col w-[300px] items-center gap-[16px] relative flex-[0_0_auto]">
                <img className="relative w-[56px] h-[56px] object-cover" alt="Avatar image" src="/images/avatarimage.png" />
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold relative self-stretch text-variable-collection-dark-blue1 text-[16px] text-center tracking-[0] leading-[24px]">
                    First Last
                  </div>
                  <div className="font-text font-[number:var(--text-font-weight)] relative self-stretch text-variable-collection-dark-blue1 text-[length:var(--text-font-size)] text-center tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
                    AI Engineer, Date
                  </div>
                </div>
              </div>
            </div>
            <img className="mr-[-4.00px] relative flex-[0_0_auto]" alt="Button" src="/images/rightbutton.png" />
          </div>
          <div className="inline-flex items-start gap-[9px] p-[10px] relative flex-[0_0_auto]">
            <div className="relative w-[8px] h-[8px] bg-[color:var(--variable-collection-blue3-duplicate)] rounded-[4px]" />
            <div className="relative w-[8px] h-[8px] bg-[#d9d9d9] rounded-[4px]" />
            <div className="relative w-[8px] h-[8px] bg-[#d9d9d9] rounded-[4px]" />
            <div className="relative w-[8px] h-[8px] bg-[#d9d9d9] rounded-[4px]" />
            <div className="relative w-[8px] h-[8px] bg-[#d9d9d9] rounded-[4px]" />
          </div>
        </div>
      </div>
    </main>
  );
};
export default JoinPage;

function AppBox( { title, desc, appLink, learnLink } )
{
  return(
    <div className="relative font-bold p-[1rem] rounded-3xl border-r-8 border-b-8 border-t-2 border-l-2 border-ais-new-light-blue flex flex-col gap-[20px] h-[100%] w-[100%] md:w-[100%]">
      <div className="text-center font-bold text-xl">{title}</div>
      <div className="font-normal text-ais-dark-gray text-md md:pb-[5rem] xl:pb-[8rem]">{desc}</div>
      <div className="w-full gap-[10px] justify-center flex
        xl:flex-col xl:items-center md:absolute md:bottom-[2rem] md:-ml-[1rem]"
      >
        <div onClick={() => {window.open(`${appLink}`, "_blank")}}
          className="relative w-[8rem] h-[2.5rem] bg-[#3E6EFF] rounded-[20px] flex justify-center items-center [cursor:pointer]"
        >
          <div className="bg-[#3E6EFF] text-[white] relative w-[7.5rem] h-[2rem] rounded-[16px] border-[3px] border-solid border-[color:var(--variable-collection-bg-duplicate)] flex justify-center items-center">
            <div className="top-[3px] font-bold text-sm">
              Apply
            </div>
          </div>
        </div>
        <div onClick={() => {window.open(`${learnLink}`, "_blank")}}
          className="w-[8rem] h-[2.5rem] border-[2px] border-[#3E6EFF] rounded-[20px] 
          flex justify-center items-center [cursor:pointer]
          font-bold text-sm text-[#3E6EFF]
        ">
          Learn More
        </div>
      </div>
    </div>
  );
}