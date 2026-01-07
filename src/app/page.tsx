import { readdirSync } from "node:fs";
import { join } from "node:path";
import { cwd } from "node:process";
import Image from "next/image";

export default function Home() {
  const path = join(cwd(), "content");

  console.log(path);
  const data = readdirSync(path, {
    withFileTypes: true,
  });

  return (
    <div>
      <h1>Content</h1>
      {data.map((dirent) => (
        <span key={dirent.name}>{dirent.name}</span>
      ))}
    </div>
  );
}
