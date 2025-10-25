"use client";

import Modal from "@/components/Modal/Modal";
import { Note } from "@/types/note";
import { useRouter } from "next/navigation";
import css from "./NotePreview.module.css";

function NotePreview({ note }: { note: Note }) {
  const router = useRouter();

  return (
    <>
      <Modal onClose={() => router.back()}>
        <button
          type="button"
          onClick={() => router.back()}
          className={css.backBtn}
        >
          ✕
        </button>
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{note.title}</h2>
            </div>
            <p className={css.content}>{note.content}</p>
            <p className={css.date}>{`Created at: ${note.createdAt}`}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default NotePreview;
