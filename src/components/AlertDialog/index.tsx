import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CircularProgress, Stack } from '@mui/material';

interface AlertDialogProps {
  message: string;
  title: string;
  declineButtonLabel: string;
  acceptButtonLabel: string;
  onClose(): void;
  onAccept(): void;
  isOpen: boolean;
  loading?: boolean;
  acceptLoadingMessage?: string
}

export default function AlertDialog({ message, title, acceptButtonLabel, declineButtonLabel, onAccept, onClose, isOpen, loading, acceptLoadingMessage }: AlertDialogProps) {

  const handleAccept = () => {
    onAccept();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        PaperProps={{ style: { backgroundColor: "#2b2b2b" } }}
      >
        <DialogTitle
          color='white' >
          {title}
        </DialogTitle>
        <DialogContent >
          <DialogContentText
            color='white' id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{declineButtonLabel}</Button>
          <Button style={{ backgroundColor: '#EE4444' }} variant='contained' onClick={handleAccept} autoFocus>
            { loading && <Stack gap={2} flexDirection={'row'} >
              <CircularProgress color={'info'} size={'24px'} />{acceptLoadingMessage}
            </Stack>}
            { !loading && acceptButtonLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}