export type UploadIcons = {
  upload: string;
  clear: string;
}

export type UploadProps = {
  icons: UploadIcons;
  preview: string;
  onUpload: (value: Blob, preview: string) => void;
  onClear?: () => void;
};
