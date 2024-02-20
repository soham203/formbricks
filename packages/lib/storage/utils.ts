export const getOriginalFileNameFromUrl = (fileURL: string) => {
  try {
    const fileNameFromURL = new URL(fileURL).pathname.split("/").pop();
    const fileExt = fileNameFromURL?.split(".").pop();
    const originalFileName = fileNameFromURL?.split("--fid--")[0];
    const fileId = fileNameFromURL?.split("--fid--")[1];

    if (!fileId) {
      const fileName = originalFileName ? decodeURIComponent(originalFileName || "") : "";
      return fileName;
    }

    const fileName = originalFileName ? decodeURIComponent(`${originalFileName}.${fileExt}` || "") : "";
    return fileName;
  } catch (error) {
    console.error("Error parsing file URL:", error);
  }
};