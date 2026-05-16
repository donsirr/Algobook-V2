import { notFound, redirect } from "next/navigation";

import { getFirstDoc } from "@/lib/docs";

export default function Home() {
  const firstDoc = getFirstDoc();

  if (!firstDoc) {
    notFound();
  }

  redirect(firstDoc.href);
}
