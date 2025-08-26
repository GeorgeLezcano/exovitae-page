
export type FileMetadataDto = {
  id: string;
  name: string;
  type: string;
  size: number;
  description?: string | null;
  uploadTime: string; 
  isPublic: boolean;
};

export type PagedResultDto<T> = {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
};

export type FileMeta = {
  id: string;
  name: string;
  description?: string;
  type: string;
  extension: string;
  sizeBytes: number;
  uploadedAt: string;
  isPublic?: boolean;
};

export function mapDtoToFileMeta(d: FileMetadataDto): FileMeta {
  const dot = d.name.lastIndexOf(".");
  const ext = dot > 0 ? d.name.slice(dot + 1).toLowerCase() : "bin";
  const base = dot > 0 ? d.name.slice(0, dot) : d.name;
  return {
    id: d.id,
    name: base || "untitled",
    description: d.description ?? undefined,
    type: d.type || "application/octet-stream",
    extension: ext,
    sizeBytes: d.size || 0,
    uploadedAt: d.uploadTime,
    isPublic: d.isPublic,
  };
}
