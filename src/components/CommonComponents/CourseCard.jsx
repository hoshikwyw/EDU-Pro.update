import React from 'react'
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
import "../HomeComponents/popular.css"

const CourseCard = ({ course }) => {

    return (
        <div className=" flex justify-center items-center">
            <div className=" bg-slate-100 hover:bg-white hover:shadow-lg mainDiv h-auto p-3 group">
                <div className="">
                    <div className=" overflow-hidden ">
                        <div className=" transition-transform duration-500 ease-in-out hover:transform-gpu group-hover:scale-110 ">
                            <div className="  overflow-hidden relative">
                                <img
                                    className=""
                                    src={course.courseImage}
                                    alt="course-33"
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" flex py-4 justify-between relative">
                        <div className=" absolute flex items-center justify-between w-full invisible lg:visible font-semibold text-white top-[-250px]">
                            <div className=" static flex items-center gap-1 bg-orange-500 px-3 py-1">
                                <p className=" font-bold">
                                    <BsClock />
                                </p>
                                <p>{course.duration}</p>
                            </div>
                            <div className=" bg-slate-500 w-8 h-8 flex justify-center rounded-full ">
                                <button className=" text-lg ">
                                    <BsFillHeartFill />
                                </button>
                            </div>
                        </div>
                        <div className=" flex items-center gap-3">
                            <img
                                className=" w-[34px] h-[34px] rounded-[100%]"
                                src={course.teacherImage}
                                alt=""
                            />
                            <h2> {course.teacher} </h2>
                        </div>
                        <div className=" flex items-center gap-5">
                            <p className=" text-yellow-500">
                                <BsStarFill />
                            </p>
                            <span>{course.rate}</span>
                        </div>
                    </div>
                    <div>
                        <a
                            className=" cursor-pointer font-semibold tracking-wide inline-block leading-6 text-[20px]"
                            href="#"
                        >
                            {course.title}
                        </a>
                        <div className=" flex items-center gap-9 pt-5">
                            <div className=" flex items-center gap-3">
                                <p className=" text-gray-500 text-lg ">
                                    <BsPeople />
                                </p>
                                <p className=" text-[16px] text-gray-500">{course.totalStudent} Students</p>
                            </div>
                            <div className=" flex items-center gap-3">
                                <p className=" text-gray-500 text-lg ">
                                    <IoNewspaperOutline />
                                </p>
                                <p className=" text-[16px] text-gray-500">{course.totalLesson} Lessons</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className=" mt-4" />
                <div className=" flex items-center gap-3 mt-4">
                    <button className=" bg-[#525fe1] text-[16px] text-white px-4 py-1 rounded">
                        {course.price}
                    </button>
                    <p className="text-gray-500 line-through text-[16px]">{course.prePrice}</p>
                </div>
            </div>
        </div>
    )
}

export default CourseCard