import { redirect } from "next/navigation";

function FilterPage() {
  redirect("/notes/filter/all");
}

export default FilterPage;
