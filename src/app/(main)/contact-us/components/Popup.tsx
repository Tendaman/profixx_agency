'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface SuccessPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function SuccessPopup({ open, onClose }: SuccessPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Success</DialogTitle>
        </DialogHeader>
        <div className="text-center">
          <p>Your enquiry has been submitted successfully!</p>
          <Button onClick={onClose} className="mt-4 w-full">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
