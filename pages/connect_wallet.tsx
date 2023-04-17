import { useState, useEffect } from 'react';
import Link from 'next/link'

function connect_wallet() {
    const [showFox, setShowFox] = useState(true);
    const [displayedParagraph, setDisplayedParagraph] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowFox(false);
        }, 2400);
        const timer1 = setTimeout(() => {
            setDisplayedParagraph(1);
          }, 300);
        const timer2 = setTimeout(() => {
            setDisplayedParagraph(2);
        }, 400);
        const timer3 = setTimeout(() => {
            setDisplayedParagraph(3);
        }, 500);
        const timer4 = setTimeout(() => {
            setDisplayedParagraph(4);
        }, 600);
        const timer5 = setTimeout(() => {
            setDisplayedParagraph(5);
        }, 700);
            
        return () => {
                clearTimeout(timer);
                clearTimeout(timer1);
                clearTimeout(timer2);
                clearTimeout(timer3);
                clearTimeout(timer4);
                clearTimeout(timer5);
            }
        }, []);
    return (
        <>
        {showFox ? (
            <div className="flex flex-col items-center min-w-screen min-h-screen bg-connect-back bg-no-repeat">
                <div className="mt-[45vh] font-extrabold text-[64px] leading-[77.5px]">HOW</div>
                <div className="flex flex-row text-2xl font-extrabold">
                    {displayedParagraph >= 1 && (
                            <p>CAN</p>
                        )}
                        {displayedParagraph >= 2 && (
                            <p>&nbsp;I</p>
                        )}
                        {displayedParagraph >= 3 && (
                            <p>&nbsp;TRUST</p>
                        )}
                        {displayedParagraph >= 4 && (
                            <p>&nbsp;YOU</p>
                        )}
                        {displayedParagraph >= 5 && (
                            <p>?</p>
                        )}
                </div>
            </div>
            ) : (
            <div className="flex flex-col items-center min-w-screen min-h-screen bg-no-repeat zoom-back">
                <Link href="meta_mask" className="mt-[28vh]">
                    <img src="/metafox.svg" />
                </Link>
                <Link href="discord" className="mt-[3.6vh]">
                    <img src="/discord.svg" />
                </Link>
                <Link href="google" className="mt-[3.7vh]">
                    <img src="/chrome.svg" />
                </Link>
                <div className="text-2xl text-[#4B4B4B] mt-[5.3vh]">show him this</div>
            </div>
        )}
        </>

    )
}

export default connect_wallet;