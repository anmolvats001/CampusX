/**
 * Ultra-fast client-side image compression utility
 * Shrinks multi-megabyte photos to ~150KB-250KB WebP/JPEG in milliseconds
 * drastically improving upload speed and user experience.
 */

export const compressImage = async (
  file,
  options = { maxWidth: 1600, maxHeight: 1600, quality: 0.82 }
) => {
  // If not an image or already smaller than 250KB, return as-is
  if (!file || !file.type.startsWith("image/") || file.size <= 250 * 1024) {
    return file;
  }

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        let width = img.width;
        let height = img.height;

        const maxW = options.maxWidth || 1600;
        const maxH = options.maxHeight || 1600;

        // Calculate aspect ratio preserving dimensions
        if (width > height) {
          if (width > maxW) {
            height = Math.round((height * maxW) / width);
            width = maxW;
          }
        } else {
          if (height > maxH) {
            width = Math.round((width * maxH) / height);
            height = maxH;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, width, height);

        // Determine output type (WebP preferred, fallback to JPEG)
        const outputType =
          canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0
            ? "image/webp"
            : "image/jpeg";

        const extension = outputType === "image/webp" ? ".webp" : ".jpg";
        const baseName = file.name.replace(/\.[^/.]+$/, "");

        canvas.toBlob(
          (blob) => {
            if (!blob || blob.size >= file.size) {
              // If compression didn't reduce size (rare), use original
              resolve(file);
              return;
            }

            const compressedFile = new File([blob], `${baseName}${extension}`, {
              type: outputType,
              lastModified: Date.now(),
            });

            console.log(
              `[ImageCompressor] Compressed "${file.name}" (${(
                file.size /
                1024 /
                1024
              ).toFixed(2)} MB -> ${(compressedFile.size / 1024).toFixed(0)} KB)`
            );

            resolve(compressedFile);
          },
          outputType,
          options.quality || 0.82
        );
      };

      img.onerror = () => {
        resolve(file);
      };
    };

    reader.onerror = () => {
      resolve(file);
    };
  });
};

export const compressMultipleImages = async (
  files,
  onProgress = null
) => {
  if (!files || files.length === 0) return [];
  const results = [];

  for (let i = 0; i < files.length; i++) {
    if (onProgress) {
      onProgress(i + 1, files.length);
    }
    const compressed = await compressImage(files[i]);
    results.push(compressed);
  }

  return results;
};
