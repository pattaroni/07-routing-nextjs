"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchSingleNote } from "@/lib/api";
import css from "./NoteDetails.module.css";
import Loader from "@/components/Loader/Loader";

const NoteDetailsClient = () => {
  const { id } = useParams<{ id: string }>();

  const { data: note, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchSingleNote(id),
    refetchOnMount: false,
  });
  if (error) throw error;
  if (!note) return <Loader>Loading, please wait...</Loader>;
  return (
    <main>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.content}>{note.content}</p>
          <p className={css.date}>{`Created at: ${note.createdAt}`}</p>
        </div>
      </div>
    </main>
  );
};

export default NoteDetailsClient;
