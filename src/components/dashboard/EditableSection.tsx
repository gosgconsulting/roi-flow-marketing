
import React from "react";
import SectionEditButton from "./SectionEditButton";

interface EditableSectionProps {
  children: React.ReactNode;
  isAdmin: boolean;
  sectionId: string;
  sectionName: string;
  onEdit: (sectionId: string) => void;
}

const EditableSection: React.FC<EditableSectionProps> = ({
  children,
  isAdmin,
  sectionId,
  sectionName,
  onEdit,
}) => {
  return (
    <div className="relative">
      {children}
      <SectionEditButton
        isAdmin={isAdmin}
        sectionId={sectionId}
        sectionName={sectionName}
        onEdit={onEdit}
      />
    </div>
  );
};

export default EditableSection;
