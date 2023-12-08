import {Event} from "../../lib/types";
import Link from 'next/link';
import Moment from "moment";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { google, outlook, ics } from 'calendar-link';
import { Menu } from '@headlessui/react';

interface EventItemProps {
  event: Event;
  onGoing?: boolean;
}

/**
 * An item that displays event details
 */
export default function FeatureEvent({ event, onGoing }: EventItemProps) {
  const { id, title, description, eventType, startDate, endDate, location, joinLink, rsvpLink } = event;
  const eventLink = `/events/${event.id}`;
  const eventTime = Moment(new Date(startDate)).format('MMM D, YYYY');

  const calEvent = {
    title: title,
    description: description,
    start: startDate,
    end: endDate,
    location: location === 'In-person' ? joinLink : null
  };

  let pulsingDiv;
  let pulsingBG = '';
  if (onGoing) {
    pulsingBG = 'animate-pulse ';
    pulsingDiv = (
      <div className="absolute top-0 right-0 -my-2 -mx-2">
        <span className="flex h-6 w-6">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-6 w-6 bg-blue-500"></span>
        </span>
      </div>
    );
  }

  /**
  let tagDiv;
  if (tags.length != 0) {
    tagDiv = (
      <div className="py-2">
        <div className="py-2 text-sm font-semibold">TAGS</div>
        <div className="flex flex-wrap gap-2">{tagElements}</div>
      </div>
    );
  }
   */

  return (
    <div
      key={id}
      className={
        'font-bold mx-4 h-full p-4 rounded-3xl border-r-8 border-b-8 border-t-2 border-l-2 border-ais-new-light-blue'
      }
    >
      
      {onGoing ? 
      <div className="flex justify-center items-center text-ais-dark-blue text-sm gap-4 font-bold">
        <div className="bg-slate-300 w-8/12 h-96 rounded-2xl">
          <div className="bg-slate-100 w-2/12 h-24 rounded-2xl ml-auto text-center">Dec</div>
        </div>
        <div className="h-auto w-1/2 px-8">
          <div className="font-bold text-black text-xs flex flex-wrap justify-between gap-2">
            {eventType.toUpperCase()}
          </div>
          <div className="flex text-black text-4xl font-bold py-2">{title}</div>
          <div className="mb-2 font-bold text-ais-dark-blue text-xs flex flex-wrap justify-between gap-2">
            <div className="py-2 flex text-ais-new-dark-blue">
              <CalendarTodayIcon style={{ fontSize: 14 }} />
              <div className="mx-2 ">{eventTime}</div>
            </div>
          </div>
          <div>
            <div className="text-xs text-ais-dark-gray">{description}</div>
          </div>
          <div className="flex py-2">
            <Link href={rsvpLink} className="ml-auto mr-2">
              <button
                className="h-[2rem] w-20 border-[2px] text-xs text-ais-new-dark-blue border-ais-new-dark-blue rounded-[1rem] whitespace-nowrap px-[1rem] hover:bg-ais-new-dark-blue hover:text-ais-new-beige"
              >
                RSVP
              </button>
            </Link>
            <Menu as="div" className="relative">
              <Menu.Button className="font-bold"><img src="rsvp-icon.png" className="mt-1" width="24"></img></Menu.Button>
              <Menu.Items className="origin-top-left absolute left-0 rounded-md w-28 bg-ais-white shadow-xl z-10 text-black">
                <Menu.Item>
                  <a
                    target="_blank"
                    href={ics(calEvent)}
                    className="transition duration-400 group flex gap-2 items-center px-4 py-2 text-sm hover:bg-ais-blue-gray hover:text-black rounded-sm"
                    rel="noreferrer"
                  >
                    <img src="/apple.svg" className="h-5" />
                    Apple
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    target="_blank"
                    href={google(calEvent)}
                    className="transition duration-400 group flex gap-2 items-center px-4 py-2 text-sm hover:bg-ais-blue-gray hover:text-black rounded-sm"
                    rel="noreferrer"
                  >
                    <img src="/google.svg" className="h-4" />
                    Google
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    target="_blank"
                    href={outlook(calEvent)}
                    className="transition duration-400 group flex gap-2 items-center px-4 py-2 text-sm hover:bg-ais-blue-gray hover:text-black rounded-sm"
                    rel="noreferrer"
                  >
                    <img src="/outlook.svg" className="h-4" />
                    Outlook
                  </a>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>
      :
      <div>
        <div className="bg-slate-300 w-full h-52 rounded-t-2xl mb-4"></div>
        <div className="font-bold text-black text-xs flex flex-wrap justify-between gap-2">
          {eventType.toUpperCase()}
        </div>
        <div className="flex text-xl font-bold py-2">{title}</div>
        <div className="mb-2 font-bold text-ais-dark-blue text-xs flex flex-wrap justify-between gap-2">
          <div className="flex text-ais-new-dark-blue">
            <CalendarTodayIcon style={{ fontSize: 14 }} />
            <div className="mx-2 ">{eventTime}</div>
          </div>
        </div>
        <div>
          <div className="text-xs text-ais-dark-gray">{description}</div>
        </div>
        <div className="flex text-ais-dark-blue text-sm gap-4 font-bold pt-6">
        <Link href={eventLink}>
          <button
            className="h-[2rem] w-28 border-[2px] text-xs text-ais-new-dark-blue border-ais-new-dark-blue rounded-[1rem] whitespace-nowrap px-[1rem] hover:bg-ais-new-dark-blue hover:text-ais-new-beige"
          >
            Learn more
          </button>
        </Link>
      </div>
      </div>
    }
    </div>
  );
}