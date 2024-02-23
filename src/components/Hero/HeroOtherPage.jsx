export default function HeroOtherPage( {title} ) {
    return (
        <>
            <div className='h-[30vh] lg:h-[40vh] flex justify-around items-center text-gray-900 shadow-xl' id='hero'>
                <div className='flex flex-col items-center fade-in'>
                    <h2 id="finesse" className="py-12 lg:text-[500%] text-[400%] px-4 text-center">- {title} -</h2>
                </div>
                <div>
                </div>
            </div>


        </>
    )
}