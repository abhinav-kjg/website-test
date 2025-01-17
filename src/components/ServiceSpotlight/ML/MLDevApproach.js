import Image from "next/image";
import serverDevApproach from "@/public/services/MLDevApproach.png";

export default function MLDevelopmentApproach() {
    return (
        <main className="px-6 py-7">
            <h1 className="text-3xl md:text-4xl text-center font-bold text-primary-blue mb-12 tracking-wide">
                Server-Side Development Approach at KayJay Global Solutions
            </h1>
            <div className="select-none  mt-12 mb-0 md:mt-14 md:mb-14 ">
                <Image
                    src={serverDevApproach}
                    alt="server dev approach"
                    className="custom-770:w-full w-3/4 select-none mx-auto"
                />
            </div>

            {/* <div className="relative my-20">
                <FaCircle className="text-gray-400 text-lg absolute left-44 top-[8.65rem] " />
                <Image
                    src={clientLine}
                    alt="progess line"
                    className="w-[75%] mx-auto "
                />
                <FaCircle className="text-gray-400 text-lg absolute right-44 -top-3" />

                <div className="absolute left-60 top-8 flex flex-col items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-custom-gray-bg flex items-center justify-center mb-4 pt-2 pl-1 shadow-lg relative">
                        <Image
                            src={steps[0].icon}
                            alt="client icon"
                            className="w-14 h-14"
                        />
                        <Image
                            src={number1}
                            alt="number 5"
                            className="w-7 h-7 absolute right-0 bottom-2"
                        />
                    </div>
                    <h4 className="text-center font-semibold">
                        {steps[0].title}
                    </h4>
                </div>
                <div className="absolute left-[29.5rem] -top-9 flex flex-col items-center justify-center">
                    <h4 className="text-center font-semibold">
                        {steps[1].title}
                    </h4>
                    <div className="w-28 h-28 rounded-full bg-custom-gray-bg flex items-center justify-center mb-4 pt-2 pl-1 shadow-lg relative">
                        <Image
                            src={steps[1].icon}
                            alt="client icon"
                            className="w-14 h-14"
                        />
                        <Image
                            src={number2}
                            alt="number 5"
                            className="w-7 h-7 absolute -right-1 top-3 rounded-full"
                        />
                    </div>
                </div>
                <div className="absolute left-[45rem] top-6 flex flex-col items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-custom-gray-bg flex items-center justify-center mb-4 pt-2 pl-1 shadow-lg relative">
                        <Image
                            src={steps[2].icon}
                            alt="client icon"
                            className="w-14 h-14"
                        />
                        <Image
                            src={number3}
                            alt="number 5"
                            className="w-7 h-7 absolute right-0 bottom-2"
                        />
                    </div>
                    <h4 className="text-center font-semibold">
                        {steps[2].title}
                    </h4>
                </div>
                <div className="absolute right-[28rem] top-3 flex flex-col items-center justify-center">
                    <h4 className="text-center font-semibold max-w-full lg:max-w-32">
                        {steps[3].title}
                    </h4>
                    <div className="w-28 h-28 rounded-full bg-custom-gray-bg flex items-center justify-center mb-4 pt-2 pl-1 shadow-lg relative">
                        <Image
                            src={steps[3].icon}
                            alt="client icon"
                            className="w-14 h-14"
                        />
                        <Image
                            src={number4}
                            alt="number 5"
                            className="w-7 h-7 absolute right-0 top-2"
                        />
                    </div>
                </div>
                <div className="absolute right-56 top-3 flex flex-col items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-custom-gray-bg flex items-center justify-center mb-4 pt-2 pl-1 shadow-lg relative">
                        <Image
                            src={steps[4].icon}
                            alt="client icon"
                            className="w-14 h-14"
                        />

                        <Image
                            src={number5}
                            alt="number 5"
                            className="w-7 h-7 absolute -right-2 bottom-4"
                        />
                    </div>
                    <h4 className="text-center font-semibold max-w-full lg:max-w-36">
                        {steps[4].title}
                    </h4>
                </div>
            </div> */}
        </main>
    );
}
