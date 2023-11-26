function JoinUs()
{
  return(
    <div className="">
        <img
            src="joinus-banner.png"
            className="mb-20"
        />
        <img
            src="joinais.png"
            className="mb-10"
        />
        <img
            src="joinus-steps.png"
            className="mb-10"
        />
        <button className="mb-10 h-[2rem] w-32 border-[2px] text-sm text-ais-new-med-blue border-ais-new-med-blue rounded-[1rem] whitespace-nowrap px-[1rem] hover:bg-ais-new-med-blue hover:text-ais-new-beige">
            Learn More
        </button>
        <img className="md:py-8 md:w-30 md:float-left md:translate-x-28 md:-translate-y-28 hidden md:block" src="/star1.png" alt="star1" width="170"/>
        <img className="md:py-8 md:w-28 md:float-left md:translate-x-28 md:-translate-y-4 hidden md:block" src="/star3.png" alt="star3" width="170"/>
        <section className="bg-ais-new-darker-blue">
            <div className="flex">
                <img
                    src="stay_connected.png"
                    className="mr-10 h-auto"
                />
                <div className="flex bg-ais-new-beige w-full rounded-l-xl overflow-x-scroll">
                    <img src="post1.png" className="w-96 h-96 mx-10"/>
                    <img src="post2.png" className="w-96 h-96 mx-10"/>
                    <img src="post3.png" className="w-96 h-96 mx-10"/>
                    <img src="post4.png" className="w-96 h-96 mx-10"/>
                </div>
            </div>
            <img className="md:py-8 md:w-30 md:float-right md:-translate-x-20 md:-translate-y-40 hidden md:block" src="/star2.png" alt="star2" width="170"/>
            <img className="md:py-8 md:w-30 md:float-right md:-translate-x-12 md:-translate-y-28 hidden md:block" src="/star4.png" alt="star4" width="170"/> 
        </section>
        <section className="bg-ais-new-darker-blue h-60"></section>
    </div>
  )
}

export default JoinUs;