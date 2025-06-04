
import React from "react";
import { useCMSAuth } from "@/hooks/use-cms-auth";
import FloatingCustomizer from "@/components/dashboard/FloatingCustomizer";
import { useSectionEditor } from "@/hooks/use-section-editor";
import SectionEditDialog from "@/components/dashboard/SectionEditDialog";
import VisualCMSEditor from "@/components/cms/VisualCMSEditor";

/**
 * WordPress Theme Component: Admin Editing Higher Order Component
 * 
 * This HOC adds admin editing capabilities to any page
 * 
 * WordPress Implementation:
 * - This would be converted to PHP functions in inc/editor.php
 * - Would use WordPress user role capabilities to check for admin status
 * - Would integrate with either Gutenberg blocks or ACF fields for section editing
 */

// Higher Order Component to add admin editing capabilities to any page
export function withAdminEditing<P extends object>(
  Component: React.ComponentType<P>,
  pageId: string
) {
  return (props: P) => {
    const { isAdmin, user } = useCMSAuth();
    const { editDialog, currentSection, handleEditSection, setEditDialog } = useSectionEditor();

    // For demo purposes - show admin toggle for development
    const AdminToggle = () => (
      <div className="fixed left-6 bottom-20 text-xs text-gray-500 z-40">
        {user ? (
          <div className="bg-white p-2 rounded shadow">
            <div>User: {user.email}</div>
            <div>Role: {user.role}</div>
            <div>Admin: {isAdmin ? 'Yes' : 'No'}</div>
          </div>
        ) : (
          <div className="bg-white p-2 rounded shadow">
            Not authenticated
          </div>
        )}
      </div>
    );

    return (
      <>
        <Component
          {...props}
          isAdmin={isAdmin}
          pageId={pageId}
          onEditSection={handleEditSection}
        />
        
        {/* Show admin controls only if user is admin */}
        {isAdmin && (
          <>
            <FloatingCustomizer isAdmin={isAdmin} />
            <VisualCMSEditor pageId={pageId} />
          </>
        )}
        
        {/* Development info */}
        <AdminToggle />
        
        <SectionEditDialog
          open={editDialog}
          onOpenChange={setEditDialog}
          currentSection={currentSection}
        />
      </>
    );
  };
}

export default withAdminEditing;
