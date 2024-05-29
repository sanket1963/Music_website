"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: "Harmonic Ensemble Classes",
      description:
        "Join our harmonic ensemble classes and immerse yourself in the joy of making music together. Collaborate with fellow musicians, explore diverse genres, and refine your skills in a supportive environment. With our platform, you can synchronize your melodies effortlessly, harmonizing with your peers in real time. Say goodbye to solo practice sessions and embrace the beauty of collaborative music-making.",
    },
    {
      title: "Live Performance Feedback",
      description:
        "Receive real-time feedback on your performances and elevate your musical journey. With our platform, you can share your live performances with instructors and receive instant critiques to refine your technique and expression. No more waiting for feedback sessions – get insights as you play and fine-tune your skills on the spot. Say hello to continuous improvement and unlock your full potential as a musician.",
    },
    {
      title: "Mastery Tracking System",
      description:
        "Track your musical progress effortlessly with our mastery tracking system. Our platform ensures that you always have visibility into your development journey, from mastering scales to perfecting complex compositions. Say goodbye to uncertainty about your progress and embrace the clarity of real-time tracking. Stay motivated, set goals, and celebrate milestones as you advance on your musical path.",
    },
    {
      title: "Interactive Practice Sessions",
      description:
        "Experience interactive practice sessions like never before. With our platform, you can engage in virtual practice rooms with fellow students, exchange musical ideas, and collaborate on challenging pieces. Say goodbye to solitary practice sessions and embrace the camaraderie of shared learning. Stay inspired, motivated, and connected as you journey towards musical excellence.",
    },
  ];

const whyChooseUs = () => {
  return (
    <div>
        <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default whyChooseUs