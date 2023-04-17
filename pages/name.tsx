import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';

const subtitle = () => {
    const [showFox, setShowFox] = useState(true);
    const [displayedParagraph, setDisplayedParagraph] = useState(0);
    const router = useRouter();
    function handleKeyDown(event:any) {
        if (event.key === 'Enter') {
            router.push('connect_wallet');
        }
    }
    
    useEffect(() => {
    const timer = setTimeout(() => {
        setShowFox(false);
    }, 5000);
    const timer1 = setTimeout(() => {
        setDisplayedParagraph(1);
      }, 1000);
    const timer2 = setTimeout(() => {
        setDisplayedParagraph(2);
    }, 2000);
    const timer3 = setTimeout(() => {
        setDisplayedParagraph(3);
    }, 3000);
        
    return () => {
            clearTimeout(timer);
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        }
    }, []);
    return (
        <div>
            <Transition
            show={showFox}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
                <div className="flex flex-col items-center min-w-screen min-h-screen bg-subtitle-back bg-no-repeat text-[96px] font-extrabold leading-[116px]">
                {displayedParagraph >= 1 && (
                    <p  className="mt-[28.3vh]">WHO</p>
                )}
                {displayedParagraph >= 2 && (
                    <p>ARE</p>
                )}
                {displayedParagraph >= 3 && (
                    <p>YOU!</p>
                )}        
                </div>
            </Transition>
    
            <Transition
            show={!showFox}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
               <div className="flex flex-col items-center min-w-screen min-h-screen bg-black">
                    <div className=" font-extrabold text-[64px] mt-[39vh] leading-[77.5px]">I am</div>
                    <div>
                        <input type="text" className="w-[264px] h-[62px] rounded-[50px] bg-inputBack placeholder:text-inputPlaceholder placeholder:text-2xl placeholder:pl-[10px] pl-[20px] text-2xl" placeholder="Name" onKeyDown={handleKeyDown} />
                    </div>
                </div>
            </Transition>
        </div>
    )
}

export default subtitle;