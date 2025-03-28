import { useState, useEffect } from "react";

import { PropsWithChildren } from "react";

export default function Hydration({ children }: PropsWithChildren<{}>) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true); // Ensures this runs only on the client
  }, []);

  if (!isHydrated) {
    return null; // Render nothing until hydration is complete
  }

  return <>{children}</>;
}
