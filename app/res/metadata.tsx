import { Metadata } from "next";

export default function getMetadata(
  title: string,
  description: string | null = null,
): Metadata {
  return {
    title: title,
    description: description,
    authors: [{ name: "Florian Frauenfelder" }],
  };
}
