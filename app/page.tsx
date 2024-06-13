import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center mt-20 h-screen">
        <div className="flex flex-row mb-16 text-center gap-2">
          <Image
            src="/opinio_transparent_background/logo_light.png"
            alt="Opinio Logo"
            width={80}
            height={30}
          ></Image>
          <h1 className="text-4xl font-bold pt-8 text-gray-900">
            Opinio: Your voice. Brand success.
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-16 m-12">
          {/* User Section */}
          <div className="flex flex-col space-y-4">
            <p className="text-[#00004D] text-xl font-medium ">
              Join Opinio's vibrant community of opinion influencer.
            </p>
            <p>
              Share your opinions, influence brands, and earn rewards with
              Opinio's paid surveys. Sign up now to start making an impact!
            </p>
            <Button className="bg-blue-900/90 p-2 rounded-full text-white self-end">
              <Link href="/voiceofcustomer">
                <div className="flex items-center justify-center">
                  <span className="m-2">Be the Voice</span>
                </div>
              </Link>
            </Button>
          </div>
          {/* Corporate Section */}
          <div className="flex flex-col space-y-4">
            <p className="text-[#00004D] text-xl font-medium">
              Unlock the power of consumer insights and drive growth with
              Opinio's enterprise-grade SaaS platform.
            </p>
            <ul className="list-disc pl-4 space-y-2">
              <li>
                Build custom surveys to target the right audience and gather
                valuable feedback.
              </li>
              <li>
                Create professional surveys quickly and easily with our
                drag-and-drop builder - no coding required.
              </li>
              <li>
                Gain deep customer understanding through powerful analytics and
                insightful reports.
              </li>
              <li>
                Make data-driven decisions fueled by real-time consumer
                feedback.
              </li>
              <li>
                Maintain complete control over your surveys, data, and reports.
              </li>
            </ul>
            <Button className="bg-blue-900/90 p-2 rounded-full text-white self-end">
              <Link href="/corporate">
                <div className="flex items-center justify-center">
                  <span className="m-2">Empower Your Brand</span>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
