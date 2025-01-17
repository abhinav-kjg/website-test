import Image from "next/image";
import testingDevApproach from "@/public/services/testingDevApproach.png";
export default function TestingDevelopmentApproach() {
    return (
        <main className="px-6 py-7">
            <h1 className="text-3xl md:text-4xl text-center font-bold text-primary-blue mb-12 tracking-wide">
                Server-Side Development Approach at KayJay Global Solutions
            </h1>
            <div className="select-none  mt-12 mb-0 md:mt-14 md:mb-14 ">
                <Image
                    src={testingDevApproach}
                    alt="server dev approach"
                    className="custom-770:w-full w-3/4 select-none mx-auto"
                />
            </div>
        </main>
    );
}
