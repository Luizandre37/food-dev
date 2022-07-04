import { ChevronRightRounded } from "@mui/icons-material";
import React from "react";

function SubMenuContainer() {
  return (
    <div className="subMenuContianer">
      <h3>Menu Categoria</h3>
      <div className="viewAll">
        <p>Ver Tudo</p>
        <i>
          <ChevronRightRounded />
        </i>
      </div>
    </div>
  );
}

export default SubMenuContainer;
