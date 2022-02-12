export const SUPPORTED_IMG_TYPES = [
  'image/png',
  'image/jpeg',
  'image/jpg',
];

export function validateIMGSupportedTypes(files: FileList) {
  return Array.from(files).every((file) =>
    SUPPORTED_IMG_TYPES.includes(file.type),
  );
}
