
import React from "react";
import SectionEditButton from "./SectionEditButton";

interface EditableSectionProps {
  children: React.ReactNode;
  isAdmin: boolean;
  sectionId: string;
  sectionName: string;
  onEdit: (sectionId: string) => void;
  pageId?: string;
}

const EditableSection: React.FC<EditableSectionProps> = ({
  children,
  isAdmin,
  sectionId,
  sectionName,
  onEdit,
  pageId
}) => {
  // Create a full section identifier that includes the page context
  const fullSectionId = pageId ? `${pageId}-${sectionId}` : sectionId;
  
  return (
    <div className="relative">
      {children}
      <SectionEditButton
        isAdmin={isAdmin}
        sectionId={fullSectionId}
        sectionName={sectionName}
        onEdit={onEdit}
      />
    </div>
  );
};

export default EditableSection;
