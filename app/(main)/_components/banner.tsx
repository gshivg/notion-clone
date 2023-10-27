"use client";

import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/confirm-modal";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";

import { toast } from "sonner";

import { useRouter } from "next/navigation";

interface BannerProps {
  documentId: Id<"documents">;
}

export const Banner = ({ documentId }: BannerProps) => {
  const router = useRouter();
  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);

  const onRemove = () => {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: "Deleting Document...",
      success: "Document Deleted ...",
      error: "Failed to delete document...",
    });

    router.push("/documents");
  };

  const onRestrore = () => {
    const promise = restore({ id: documentId });

    toast.promise(promise, {
      loading: "Restoring document...",
      success: "Document restored ...",
      error: "Failed to restore document...",
    });
  };
  return (
    <div className="w-full bg-rose-500 text-center p-2 text-white flex items-center justify-center gap-x-2">
      <p>This page is in the Trash.</p>
      <Button
        size={"sm"}
        onClick={onRestrore}
        variant="outline"
        className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal">
        Restore Page
      </Button>
      <ConfirmModal onConfirm={onRemove}>
        <Button
          size={"sm"}
          variant="outline"
          className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal">
          Delete Forever
        </Button>
      </ConfirmModal>
    </div>
  );
};
