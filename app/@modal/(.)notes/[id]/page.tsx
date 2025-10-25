import { fetchSingleNote } from "@/lib/api";
import NotePreview from "./NotePreview.client";

type Props = {
  params: Promise<{ id: string }>;
};

async function NotePreviewModal({ params }: Props) {
  const { id } = await params;
  const note = await fetchSingleNote(id);

  return <NotePreview note={note} />;
}

export default NotePreviewModal;
