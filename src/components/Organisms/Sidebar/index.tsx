import React, { ReactNode } from "react";

import * as C from "./styles";

export type SidebarProps = {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Sidebar = ({ visible, onClose, children }: SidebarProps) => {
  return (
    <C.Container>
      <C.Overlay visible={visible} onClick={() => onClose()} />
      <C.SidebarContent visible={visible}>{children}</C.SidebarContent>
    </C.Container>
  );
};

export default Sidebar;
