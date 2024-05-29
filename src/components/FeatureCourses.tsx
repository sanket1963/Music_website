"use client";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string; 
}
function FeatureCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="sm:px-6 text-center">
          <h1 className="text-2xl text-teal-600 font-semibold tracking-normal uppercase">
            FEATURED COURSES
          </h1>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With The Best Music Academy
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm ">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <img src={course.image} alt={course.title} className="w-full h-auto mb-4" />
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-neural-600 text-sm dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link className="px-4 py-2 rounded-xl mt-2 bg-black dark:bg-white dark:text-black text-white text-xs font-bold" href={`/courses/${course.slug}`}>Learn More</Link>

                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          className="px-4 py-2 rounded border text-neutral-700 bg-white hover:bg-neutral-400 transition duration-200"
          href="/courses"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}
  

export default FeatureCourses;
