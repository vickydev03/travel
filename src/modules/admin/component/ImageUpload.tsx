"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import { supabase } from "@/utils/supabase";
import { Button } from "@/components/ui/button";
import { Upload, X, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  accept?: string;
  bucket?: string;
  folder?: string;
}

export default function ImageUpload({
  value,
  onChange,
  label = "Upload Image",
  accept = "image/*,video/*",
  bucket = "travelData",
  folder = "",
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const uploadFile = useCallback(
    async (file: File) => {
      setUploading(true);
      try {
        const ext = file.name.split(".").pop();
        const fileName = `${folder ? folder + "/" : ""}${file.name.replace(/\.[^.]+$/, "").replace(/\s+/g, "-").toLowerCase()}-${Date.now()}.${ext}`;

        const { data, error } = await supabase.storage
          .from(bucket)
          .upload(fileName, file, {
            upsert: true,
            cacheControl: "3600",
            contentType: file.type,
          });

        if (error) {
          console.error("Upload error details:", error);
          toast.error(`Upload failed: ${error.message}`);
          throw error;
        }

        const { data: urlData } = supabase.storage
          .from(bucket)
          .getPublicUrl(data.path);

        onChange(urlData.publicUrl);
        toast.success("File uploaded!");
      } catch (err: any) {
        console.error("Upload error:", err);
      } finally {
        setUploading(false);
      }
    },
    [bucket, folder, onChange]
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) uploadFile(file);
  };

  const isVideo = value?.match(/\.(mp4|webm|ogg|mov)$/i);

  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-slate-700">{label}</label>
      )}

      {value ? (
        <div className="relative group rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
          {isVideo ? (
            <video
              src={value}
              className="w-full h-48 object-cover"
              controls
              muted
            />
          ) : (
            <div className="relative w-full h-48">
              <Image
                src={value}
                alt="Uploaded"
                fill
                className="object-cover"
              />
            </div>
          )}
          <button
            onClick={() => onChange("")}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${
            dragOver
              ? "border-blue-400 bg-blue-50"
              : "border-slate-300 hover:border-slate-400 bg-slate-50"
          }`}
        >
          <input
            type="file"
            accept={accept}
            onChange={handleFileChange}
            className="hidden"
            id={`upload-${label}`}
            disabled={uploading}
          />
          <label
            htmlFor={`upload-${label}`}
            className="cursor-pointer flex flex-col items-center gap-2"
          >
            {uploading ? (
              <Loader2 className="h-8 w-8 text-slate-400 animate-spin" />
            ) : (
              <Upload className="h-8 w-8 text-slate-400" />
            )}
            <span className="text-sm text-slate-500">
              {uploading
                ? "Uploading..."
                : "Click or drag file to upload"}
            </span>
          </label>
        </div>
      )}
    </div>
  );
}
