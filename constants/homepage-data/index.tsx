import { FaChartLine, FaUserMd, FaRobot, FaDatabase } from "react-icons/fa";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaqItemProps } from "@/components/sections/home/faq-item";

export const heroButtons = [
  { label: "Knee", slug: "knee" },
  { label: "Hip", slug: "hip" },
  { label: "Spine", slug: "spine" },
  { label: "Shoulder", slug: "shoulder" },
  { label: "Hand", slug: "hand" },
];

export const logos = [
  {
    id: "0",
    title: "Afterpay",
    url: "/images/logos/afterpay.svg",
    width: 156,
    height: 48,
  },
  {
    id: "1",
    title: "Amplitude",
    url: "/images/logos/amplitude.svg",
    width: 194,
    height: 48,
  },
  {
    id: "2",
    title: "Sonos",
    url: "/images/logos/sonos.svg",
    width: 115,
    height: 48,
  },
  {
    id: "3",
    title: "Maze",
    url: "/images/logos/maze.svg",
    width: 142,
    height: 48,
  },
  {
    id: "4",
    title: "Drips",
    url: "/images/logos/drips.svg",
    width: 77,
    height: 48,
  },
];

export const aboutSections = [
  {
    Icon: FaUserMd,
    name: "Joint Replacement",
    description:
      "Providing advanced hip and knee replacement surgeries with minimally invasive techniques for faster recovery.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="flex justify-center items-center bg-gray-100 absolute inset-0 object-cover w-full h-full">
        <DotLottieReact
          src="/lotties/policy.lottie" // <-- replace this with your actual path
          autoplay
          loop
        />
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: FaChartLine,
    name: "Sports Medicine",
    description:
      "Specialized care for athletes with injury prevention, treatment, and rehabilitation programs to get you back in the game.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        width={400}
        height={400}
        className="absolute inset-0 object-cover min-h-full mask-b-from-50% mask-b-to-100% w-full"
        src="/images/brain-ai.png"
        alt="brain-ai"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: FaRobot,
    name: "Spine Care",
    description:
      "Comprehensive spine treatments from non-surgical therapies to advanced surgical interventions for back and neck conditions.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        width={400}
        height={400}
        className="absolute inset-0 object-cover min-h-full mask-b-from-50% mask-b-to-100% w-full"
        src="/images/health-record.jpeg"
        alt="health-record"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: FaDatabase,
    name: "Rehabilitation Services",
    description:
      "Personalized physical therapy and rehabilitation programs to restore function, reduce pain, and improve mobility.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="flex justify-center items-center bg-gray-100 absolute inset-0 object-cover w-full min-h-full">
        <div className="relative w-full max-w-md mx-auto xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-xl 2xl:max-w-2xl">
          <DotLottieReact
            src="/lotties/robot.lottie"
            autoplay
            loop
            className="w-full h-auto"
            style={{ maxHeight: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
  },
];

export const outlinedServices = [
  { label: "Joint Replacement", slug: "joint" },
  { label: "Sports Medicine", slug: "sports" },
  { label: "Spine Care", slug: "spine" },
  { label: "Rehabilitation", slug: "rehab" },
  { label: "Trauma Care", slug: "trauma" },
];

// faqData.ts
export const faqData: FaqItemProps[] = [
  {
    id: 1,
    question: "What orthopaedic services does OSSO offer?",
    answer:
      "OSSO provides comprehensive orthopaedic care including joint replacement surgery, sports medicine, spine care, trauma treatment, and rehabilitation services. Our specialists treat conditions affecting bones, joints, muscles, ligaments, and tendons.",
  },
  {
    id: 2,
    question:
      "How long is the recovery period after joint replacement surgery?",
    answer:
      "Recovery time varies by patient and procedure. Most patients can resume light activities within 3-6 weeks after surgery. Full recovery typically takes 3-6 months. Our rehabilitation team creates personalized recovery plans to optimize your healing process.",
  },
  {
    id: 3,
    question:
      "Does OSSO accept insurance and what payment options are available?",
    answer:
      "Yes, OSSO accepts most major insurance plans. We also offer flexible payment options and financing plans for patients without insurance or with high deductibles. Our patient services team can help verify your coverage and explain all available options.",
  },
  {
    id: 4,
    question:
      "What makes OSSO different from other orthopaedic clinics?",
    answer:
      "OSSO combines specialized expertise with personalized care. Our surgeons use the latest minimally invasive techniques, and we offer comprehensive care from diagnosis through rehabilitation. We focus on patient education and shared decision-making for better outcomes.",
  },
  {
    id: 5,
    question: "How do I schedule an appointment at OSSO?",
    answer:
      "You can schedule an appointment by calling our clinic directly, using our online appointment system, or requesting a referral from your primary care physician. New patients are typically seen within 1-2 weeks, with urgent cases accommodated sooner.",
  },
];
export const whyChooseOsso = [
  {
    title: "Board-Certified Orthopaedic Specialists",
    description:
      "OSSO brings together a team of board-certified orthopaedic surgeons and specialists with expertise in all areas of musculoskeletal care. Our physicians have advanced training in joint replacement, sports medicine, spine surgery, and trauma care. We stay at the forefront of orthopaedic medicine through ongoing education and research to provide the most effective treatments available.",
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center text-neutral-800 p-4 text-center">
        <div className="my-6 ">
          <Image
            width={100}
            height={100}
            src="/images/integrated.gif"
            alt="Orthopaedic Specialists"
            className="w-[300px] h-[200px] object-cover rounded-xl"
          />
        </div>
        <div className="font-semibold text-xl">
          Expert Orthopaedic Care Team
        </div>
      </div>
    ),
  },
  {
    title: "State-of-the-Art Facilities and Technology",
    description:
      "Our modern facilities are equipped with the latest diagnostic and treatment technologies. From advanced imaging systems to minimally invasive surgical equipment, we invest in tools that enhance precision, reduce recovery time, and improve outcomes. Our dedicated surgical centers and rehabilitation facilities provide comprehensive care in comfortable, patient-centered environments.",
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center text-neutral-800 p-4 text-center">
        <div className="mb-6">
          <Image
            width={100}
            height={100}
            src="/images/scalable.jpeg"
            alt="Modern Facilities"
            className="w-[300px] h-[200px] object-cover rounded-xl"
          />
        </div>
        <div className="font-semibold text-xl">
          Advanced Technology for Better Outcomes
        </div>
      </div>
    ),
  },
  {
    title: "Comprehensive Rehabilitation Programs",
    description:
      "Recovery is a critical part of orthopaedic care. Our comprehensive rehabilitation programs are designed by experienced physical therapists who work closely with our surgeons to create personalized recovery plans. We focus on restoring function, reducing pain, and preventing future injuries through evidence-based protocols and one-on-one therapy sessions.",
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center text-neutral-800 p-4 text-center">
        <div className="mb-6">
          <Image
            width={900}
            height={900}
            src="/images/medical-training.jpeg"
            alt="Rehabilitation Programs"
            className="w-[300px] h-[200px] object-cover rounded-xl"
          />
        </div>
        <div className="font-semibold text-xl">
          Personalized Recovery Journey
        </div>
      </div>
    ),
  },
  {
    title: "Patient-Centered Approach to Care",
    description:
      "At OSSO, we believe in putting patients first. We take time to listen to your concerns, thoroughly explain treatment options, and involve you in decision-making. Our care coordinators guide you through every step of your treatment journey, from initial consultation to post-treatment follow-up. We strive to make your experience as comfortable and stress-free as possible.",
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center text-neutral-800 p-4 text-center">
        <div className="mb-6">
          <Image
            width={100}
            height={100}
            src="/images/sporting.jpg"
            alt="Patient Care"
            className="w-[300px] h-[200px] object-cover rounded-xl"
          />
        </div>
        <div className="font-semibold text-xl">
          Compassionate, Patient-First Care
        </div>
      </div>
    ),
  },
  {
    title: "Specialized Care for Athletes and Active Individuals",
    description:
      "Our sports medicine specialists understand the unique needs of athletes and active individuals. We offer specialized treatments for sports injuries, performance optimization, and injury prevention. From professional athletes to weekend warriors, we help you get back to the activities you love with customized treatment plans that address your specific goals and challenges.",
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center text-neutral-800 p-4 text-center">
        <div className="mb-6">
          <Image
            width={100}
            height={100}
            src="/images/ai-model.gif"
            alt="Sports Medicine"
            className="w-[300px] h-[200px] object-cover rounded-xl"
          />
        </div>
        <div className="font-semibold text-xl">
          Expert Sports Medicine Services
        </div>
      </div>
    ),
  },
];

import { Lightbulb, ShieldCheck, Handshake, Activity } from "lucide-react";
import Image from "next/image";

export interface CoreValueCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const coreValues: CoreValueCard[] = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of patient care, from diagnosis to treatment and rehabilitation.",
    icon: <Lightbulb className="w-10 h-10 text-red-600/30" />,
  },
  {
    title: "Compassion",
    description:
      "We treat each patient with empathy, respect, and understanding, recognizing the unique needs of every individual.",
    icon: <ShieldCheck className="w-10 h-10 text-red-600/30" />,
  },
  {
    title: "Innovation",
    description:
      "We embrace advanced techniques and technologies to provide the most effective orthopaedic treatments available.",
    icon: <Handshake className="w-10 h-10 text-red-600/30" />,
  },

  {
    title: "Patient-Centered",
    description:
      "We put patients at the center of everything we do, involving them in decisions and focusing on their goals and needs.",
    icon: <Activity className="w-10 h-10 text-red-600/30" />,
  },
];
