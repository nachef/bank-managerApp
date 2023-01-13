import React, { ReactNode } from "react";

import { Container, Overlay, SidebarContent } from "./styles";

export type SidebarProps = {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Sidebar = ({ visible, onClose, children }: SidebarProps) => {
  return (
    <Container>
      <Overlay visible={visible} onClick={() => onClose()} />
      <SidebarContent visible={visible}>{children}</SidebarContent>
    </Container>
  );
};

export default Sidebar;
