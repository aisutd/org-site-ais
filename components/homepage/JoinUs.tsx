function JoinUs()
{
  return(
    <div className="flex flex-col items-center text-center">
        <section className="w-full">
            <img
                src="joinus-banner.png"
                className="mb-24 w-full"
            />
            <img
                src="joinus-steps.png"
                className="mb-10 mx-auto"
            />
        </section>
        <section className="w-full">
            <img
                    src="joinus-bg.png"
                    className="w-full"
                />
        </section>
        <section className="bg-ais-new-darker-blue h-36 w-full z-20">
            <img className="md:py-8 md:float-left md:translate-x-72 md:-translate-y-40 hidden md:block" src="/star1.png" alt="star1" width="230"/>
            <img className="md:py-8 md:float-left md:translate-x-72 md:translate-y-4 hidden md:block" src="/star3.png" alt="star3" width="160"/>
        </section>
        <section className="bg-ais-new-darker-blue w-full">
            <div className="flex justify-start">
                <img
                    src="stay_connected.png"
                    className="mr-10 h-auto"
                    alt="stay connected"
                />
                <div className="z-10 flex bg-ais-new-beige w-full rounded-l-xl">
                    <img src="post1.png" onClick={() => {window.open('https://www.instagram.com/p/Cz9uuuZvYQp/?img_index=1', '_blank')}} className="ml-20 w-96 h-96 mx-10 my-auto rounded-2xl cursor-pointer"/>
                    <img src="post3.png" onClick={() => {window.open('https://www.instagram.com/p/CzmUWVDuDmp/', '_blank')}} className="w-96 h-96 mx-10 my-auto rounded-2xl cursor-pointer"/>
                    <img src="post4.png" onClick={() => {window.open('https://www.instagram.com/p/CzUnM2ULIKf/', '_blank')}} className="w-96 h-96 mx-10 my-auto rounded-2xl cursor-pointer"/>
                </div>
            </div>
            <img className="md:py-8 md:float-right md:-translate-x-32 md:-translate-y-32 hidden md:block" src="/star2.png" alt="star2" width="190"/>
            <img className="md:py-8 md:float-right md:-translate-x-16 md:-translate-y-32 hidden md:block" src="/star4.png" alt="star4" width="260"/> 
        </section>
    </div>
  )
}

export default JoinUs;