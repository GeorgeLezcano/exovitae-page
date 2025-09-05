import { useEffect, useState } from "react";
import { Endpoints } from "../../../constants/Endpoints";
import { api } from "../../../api/client";

type FileMetadataDto = {
  id: string;
  name: string;
  type: string;
  size: number;
  description?: string | null;
  uploadTime: string;
  isPublic: boolean;
};
type PagedResultDto<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
};

const fileSrc = (id: string, bust = 0) =>
  `${Endpoints.Files}/${id}${bust ? `?v=${bust}` : ""}`;

function GalleryItem({ f }: { f: FileMetadataDto }) {
  if (!f.type.toLowerCase().startsWith("image/")) return null;

  const [broken, setBroken] = useState(false);
  const [bust, setBust] = useState(0);

  if (broken) {
    return (
      <div
        className="card"
        style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}
      >
        <div className="metaSubtle" style={{ padding: "1rem" }}>
          Failed to load <strong>{f.name}</strong>
        </div>
        <button
          className="sectionButton"
          onClick={() => {
            setBroken(false);
            setBust(Date.now());
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div
      className="card"
      style={{
        padding: 0,
        overflow: "hidden",
        maxWidth: 600,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ maxHeight: 350, minHeight: 220, overflow: "hidden" }}>
        <img
          src={fileSrc(f.id, bust)}
          alt={f.name}
          loading="lazy"
          decoding="async"
          onError={() => setBroken(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {f.description?.trim() && (
        <div
          style={{
            padding: "0.5rem 0.75rem",
            fontSize: "0.95rem",
            color: "#a8cfff",
            borderTop: "1px solid rgba(33,150,243,0.4)",
            backgroundColor: "rgba(33,150,243,0.05)",
          }}
        >
          {f.description}
        </div>
      )}
    </div>
  );
}

export default function MediaSection() {
  const [items, setItems] = useState<FileMetadataDto[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const pageSize = 12;

  const fetchPublicFiles = async () => {
    setLoading(true);
    setErr(null);
    try {
      const res = await api.get<PagedResultDto<FileMetadataDto>>(
        `${Endpoints.PublicFiles}?page=1&pageSize=${pageSize}`
      );
      setItems(res.items ?? []);
    } catch (e: any) {
      setErr(e?.message ?? "Failed to load media.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPublicFiles();
  }, []);

  return (
    <section className="sectionShell">
      <div className="sectionCard">
        <h1 className="pageTitle">Media</h1>
        <p className="pageSubtitle">Latest Uploads</p>
        <div className="accentDivider" />

        <div className="sectionHeader">
          <button className="sectionButton" onClick={fetchPublicFiles}>
            Refresh
          </button>
        </div>

        {err && (
          <div className="errorText" style={{ textAlign: "center" }}>
            {err}
          </div>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
            gap: "1.25rem",
            justifyItems: "center",
          }}
        >
          {items.map((f) => (
            <GalleryItem key={f.id} f={f} />
          ))}
        </div>

        {loading && (
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <span className="spinner" />
          </div>
        )}
        {!loading && items.length === 0 && (
          <div className="metaSubtle" style={{ textAlign: "center" }}>
            No Images to display
          </div>
        )}
      </div>
    </section>
  );
}
