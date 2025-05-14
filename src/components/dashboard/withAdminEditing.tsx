
import React from "react";
import { useAdminCheck } from "@/hooks/use-admin-check";
import FloatingCustomizer from "@/components/dashboard/FloatingCustomizer";
import { useSectionEditor } from "@/hooks/use-section-editor";
import SectionEditDialog from "@/components/dashboard/SectionEditDialog";

// Higher Order Component to add admin editing capabilities to any page
export function withAdminEditing<P extends object>(
  Component: React.ComponentType<P>,
  pageId: string
) {
  return (props: P) => {
    const { isAdmin, toggleAdminMode } = useAdminCheck();
    const { editDialog, currentSection, handleEditSection, setEditDialog } = useSectionEditor();

    // For demo purposes only - toggle admin mode button
    const AdminToggle = () => (
      <button
        onClick={toggleAdminMode}
        className="fixed left-6 bottom-6 bg-slate-800 text-white text-xs px-3 py-1 rounded opacity-50 hover:opacity-100 z-50"
      >
        {isAdmin ? "Disable" : "Enable"} Editor Mode
      </button>
    );

    return (
      <>
        <Component
          {...props}
          isAdmin={true} // Always pass isAdmin as true
          pageId={pageId}
          onEditSection={handleEditSection}
        />
        
        <>
          <FloatingCustomizer isAdmin={true} />
          <AdminToggle />
          <SectionEditDialog
            open={editDialog}
            onOpenChange={setEditDialog}
            currentSection={currentSection}
          />
        </>
      </>
    );
  };
}
