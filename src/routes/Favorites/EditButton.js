import React from "react";
import clsx from "clsx";

import { useEditContext } from "./Favorites";

// Redux-related
import { useDispatch } from "react-redux";
import { removeFavorites } from "features/user/userSlice";

const EditButton = () => {
  const dispatch2 = useDispatch();

  const { editing, handleToggleEditing, uncheckedItems, resetUncheckedItems } =
    useEditContext();

  const handleClick = () => {
    handleToggleEditing();
    if (editing) {
      if (!uncheckedItems.length) return;
      setTimeout(() => {
        dispatch2(removeFavorites(uncheckedItems));
        resetUncheckedItems();
      }, 2000);
    }
  };
  const handleCancel = () => {
    handleToggleEditing();
    resetUncheckedItems();
  };

  return (
    <div className="favorites-edit grid-col-span-all">
      {editing && <button onClick={handleCancel}>Cancel</button>}
      <button
        className={clsx("regular-font", {
          editing: editing,
        })}
        onClick={handleClick}
      >
        {editing ? "Done" : "Edit"}
      </button>
    </div>
  );
};

export default EditButton;
