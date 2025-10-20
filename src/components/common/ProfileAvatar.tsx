import React, { useEffect, useRef, useState } from "react";
import { Endpoints } from "../../constants/Endpoints";
import { defaultProfileAvatar } from "../../constants/Global";
import { api } from "../../api/client";

export default function ProfileAvatar() {
  const [src, setSrc] = useState<string>(defaultProfileAvatar);
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const currentUrlRef = useRef<string | null>(null);
  const setSafeSrc = (url: string) => {
    if (currentUrlRef.current && currentUrlRef.current.startsWith("blob:")) {
      URL.revokeObjectURL(currentUrlRef.current);
    }
    currentUrlRef.current = url;
    setSrc(url);
  };

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setLoading(true);
      try {
        const blob = await api.getBlob(Endpoints.ProfileAvatar);
        if (cancelled) return;
        const url = URL.createObjectURL(blob);
        setSafeSrc(url);
      } catch {
        if (!cancelled) setSrc(defaultProfileAvatar);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
      if (currentUrlRef.current && currentUrlRef.current.startsWith("blob:")) {
        URL.revokeObjectURL(currentUrlRef.current);
      }
    };
  }, []);

  const openPicker = () => inputRef.current?.click();

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setSafeSrc(previewUrl);
    setUploading(true);

    try {
      const form = new FormData();
      form.append("file", file);

      await api.uploadForm(Endpoints.ProfileAvatar, form);
    } catch {
      setSrc(defaultProfileAvatar);
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const showOverlay = hover || loading || uploading;

  return (
    <div
      onClick={openPicker}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        width: 80,
        height: 80,
        borderRadius: "50%",
        overflow: "hidden",
        cursor: "pointer",
        border: "2px solid #2196f3",
        userSelect: "none",
      }}
      title="Click to upload a profile picture"
      role="button"
      aria-label="Upload profile picture"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openPicker()}
    >
      <img
        src={src}
        alt="Profile"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          filter: hover ? "brightness(85%)" : "none",
          transition: "filter 120ms ease",
        }}
        draggable={false}
      />

      {showOverlay && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              loading || uploading ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.15)",
            display: "grid",
            placeItems: "center",
            pointerEvents: "none",
          }}
        >
          {(loading || uploading) && (
            <div
              aria-label={loading ? "Loading avatar" : "Uploading avatar"}
              style={{
                width: 22,
                height: 22,
                border: "3px solid rgba(255,255,255,0.6)",
                borderTopColor: "transparent",
                borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
              }}
            />
          )}
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={onFileChange}
      />
      <style>
        {`@keyframes spin { from {transform: rotate(0)} to {transform: rotate(360deg)} }`}
      </style>
    </div>
  );
}
