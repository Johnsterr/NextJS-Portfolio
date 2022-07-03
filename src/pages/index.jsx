import { ThumbUpIcon } from "@heroicons/react/outline";
import MainLayout from "../layouts/MainLayout.js";

const Home = function () {
  return (
    <MainLayout>
      <div className="container mx-auto max-w-2xl">
        <div className="flex flex-col items-center">
          <h1 className="mt-10 mb-6 text-5xl">
            NextJS Simple Starter <ThumbUpIcon className="w-10 h-10 inline"></ThumbUpIcon>
          </h1>
          <p className="text-2xl self-start">Starter include:</p>
          <ul className="mt-6 self-start">
            <li>• Next-Themes</li>
            <li>• TailwindCSS</li>
            <li>• Heroicons (React)</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
