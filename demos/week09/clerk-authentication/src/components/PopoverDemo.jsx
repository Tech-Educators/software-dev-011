// This is the Popover component, as presented in the Radix Getting Started tutorial

import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
//import styles module (no destructuring; I want to the whole file)
import popoverStyles from "@/components/Popover.module.css";

import Link from "next/link";
const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger className={popoverStyles.PopoverTrigger}>
      Do you still want more info about coaster rollers?
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className={popoverStyles.PopoverContent}>
        <Link href="/rollers">Go to the rollers page!</Link>
        <Popover.Arrow className={popoverStyles.PopoverArrow} />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;
