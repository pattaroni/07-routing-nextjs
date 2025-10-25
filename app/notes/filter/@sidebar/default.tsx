"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./SidebarNotes.module.css";

export default function SidebarNotes() {
  const pathname = usePathname();

  const categories = [
    { name: "All notes", slug: "all" },
    { name: "Work", slug: "Work" },
    { name: "Personal", slug: "Personal" },
    { name: "Meeting", slug: "Meeting" },
    { name: "Shopping", slug: "Shopping" },
    { name: "Todo", slug: "Todo" },
  ];

  return (
    <ul className={css.menuList}>
      {categories.map((tag) => {
        const href = `/notes/filter/${tag.slug}`;
        const isActive = pathname === href;

        return (
          <li key={tag.slug} className={css.menuItem}>
            <Link
              href={href}
              className={`${css.menuLink} ${isActive ? css.active : ""}`}
            >
              {tag.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
