
export default function HeroOtherPage( {title} ) {

    return (
        <>
            <div className='h-[30vh] lg:h-[40vh] flex justify-around items-center text-[#188FA7] shadow-3xl' id='hero'>
                <div className='flex flex-col items-center fade-in'>
                    <h2 id="finesse" className="py-12 lg:text-[400%] xl:text-[500%] text-[200%] px-4 text-center">{title}</h2>
                </div>
                <div>
                </div>
            </div>


        </>
    )
}