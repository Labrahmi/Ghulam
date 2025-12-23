import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { appConfig } from "@/config/app.config";

/**
 * Landing page
 * Entry point to the application
 */
export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Link 
        className="group hover:shadow-xl p-2 px-6 rounded-full bg-black text-white flex gap-2 justify-center items-center hover:bg-black/90 transition-all" 
        href={'/app'}
      >
        <div>Start Using {appConfig.name}</div>
        <ArrowRight className="size-4 group-hover:translate-x-1 transition-all" />
      </Link>
    </div>
  );
}
