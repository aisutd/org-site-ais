import Head from 'next/head';
import Link from 'next/link';
import Subscribe from '../components/join/Subscribe';
import DescriptionIcon from '@mui/icons-material/Description';
import React from "react";
import SiteFooter from '../components/common/SiteFooter';


/**
 * The root page for the organization website.
 *
 * This page contains an overview of the organization and links to our programs
 * and events.
 */



export const JoinPage = () => {
  return (
    <div className="inline-flex flex-col items-start relative bg-beige">
      <div className="flex bg-[#fff8f3] w-[1440px] items-center justify-center gap-[80px] px-[120px] py-[112px] relative flex-[0_0_auto]">
        <div className="items-center gap-[80px] flex-1 grow flex relative">
          <div className="flex-col items-start gap-[24px] flex-1 grow flex relative">
            <div className="flex-col items-start gap-[32px] self-stretch w-full flex-[0_0_auto] flex relative">
              <div className="flex flex-col items-start gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-variable-collection-dark-blue1 text-[length:var(--text-regular-semi-bold-font-size)] text-center tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] whitespace-nowrap [font-style:var(--text-regular-semi-bold-font-style)]">
                  Join
                </div>
                <div className="flex-col items-start gap-[24px] self-stretch w-full flex-[0_0_auto] flex relative">
                  <p className="relative self-stretch mt-[-1.00px] [font-family:'Proxima_Nova',Helvetica] font-bold text-variable-collection-dark-blue1 text-[48px] tracking-[0] leading-[57.6px]">
                    UNLOCK THE BENEFITS OF JOINING AIS
                  </p>
                  <p className="relative self-stretch font-text-2 font-[number:var(--text-2-font-weight)] text-[#4f4f4f] text-[length:var(--text-2-font-size)] tracking-[var(--text-2-letter-spacing)] leading-[var(--text-2-line-height)] [font-style:var(--text-2-font-style)]">
                    By joining AIS, you gain access to valuable resources, mentorship opportunities, networking events,
                    and engaging workshops.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[24px] px-0 py-[8px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-[8px] relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-variable-collection-dark-blue1 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                    Access
                  </div>
                  <p className="relative self-stretch font-text-2 font-[number:var(--text-2-font-weight)] text-[#4f4f4f] text-[length:var(--text-2-font-size)] tracking-[var(--text-2-letter-spacing)] leading-[var(--text-2-line-height)] [font-style:var(--text-2-font-style)]">
                    Tap into a wealth of resources, including AI projects, research papers, and industry insights.
                  </p>
                </div>
                <div className="flex flex-col items-start gap-[8px] relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-variable-collection-dark-blue1 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                    Mentorship
                  </div>
                  <p className="relative self-stretch font-text-2 font-[number:var(--text-2-font-weight)] text-[#4f4f4f] text-[length:var(--text-2-font-size)] tracking-[var(--text-2-letter-spacing)] leading-[var(--text-2-line-height)] [font-style:var(--text-2-font-style)]">
                    Get guidance and support from experienced AI professionals through our mentorship program.
                  </p>
                </div>
              </div>
            </div>
            <div className=" relative w-[162px] h-[48px] bg-[#3E6EFF] rounded-[57px] shadow-[4px_4px_10px_#2930391f]">
              <div className="bg-[#3E6EFF] text-[white] relative w-[154px] h-[38px] top-[5px] left-[4px] rounded-[45px] border-[3px] border-solid border-[color:var(--variable-collection-bg-duplicate)]">
                <div className=" bg-[#3E6EFF] absolute top-[3px] left-[46px] [font-family:'Roboto-Bold',Helvetica] font-bold text-[color:var(--variable-collection-bg-duplicate)] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                  Sign Up
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  relative w-[622px] h-[441.5px]">
          <div className=" relative h-[442px]">
            <div className=" absolute w-[487px] h-[220px] top-0 left-[46px]">
              <div className=" bg-[#FFBC85] text-[#3E6EFF] inline-flex items-center justify-center gap-[7.73px] px-[46.35px] py-[12.36px] absolute top-[34px] left-[5px] bg-variable-collection-orange rounded-[44.03px] overflow-hidden rotate-[-10.90deg] shadow-[0px_3.09px_7.73px_#00000040]">
                <div className=" relative w-fit mt-[-0.77px] [font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-variable-collection text-[55.6px] tracking-[0] leading-[66.7px] whitespace-nowrap">
                  EMPOWERMENT
                </div>
              </div>
              <div className="  text-[white] inline-flex items-center justify-center gap-[7.73px] px-[46.35px] py-[12.36px] absolute top-[120px] left-[161px] bg-variable-collection-blue2 rounded-[44.03px] overflow-hidden rotate-[2.67deg] shadow-[0px_3.09px_7.73px_#00000040]">
                <div className=" relative w-fit mt-[-0.77px] [font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-variable-collection-bg text-[55.6px] tracking-[0] leading-[66.7px] whitespace-nowrap">
                  CONNECTION
                </div>
              </div>
            </div>
            <div className=" absolute w-[622px] h-[248px] top-[194px] left-0">
              <div className="bg-[#361CFF] text-[#FFBC85] inline-flex items-center justify-center gap-[7.73px] px-[46.35px] py-[12.36px] absolute top-[129px] left-[193px] bg-variable-collection-blue3 rounded-[44.03px] overflow-hidden rotate-[10.38deg] shadow-[0px_3.09px_7.73px_#00000040]">
                <div className="relative w-fit mt-[-0.77px] [font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-variable-collection-orange text-[55.6px] tracking-[0] leading-[66.7px] whitespace-nowrap">
                  COMMUNITY
                </div>
              </div>
              <div className="bg-[#88CAFF] text-[#361CFF] inline-flex items-center justify-center gap-[7.73px] px-[46.35px] py-[12.36px] absolute top-[23px] left-[5px] bg-variable-collection-blue1 rounded-[44.03px] overflow-hidden rotate-[-8.11deg] shadow-[0px_3.09px_7.73px_#00000040]">
                <div className="relative w-fit mt-[-0.77px] [font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-variable-collection-blue3 text-[55.6px] tracking-[0] leading-[66.7px] whitespace-nowrap">
                  NETWORKING
                </div>
              </div>
              <div className=" bg-[#FFBC85] inline-flex items-center justify-center gap-[7.73px] px-[46.35px] py-[12.36px] absolute top-[50px] left-[365px] bg-variable-collection-orange rounded-[44.03px] overflow-hidden rotate-[-5.22deg] shadow-[0px_3.09px_7.73px_#00000040]">
                <div className="relative w-fit mt-[-0.77px] [font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-variable-collection-dark-blue text-[55.6px] tracking-[0] leading-[66.7px] whitespace-nowrap">
                  EDUCATION
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#fff8f3] flex flex-col items-center justify-center gap-[10px] px-[120px] py-[112px] relative self-stretch w-full flex-[0_0_auto]">
        <div className=" flex flex-col items-center justify-center gap-[56px] relative self-stretch w-full flex-[0_0_auto]">
          <div className=" inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
            <img className=" relative w-[50px] h-[50px]" alt="Application" src="/images/applications.svg" />
            <div className=" relative w-fit mt-[-1.00px] [font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-variable-collection-black text-[48px] text-center tracking-[0] leading-[57.6px] whitespace-nowrap">
              APPLICATIONS
            </div>
          </div>
          <div className="flex w-[1200px] items-start gap-[32px] relative flex-[0_0_auto]">
            <img className="relative w-[388.67px] h-[387px] mb-[-10.00px]" alt="aim" src="/images/aim.png" />
            <img
              className="relative w-[388.67px] h-[387px] mb-[-10.00px]"
              alt="Card application 1"
              src="/images/membership.png"
            />
            <img
              className="relative w-[388.67px] h-[387px] mb-[-10.00px] mr-[-10.00px]"
              alt="Card application 2"
              src="/images/officer.png"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#fff8f3] flex flex-col w-[1440px] items-center gap-[80px] px-[120px] py-[112px] relative">
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
    </div>
  );
};
export default JoinPage;
