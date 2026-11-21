import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";
import SplitText from "gsap/SplitText";
import Observer from "gsap/Observer";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(
    useGSAP,
    TextPlugin,
    SplitText,
    Observer,
    ScrollSmoother,
    ScrollTrigger,
    ScrollToPlugin,
  );
}

export {
  gsap,
  useGSAP,
  TextPlugin,
  SplitText,
  Observer,
  ScrollSmoother,
  ScrollTrigger,
  ScrollToPlugin,
};

export default gsap;
