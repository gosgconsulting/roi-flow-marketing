
import React from "react";
import { useAdminCheck } from "@/hooks/use-admin-check";
import FloatingCustomizer from "@/components/dashboard/FloatingCustomizer";
import { useSectionEditor } from "@/hooks/use-section-editor";
import SectionEditDialog from "@/components/dashboard/SectionEditDialog";

/**
 * WordPress Theme Component: Admin Editing Higher Order Component
 * 
 * This HOC adds admin editing capabilities to any page
 * 
 * WordPress Implementation:
 * - This would be converted to PHP functions in inc/editor.php
 * - Would use WordPress user role capabilities to check for admin status
 * - Would integrate with either Gutenberg blocks or ACF fields for section editing
 * 
 * <?php
 * /**
 *  * Check if current user has editor capabilities
 *  *
 *  * @return bool Whether the current user can edit content
 *  *\/
 * function gosg_can_edit_content() {
 *   return current_user_can('edit_posts') || current_user_can('edit_pages');
 * }
 * 
 * /**
 *  * Add edit button to editable sections
 *  *
 *  * @param string $section_id The ID of the section to edit
 *  * @param string $section_title The title of the section
 *  * @return void
 *  *\/
 * function gosg_add_edit_button($section_id, $section_title = '') {
 *   if (!gosg_can_edit_content()) return;
 *   
 *   ?>
 *   <div class="gosg-edit-button" data-section="<?php echo esc_attr($section_id); ?>" data-title="<?php echo esc_attr($section_title); ?>">
 *     <button class="gosg-edit-trigger">
 *       <span class="dashicons dashicons-edit"></span> Edit
 *     </button>
 *   </div>
 *   <?php
 * }
 */

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

export default withAdminEditing;
