import Head from 'next/head';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Event } from '../../lib/types';
import { useTransition, animated } from '@react-spring/web';
import FeatureEvent from '../../components/events/FeatureEvent';
import { getAllEvents } from '../api/events';

interface EventsPageProps {
  events: Event[];
}

export default function EventsPage({ events }: EventsPageProps) {
  const futureEvents: Event[] = [];
  const onGoingEvents: Event[] = [];
  const pastEvents: Event[] = [];
  const pastEventsCols = [[], [], []];

  events.forEach(function (eachEvent) {
    const startTime = new Date(eachEvent.startDate);
    const endTime = new Date(eachEvent.endDate);
    const timeNow = new Date();
    if (endTime < timeNow) pastEvents.push(eachEvent);
    else if (timeNow < startTime) futureEvents.push(eachEvent);
    else onGoingEvents.push(eachEvent);
  });

  const pastEventCards = pastEvents.map((event) => {
    return (
      <div key={event.id} className="my-4">
        <FeatureEvent key={event.id} event={event} onGoing={false}/>
      </div>
    );
  });

  for (let i = 0; i < pastEventCards.length; i++) {
    pastEventsCols[i % 3].push(pastEventCards[i]);
  }
  const futureEventCards = futureEvents.map((event) => {
    return <FeatureEvent key={event.id} event={event} onGoing={true}/>;
  });

  /** 
  const onGoingEventCards = onGoingEvents.map((event) => {
    return <FeatureEvent key={event.id} event={event} onGoing={true} />;
  });
  */

  let pastEventsDiv;
  if (pastEvents.length == 0) {
    pastEventsDiv = <div>There are no past events</div>
  } else {
    pastEventsDiv = (
      <div className="flex flex-row flex-wrap">
        <div className="flex flex-col w-1/3 min-w-full xl:min-w-0">{pastEventsCols[0][0]}</div>
        <div className="flex flex-col w-1/3 min-w-full xl:min-w-0">{pastEventsCols[1][0]}</div>
        <div className="flex flex-col w-1/3 min-w-full xl:min-w-0">{pastEventsCols[2][0]}</div>
      </div>
    );
  }

  let upComingEventDiv;
    upComingEventDiv = (
      <div>
        {futureEventCards[0]}
      </div>
    );

  /** 
  let onGoingEventDiv;
  if (onGoingEvents.length != 0) {
    onGoingEventDiv = (
      <section className="bg-ais-light-gray py-8">
        <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-2">
          <div className="text-3xl font-bold mb-4">Ongoing Events</div>
          {onGoingEventCards}
        </div>
      </section>
    );
  }
  */

  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [items, set] = useState<string[]>([]);

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(['Coming']), 1000));
    ref.current.push(setTimeout(() => set(['Soon']), 2000));
    ref.current.push(setTimeout(() => set(['Coming', 'Soon']), 3000));
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);
  return (
    <div>
      <Head>
        <title>Events &ndash; AIS</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta
          name="description"
          content="An overview of all our AI/ML projects, including explanations and interactive demos."
        />
      </Head>
      <main className="flex flex-col justify-center min-h-screen bg-ais-new-beige">
        <section className="py-8 px-2 mt-10">
          <div className="relative mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-2">
          <img
              src="decoration2.png"
              className="mb-10"
            />
            {upComingEventDiv}
            <img
              src="decoration1.png"
              className="absolute right-0 w-30 translate-x-20 -translate-y-20 opacity-80 invisible lg:visible"
            />
          </div>
        </section>
        <section className="py-8 px-2">
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-2">
            <img
              src="decoration3.png"
              className="mb-10"
            />
            <div className="flex my-5 ml-4">
              <EventsButton title="View All"/>
              <EventsButton title="Workshops"/>
              <EventsButton title="Socials"/>
              <EventsButton title="Others"/>
            </div>
            {pastEventsDiv}
            <div className="items-end py-4 w-full">
              <img src="viewall-btn.png" className='ml-auto'></img>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const allEvents = await getAllEvents();

  return {
    props: {
      events: allEvents,
    },
  };
}

function EventsButton(props)
{
  return(
    <button
      className="py-1 px-4 border-[2px] text-sm text-ais-new-dark-blue border-ais-new-dark-blue rounded-[1rem] whitespace-nowrap hover:bg-ais-new-dark-blue hover:text-ais-new-beige ml-2"
    >
      {props.title}
    </button>
  );
}
