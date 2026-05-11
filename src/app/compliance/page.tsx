import { redirect } from "next/navigation";

/** Legacy route — bookmarks and inbound links preserve continuity */
export default function ComplianceRedirectPage() {
  redirect("/privacy-policy");
}
