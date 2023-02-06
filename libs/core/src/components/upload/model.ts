export type UploadIcons = {
  upload: string;
  clear: string;
}

export type UploadProps = {
  uploaded: boolean;
  icons: UploadIcons;
  preview: string;
  onUpload: (value: Blob, preview: string) => void;
  onClear?: () => void;
};
