import React from "react";
import {
  BsStarFill,
  BsPeople,
  BsArrowRight,
  BsClock,
  BsFillHeartFill,
} from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import "./popular.css"
import CourseCard from "../CommonComponents/CourseCard";
import { courses } from "../../assets/courses";


const PopularCourse = () => {
  return (
    <div className=" mt-14 mb-28">
      <div
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1500"
        className=" flex flex-col gap-1 items-center py-10"
      >

        <h2 className=" text-[16px] font-sans text-[#525fe1] font-semibold tracking-widest ">
          POPULAR COURSES
        </h2>
        <h2 className=" text-[32px] lg:text-[40px] break-words w-[250px] md:w-auto lg:w-auto text-center flex justify-center items-center font-bold font-sans text-slate-800 ">
          Featured On This Month
        </h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="2000"
        className=" flex flex-wrap items-center justify-center gap-10"
      >
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <div className=" flex justify-center mb-3 mt-20">


        <Link to={'/courses'}>

          <button className=" bg-[#525fe1] hover:bg-[#070c44] px-8 py-4 flex items-center gap-3 rounded-md text-white font-semibold text-xl">
            View All Courses
            <BsArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularCourse;
