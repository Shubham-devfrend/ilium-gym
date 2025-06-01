import { GiWeightLiftingUp, GiRunningShoe, GiMeditation } from "react-icons/gi";

export const Services = [
  {
    title: "24/7 Gym Access",
    icon: <GiWeightLiftingUp />,
    description:
      "Round-the-clock access to our fully equipped facility, allowing members to work out at their convenience.",
    features: ["State-of-the-Art Equipment", "Flexible Workout Times", "Secure Entry System"],
  },
  {
    title: "Group Fitness Classes",
    icon: <GiRunningShoe />,
    description:
      "Engaging group sessions led by experienced coaches, designed to motivate and challenge participants.",
    features: ["Varied Class Schedules", "Community Engagement", "Expert Instruction"],
  },
  {
    title: "Personal Coaching",
    icon: <GiMeditation />,
    description:
      "One-on-one coaching tailored to individual goals, ensuring personalized guidance and support.",
    features: ["Customized Training Plans", "Progress Tracking", "Goal Setting"],
  },
];





export const Testimonials = [
  {
    "name": "Mike Johnson",
    "review": "I've been getting my hair cut at PMC Barbershop for over 2 years now. The attention to detail is unmatched, and the atmosphere is always welcoming."
  },
  {
    "name": "David Martinez",
    "review": "As someone who's particular about their haircut, I was nervous trying a new place. The team at PMC took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!"
  },
  {
    "name": "Chris Taylor",
    "review": "The hot towel shave experience at PMC Barbershop is phenomenal! It's the perfect blend of old-school barbering with modern techniques. My beard has never looked better."
  }
]

import { IoLocationOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";

export  const Info = [
    {name:"Address", content:'Troy, AL, United States', icon:<IoLocationOutline/>},
    {name:"Status", content:'Open 8 am ⋅ Closes 7 pm', icon:<FiClock/>},
    {name:"Phone", content:'+1 334-465-5610', icon:<FiPhone/>},
  ]
