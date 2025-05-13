
import { useState } from "react";

export function useSectionEditor() {
  const [editDialog, setEditDialog] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const handleEditSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    setEditDialog(true);
  };

  const closeDialog = () => {
    setEditDialog(false);
  };

  return {
    editDialog,
    currentSection,
    handleEditSection,
    closeDialog,
    setEditDialog
  };
}
