import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Home, Navbar, Welcome } from "#components";
import {
  Browser,
  Contact,
  Finder,
  Image,
  Photos,
  Resume,
  Terminal,
  Text,
  Trash,
} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <div className="flex items-center justify-end pt-1 pr-5">
        <p className="text-white text-sm italic">
          Please Note: Some links and icons are included for visual
          demonstration purposes only and may not be functional.
        </p>
      </div>
      <Welcome />
      <Dock />

      <Terminal />
      <Browser />
      <Photos />
      <Resume />
      <Finder />
      <Trash />
      <Text />
      <Image />

      <Contact />

      <Home />
    </main>
  );
};

export default App;
