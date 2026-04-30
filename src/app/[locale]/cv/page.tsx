"use client"
import Image from "next/image";
import avatar from "@/public/avatar.png";
import CV from "@/public/CV/CV.png";
import {useMessages} from "next-intl";

export default function Links() {

    const saveCV = async () => {
        const res = await fetch("/CV/CV_THIBAULT_MORIZET.pdf", {
            method: "get",
            mode: "no-cors",
            referrerPolicy: "no-referrer"
        })
        const blob = await res.blob()
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'CV_THIBAULT_MORIZET.pdf';
        link.href = url;
        link.click();
    };

    const messages = useMessages();
    const cv = messages.cv as any

    return (
        <>
            <div className="flex flex-col gap-16 md:gap-24">
                <div className="flex animate-in flex-col gap-8">
                    <Image
                        src={avatar}
                        width={100}
                        height={100}
                        alt="avatar"
                        className="mx-auto animate-in rounded-full bg-secondary"
                        style={{"--index": 1} as React.CSSProperties}
                    />
                    <div
                        className="animate-in space-y-1"
                        style={{"--index": 2} as React.CSSProperties}
                    >
                        <h1 className="text-center text-2xl font-bold tracking-tight">
                            Thibault Morizet
                        </h1>
                    </div>
                </div>
                <button onClick={saveCV}
                        className={"mx-auto px-4 py-2 rounded-lg text-sm hover:text-primary transition-colors bg-secondaryA text-primary animate-in w-fit"
                        }>
                    {cv.downloadCV}
                </button>
                <Image
                    src={CV}
                    width={600}
                    height={1000}
                    alt="CV"
                    className="mx-auto animate-in bg-secondary"
                    style={{"--index": 1} as React.CSSProperties}
                />
            </div>
        </>
    );
}
